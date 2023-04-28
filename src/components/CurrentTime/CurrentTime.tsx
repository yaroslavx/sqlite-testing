import "./CurrentTime.css"

type CurrentTimeProps = {
    currentTime: number
    snapshotTime: number
    play: boolean
}

export const CurrentTime = ({ currentTime, snapshotTime, play }: CurrentTimeProps) => {
    return (<div className="time_container">
        {play
            ? <div className="time_active">
                <div className="currenttime">
                    Текущее время: {new Date(currentTime).toLocaleDateString()} {new Date(currentTime).toLocaleTimeString()}
                </div>
            </div>
            : <div className="time_paused">
                <div className="currenttime">
                    Текущее время: {new Date(currentTime).toLocaleDateString()} {new Date(currentTime).toLocaleTimeString()}
                </div>
                <div className="snapshottime">
                    Время паузы: {new Date(snapshotTime).toLocaleDateString()} {new Date(snapshotTime).toLocaleTimeString()}
                </div>
            </div>}
    </div>)
}
