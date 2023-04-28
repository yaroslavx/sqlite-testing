import "./ErrorCoords.css"

export const ErrorCoords = ({ coords }: { coords: string[] | null }) => {
    if (coords === null || coords.length === 0) return null
    return <div className="errorcoords_container">
        <span className="errorcoords_title">Координаты ошибок:</span>
        {coords.map((coord, index) => <div key={coord} className="errorcoords_coord">{index}: {'['}{coord}{']'}</div>)}
    </div>
}