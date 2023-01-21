import { FormEvent, useId, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import styles from "./Input.module.css";

const Input = () => {
    const [port, setPort] = useState('')
    const [dataFromBack, setDataFromBack] = useState<string[]>([])
    const start = (e: FormEvent) => {
        e.preventDefault()
        invoke('init_process', { port: port }).then(console.log)
        listen('data', (data) => console.log(data))
        setPort('')
    }
    return (
        <div className={styles.container}>
            <h1>Welcome to 3D Receiver!</h1>
            <form id="create-form">
                <input type="text" id="port" placeholder="Введите порт" value={port} onChange={e => setPort(e.target.value)} />
                <button onClick={(e) => start(e)} type="submit" className={styles["create-button"]}>Create file</button>
            </form>
            <p>{dataFromBack.map(value => <div key={useId()}>{value}</div>)}</p>
        </div>
    );
}

export default Input;
