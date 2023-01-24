import { FormEvent, useContext, useId, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import styles from "./Input.module.css";
import { DataContext, IDataFromBack } from "../types/@types.data.js";
import { DataFromBackContext } from "../shared/DataContext.js";
import { useNavigate } from "react-router-dom";

const Input = () => {
    const navigate = useNavigate()
    const [port, setPort] = useState('')

    const { addData } = useContext(DataFromBackContext) as DataContext

    const renderData = (data: IDataFromBack) => {
        if (data) {
            addData(data)
            navigate('/main')
        }
    }

    const start = (e: FormEvent) => {
        e.preventDefault()
        if (port === '') return
        invoke('init_process', { port: port })
        listen('data', (data) => renderData(data.payload as IDataFromBack))
        setPort('')
    }
    return (
        <div className={styles.container}>
            <h1>Welcome to 3D Receiver!</h1>
            <form id="create-form" className={styles.form}>
                <input type="text" id="port" placeholder="Введите порт" value={port} onChange={e => setPort(e.target.value)} />
                <button onClick={start} type="submit" className={styles["create-button"]}>Create file</button>
            </form>
        </div>
    );
}

export default Input;
