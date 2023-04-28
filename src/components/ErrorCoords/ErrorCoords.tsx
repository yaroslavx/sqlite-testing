import "./ErrorCoords.css"

export const ErrorCoords = ({ coords }: { coords: string[] | null }) => {
    if (!coords) return null
    return <div className="errorcoords_container">
        <span className="errorcoords_title">Координаты ошибок:</span>
        {['1, 2, 3', '4, 5, 6', '7, 8, 9', '10, 11, 12', '13, 14, 15', '16, 17, 18', '19, 20, 21', '22, 23, 24'].map((coord, index) => <div key={coord} className="errorcoords_coord">{index}: {'['}{coord}{']'}</div>)}
    </div>
}