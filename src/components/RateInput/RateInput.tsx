import { useState } from "react"
import { invoke } from '@tauri-apps/api';
import './RateInput.css'

export const RateInput = () => {
    const [rate, setRate] = useState<string | null>(null)

    const handleInput = (value: string) => {
        setRate(value)
    }

    const handleSendRate = (key: string) => {
        if (key == 'Enter' && rate != null) {
            // send rate to back
            if (typeof Number(rate) === 'number' && Number(rate) >= 1) {
                invoke('change_rate', { rate: Math.floor(Number(rate) / 2) })
            }
        }
    }
    return <div className='rate'>
        <p>Частота опроса</p>
        <div>
            <input placeholder='1000' type='number' value={rate || ''} onChange={e => handleInput(e.target.value)} onKeyDown={e => handleSendRate(e.key)} />
            <p>мс</p>
        </div>
    </div>
}
