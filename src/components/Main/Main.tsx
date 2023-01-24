import { useState } from 'react';
import styles from './Main.module.css'
import { IconPlayFill, IconStopFill } from '../../assets/icons/PlayStop';
import PlotComponent from '../Plot/PlotComponent';

const Main = () => {
    const [rate, setRate] = useState('')
    const [play, setPlay] = useState(true)

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
                        <input value={rate} onChange={e => setRate(e.target.value)} />
                        <p>мс</p>
                    </div>
                </div>
            </div>
            <PlotComponent play={play} />
        </div>
    );
};

export default Main;
