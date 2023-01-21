import { FormEvent, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [port, setPort] = useState('')
  const [dataFromBack, setDataFromBack] = useState<string[]>([])
  const start = (e: FormEvent) => {
    e.preventDefault()
    invoke('transfer_data', { port }).then(res => setDataFromBack(prev => [...prev, res as string]))
    setPort('')
  }

  return (
    <div className="container">
      <h1>Welcome to 3D Receiver!</h1>
      <form id="create-form">
        <input type="text" id="port" placeholder="Введите порт" value={port} onChange={e => setPort(e.target.value)} />
        <button onClick={(e) => start(e)} type="submit" className="create-button">Create file</button>
      </form>
      <p>{dataFromBack}</p>
    </div>
  );
}

export default App;
