import { Button, Input } from "antd"
import axios from "axios"
import { useState } from "react"

interface IInfo {
    originalUrl: string,
    createdAt: string,
    clickCount:number
}

export const InfoForm = () => {
    const [url,setUrl] = useState("")
    const [data, setData] = useState<IInfo|null>(null)
    const handleClick = async () => {
        const {data} = await axios.get(`http://localhost:8000/info/${url}`)
        const date = new Date(data.createdAt).toLocaleString()
        setData({
            originalUrl: data.originalUrl,
            createdAt: date,
            clickCount:data.clickCount
        });
        
        setUrl("")
    }

    return (
        <div className="DeleteForm">
            <h2>Получить информацию</h2>
            <div className="inputBtn">
                <div className="InputLabel">
                <label>Сокращенный URL</label>
                <Input
                    name="originalUrl"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Сокращенный URL"
                />
                </div>
                <Button onClick={handleClick} color="primary" variant="solid">
                Получить информацию
                </Button>
            </div>
            {
                data !== null?
                <>
                    <div className="info">
                        <p>{`Оригинальная ссылка: ${data.originalUrl}`}</p>
                        <p>{`Дата создания: ${data.createdAt}`}</p>
                        <p>{`Переходов: ${data.clickCount}`}</p>
                    </div>
                </>:null
            }
        </div>
    )
}