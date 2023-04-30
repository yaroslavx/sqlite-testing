import { FormEvent, useContext, useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import "./Input.css";
import { TDataContext, IDataFromBack } from "../../types/@types.data.js";
import { DataFromBackContext } from "../../shared/DataContext.js";
import { useNavigate } from "react-router-dom";


const Input = () => {
    const navigate = useNavigate()
    const [port, setPort] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { addData, setCurrentTime } = useContext(DataFromBackContext) as TDataContext

    console.log('render input')

    const renderData = (data: string) => {
        addData(data)
        setCurrentTime(Date.now())
    }

    const navigated = useRef(false)
    const start = (e: FormEvent) => {
        e.preventDefault()
        if (port === '') return
        setLoading(true)
        invoke('init_process', { port: port })
        listen('data', (data: IDataFromBack) => {
            console.log(data)
            if (data.payload) {
                renderData(data.payload.data)
                if (!navigated.current) {
                    navigate('/main')
                    navigated.current = true
                }
            }
        })
    }

    return (
        <div className='input_container'>
            <h1>Добро пожаловать в 3D Receiver!</h1>
            <form id="create-form" className='form'>
                <input type="text" id="port" placeholder="Введите порт" value={port} onChange={e => setPort(e.target.value)} />
                <button onClick={start} type="submit" className='create-button'>Подключиться</button>
            </form>
            {error && <div>Error</div>}
            {loading && <div className="input_loading"></div>}
        </div>
    );
}

export default Input;
