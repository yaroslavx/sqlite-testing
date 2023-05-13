import { useContext, useLayoutEffect, useRef, useState } from 'react';
import './Main.css'
import { IconPlayFill, IconStopFill } from '../../assets/icons/PlayStop';
import { PlotComponent } from '../Plot/PlotComponent';
import { DataFromBackContext } from '../../shared/DataContext';
import { TDataContext } from '../../types/@types.data';
import { arrTo3DArray } from '../../utils/arrayUtils';
import { detectErrorCoords } from '../../utils/errorDetection';
import { RateInput } from '../RateInput/RateInput';
import { outOfBorders } from '../../utils/outOfBorders';
import { CurrentTime } from '../CurrentTime/CurrentTime';
import { ErrorCoords } from '../ErrorCoords/ErrorCoords';
import { OutOfBordersCoords } from '../OutOfBordersCoords/OutOfBordersCoords';
import { relaunch } from '@tauri-apps/api/process';
import { exit } from '@tauri-apps/api/process';
import { BordersInput } from '../BordersInput/BordersInput';

const handleRelaunch = async () => {
    await relaunch();
}

const handelExit = async () => {
    await exit(1);
}

const Main = () => {
    const [play, setPlay] = useState(true)
    const errorDataRef = useRef<string[] | null>(null)
    const outOfBordersRef = useRef<{ min: string[]; max: string[]; } | null>(null)
    const [snapshotData, setSnapshotData] = useState<number[]>()
    const [snapshotTime, setSnapshotTime] = useState(0)

    const minBorderRef = useRef<number>(0)
    const maxBorderRef = useRef<number>(1000)

    const { data, currentTime } = useContext(DataFromBackContext) as TDataContext

    let plotData = data[data.length - 1].split(' ').map(x => parseInt(x, 10)).filter(x => x)
    plotData = [...plotData.slice(0, 53), plotData[52], ...plotData.slice(54, 92), plotData[91], ...plotData.slice(93)]
    useLayoutEffect(() => {
        if (plotData.length < 100) {
            const diff = 100 - plotData.length
            for (let i = 0; i < diff; i++) {
                plotData.push(Math.floor(plotData.reduce((p, c) => p + c, 0) / plotData.length || 100))
            }
        }
        if (plotData.length === 100) {
            const ThreeDArr = arrTo3DArray(plotData)
            errorDataRef.current = detectErrorCoords(ThreeDArr, 500)
            outOfBordersRef.current = outOfBorders(ThreeDArr, minBorderRef.current, maxBorderRef.current)
        }

    }, [data, play])


    const handleStopPlaying = () => {
        setPlay(false)
        setSnapshotData(plotData)
        setSnapshotTime(currentTime)
    }

    return (
        <div className='container'>
            <div className='menu'>
                <div className='playstop'>
                    {play
                        ? <div className='playbutton'>
                            <span>Остановить</span>
                            <IconStopFill onClick={handleStopPlaying} className='icon stop' />
                        </div>
                        : <div className='playbutton'>
                            <span>Продолжить</span>
                            <IconPlayFill onClick={() => setPlay(true)} className='icon play' />
                        </div>
                    }
                </div>
                <RateInput />
                <CurrentTime currentTime={currentTime} snapshotTime={snapshotTime} play={play} />
                <BordersInput minBorderRef={minBorderRef} maxBorderRef={maxBorderRef} />
                {outOfBordersRef.current && <OutOfBordersCoords min={outOfBordersRef.current.min} max={outOfBordersRef.current.max} />}
                {errorDataRef.current && <ErrorCoords coords={errorDataRef.current} />}
                <button className='relaunch_button' onClick={handleRelaunch}>Перезапуск</button>
                <button className='exit_button' onClick={handelExit}>Выход</button>
            </div>
            <PlotComponent data={(play) ? plotData : snapshotData} cmin={minBorderRef.current} cmax={maxBorderRef.current} />
        </div>
    );
};

export default Main;
