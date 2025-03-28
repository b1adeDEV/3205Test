import { Button, Input } from "antd"
import axios from "axios"
import { useState } from "react"

export const DeleteForm = () => {
    const [url,setUrl] = useState("")

    const handleClick = () => {
        axios.delete(`http://localhost:8000/delete/${url}`)
        setUrl("")
    }

    return (
        <div className="DeleteForm">
            <h2>Удалить сокращенную ссылку</h2>
            <div className="inputBtn" >
                <div className="InputLabel">
                <label>Сокращенный URL</label>
                <Input
                    name="originalUrl"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Сокращенный URL"
                />
                </div>
                <Button onClick={handleClick} color="danger" variant="solid">
                Удалить
                </Button>
            </div>
            
        </div>
    )
}
