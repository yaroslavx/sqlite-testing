import { useContext, useState } from 'react';
import styles from './Main.module.css'
import { IconPlayFill, IconStopFill } from '../../assets/icons/PlayStop';
import PlotComponent from '../Plot/PlotComponent';
import { invoke } from '@tauri-apps/api';
import { DataFromBackContext } from '../shared/DataContext';
import { TDataContext } from '../types/@types.data';

// Need to improve input system

const Main = () => {
    const [rate, setRate] = useState<string | null>(null)
    const [play, setPlay] = useState(true)
    const [snapshotData, setSnapshotData] = useState({ data: `100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100`, createdAt: Date.now() })


    const handleInput = (value: string) => {
        setRate(value)
    }

    const handleSendRate = (key: string) => {
        if (key == 'Enter' && rate != null) {
            // send rate to back
            if (typeof Number(rate) === 'number' && Number(rate) >= 1) {
                invoke('change_rate', { rate: Math.floor(Number(rate)) })
            }
        }
    }

    const { data } = useContext(DataFromBackContext) as TDataContext

    const handleStopPlaying = () => {
        setPlay(false)
        setSnapshotData(data[data.length - 1])
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.playstop}>
                    {play
                        ? <div className={styles.playbutton}>
                            <span>Остановить</span>
                            <IconStopFill onClick={handleStopPlaying} className={`${styles.icon} ${styles.stop}`} />
                        </div>
                        : <div className={styles.playbutton}>
                            <span>Продолжить</span>
                            <IconPlayFill onClick={() => setPlay(true)} className={`${styles.icon} ${styles.play}`} />
                        </div>
                    }
                </div>
                <div className={styles.rate}>
                    <p>Частота опроса</p>
                    <div>
                        <input placeholder='1000' type='number' value={rate || ''} onChange={e => handleInput(e.target.value)} onKeyDown={e => handleSendRate(e.key)} />
                        <p>мс</p>
                    </div>
                </div>
            </div>
            <PlotComponent data={(play && data[data.length - 1]) ? data[data.length - 1].data.split(' ').map(x => parseInt(x, 10)) : snapshotData.data.split(' ').map(x => parseInt(x, 10))} />
        </div>
    );
};

export default Main;
