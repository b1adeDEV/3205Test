import { Input, Button, DatePicker } from "antd";
import axios from "axios";
import { useState, ChangeEvent } from "react";
import dayjs, { Dayjs } from "dayjs";

interface IForm {
    originalUrl: string;
    expiresAt: string;
    alias: string;
}

export const CreateForm = () => {
    const [form, setForm] = useState<IForm>({
        originalUrl: "",
        expiresAt: "",
        alias: "",
    });

    const [url, setUrl] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Обработчик для DatePicker
    const handleDateChange = (date: Dayjs | null) => {
        setForm((prev) => ({
            ...prev,
            expiresAt: date ? date.toISOString() : "",
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:8000/shorten", form);
            setUrl(res.data.shortUrl);
            setForm({
                originalUrl: "",
                expiresAt: "",
                alias: "",
            });
        } catch (error) {
            console.error("Ошибка при создании ссылки:", error);
        }
    };

    return (
        <>
            <h2>Создать сокращенную ссылку</h2>

            <div className="InputLabel">
                <label>Оригинальная ссылка</label>
                <Input
                    name="originalUrl"
                    value={form.originalUrl}
                    onChange={handleChange}
                    placeholder="Оригинальная ссылка"
                />
            </div>

            <div className="InputLabel">
                <label>Дата окончания</label>
                <DatePicker
                    style={{ width: 300 }}
                    onChange={handleDateChange}
                    value={form.expiresAt ? dayjs(form.expiresAt) : null}
                />
            </div>

            <div className="InputLabel">
                <label>Пользовательский алиас</label>
                <Input
                    name="alias"
                    value={form.alias}
                    onChange={handleChange}
                    placeholder="Пользовательский алиас"
                />
            </div>

            <div>
                <Button type="primary" onClick={handleSubmit}>
                    Создать
                </Button>
            </div>

            {url && (
                <div className="shortUrl">
                    <p>
                        {`Сокращенная ссылка: `}
                        <a href={`http://localhost:8000/${url}`} target="_blank" rel="noopener noreferrer">
                            {`http://${url}`}
                        </a>
                    </p>
                </div>
            )}
        </>
    );
};
