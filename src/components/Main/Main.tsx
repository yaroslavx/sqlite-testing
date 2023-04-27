import { useContext, useLayoutEffect, useRef, useState } from 'react';
import './Main.css'
import { IconPlayFill, IconStopFill } from '../../assets/icons/PlayStop';
import { PlotComponent } from '../Plot/PlotComponent';
import { DataFromBackContext } from '../shared/DataContext';
import { TDataContext } from '../types/@types.data';
import { arrTo3DArray } from '../../utils/arrayUtils';
import { detectErrorCoords } from '../../utils/errorDetection';
import { RateInput } from '../RateInput/RateInput';
import { outOfBorders } from '../../utils/outOfBorders';

const Main = () => {
    const [play, setPlay] = useState(true)
    const errorDataRef = useRef<string[] | null>(null)
    const outOfBordersRef = useRef<{ min: string[]; max: string[]; } | null>(null)
    const [snapshotData, setSnapshotData] = useState<number[]>()
    const [snapshotTime, setSnapshotTime] = useState(0)

    console.log('render main')

    const { data, currentTime } = useContext(DataFromBackContext) as TDataContext

    const plotData = data[data.length - 1].split(' ').map(x => parseInt(x, 10)).filter(x => x)
    useLayoutEffect(() => {
        if (plotData.length < 100) {
            const diff = 100 - plotData.length
            for (let i = 0; i < diff; i++) {
                plotData.push(Math.floor(plotData.reduce((p, c) => p + c, 0) / plotData.length || 100))
            }
        }
        if (plotData.length === 100) {
            const ThreeDArr = arrTo3DArray(plotData)
            errorDataRef.current = detectErrorCoords(ThreeDArr, 200)
            outOfBordersRef.current = outOfBorders(ThreeDArr, 100, 700)
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
                {play
                    ? <div>
                        {new Date(currentTime).toUTCString()}
                    </div>
                    : <div>
                        Текущее время – {new Date(currentTime).toUTCString()}
                        Время паузы – {new Date(snapshotTime).toUTCString()}
                    </div>
                }
                {errorDataRef.current && <div>{errorDataRef.current.toString()}</div>}
                {outOfBordersRef.current && <div>{outOfBordersRef.current.min.toString()} {outOfBordersRef.current.max.toString()}</div>}
            </div>
            <PlotComponent data={(play) ? plotData : snapshotData} />
        </div>
    );
};

export default Main;
