import './OutOfBordersCoords.css'

type OutOfBordersCoordsProps = {
    min: string[]
    max: string[]
}

export const OutOfBordersCoords = ({ min, max }: OutOfBordersCoordsProps) => {
    return <div className="outofborders_container">
        {min.length > 0 && <div className='outofborders_min'>
            <span className="mincoords_title">Координаты выхода за нижнюю границу:</span>
            {min.map((coord, index) => <div key={coord} className="min_coord">{index}: {'{'}{coord}{'}'}</div>)}
        </div>}
        {max.length > 0 && <div className='outofborders_max'>
            <span className="macoords_title">Координаты выхода за верхнюю границу:</span>
            {max.map((coord, index) => <div key={coord} className="max_coord">{index}: {'{'}{coord}{'}'}</div>)}</div>}
    </div>
}