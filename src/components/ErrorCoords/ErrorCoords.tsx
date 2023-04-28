import "./ErrorCoords.css"

export const ErrorCoords = ({ coords }: { coords: string[] | null }) => {
    if (!coords) return null
    return <div className="errorcoords_container">
        {coords.map(coord => <div key={coord} className="errorcoords_coord">{coord}</div>)}
    </div>
}