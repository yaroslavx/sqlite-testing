import { useState } from 'react';
import styles from './Main.module.css'
import { IconPlayFill, IconStopFill } from '../../assets/icons/PlayStop';
import PlotComponent from '../Plot/PlotComponent';
import { invoke } from '@tauri-apps/api';

// Need to improve input system

const Main = () => {
    const [rate, setRate] = useState<string | null>(null)
    const [play, setPlay] = useState(true)

    const handleInput = (value: string) => {
        setRate(value)
    }

    const handleSendRate = (key: string) => {
        if (key == 'Enter' && rate != null) {
            // send rate to back
            if (typeof Number(rate) === 'number' && Number(rate) >= 1) {
                console.log(`${Math.floor(Number(rate))}`);
                invoke('change_rate', { rate: Math.floor(Number(rate)) })
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.playstop}>
                    {play
                        ? <IconStopFill onClick={() => setPlay(false)} className={`${styles.icon} ${styles.stop}`} />
                        : <IconPlayFill onClick={() => setPlay(true)} className={`${styles.icon} ${styles.play}`} />
                    }
                </div>
                <div className={styles.rate}>
                    <p>Частота опроса</p>
                    <div>
                        <input type='number' value={rate || ''} onChange={e => handleInput(e.target.value)} onKeyDown={e => handleSendRate(e.key)} />
                        <p>мс</p>
                    </div>
                </div>
            </div>
            <PlotComponent play={play} />
        </div>
    );
};

export default Main;
