import { FormEvent, useContext, useId, useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import styles from "./Input.module.css";
import { TDataContext, IDataFromBack } from "../types/@types.data.js";
import { DataFromBackContext } from "../shared/DataContext.js";
import { useNavigate } from "react-router-dom";
import values from '../Plot/mockData'
import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";


const Input = () => {
    const navigate = useNavigate()
    const [port, setPort] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { addData } = useContext(DataFromBackContext) as TDataContext

    console.log('render input')

    const renderData = (dt: IDataFromBack) => {
        addData(dt)
    }

    const count = useRef(0)
    const renderTestData = (obj: IDataFromBack) => {
        addData(obj);
    }

    const navigated = useRef(false)
    const start = (e: FormEvent) => {
        e.preventDefault()
        if (port === '') return
        setLoading(true)
        invoke('init_process', { port: port })
        // для прода
        // listen('data', (data) => {
        //     console.log(data)
        //     if (data.payload) {
        //         renderData({ data: data.payload as string, createdAt: Date.now() })
        //         if (!navigated.current) {
        //             navigate('/main')
        //             navigated.current = true
        //         }
        //     }
        // })


        // для тестирования
        listen('data', () => {
            if (values[count.current]) {
                renderTestData({ data: values[count.current++], createdAt: Date.now() })
            } else {
                renderTestData({ data: values[1], createdAt: Date.now() })
            }
            if (!navigated.current) {
                navigate('/main')
                navigated.current = true
            }
            setLoading(false)
        })
    }

    return (
        <div className={styles.container}>
            <h1>Добро пожаловать в 3D Receiver!</h1>
            <form id="create-form" className={styles.form}>
                <input type="text" id="port" placeholder="Введите порт" value={port} onChange={e => setPort(e.target.value)} />
                <button onClick={start} type="submit" className={styles["create-button"]}>Подключиться</button>
            </form>
            {error && <div>Error</div>}
            {loading && <div>Загрузка</div>}
        </div>
    );
}

export default Input;
