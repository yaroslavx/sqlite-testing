import './OutOfBordersCoords.css'

type OutOfBordersCoordsProps = {
    min: string[]
    max: string[]
}

export const OutOfBordersCoords = ({ min, max }: OutOfBordersCoordsProps) => {
    return <div className="outofborders_container">
        {min && <div className='outofborders_min'>
            <span className="mincoords_title">Координаты выхода за нижнюю границу:</span>
            {['1, 2, 3', '4, 5, 6', '7, 8, 9'].map((coord, index) => <div key={coord} className="min_coord">{index}: {'['}{coord}{']'}</div>)}
        </div>}
        {max && <div className='outofborders_max'>
            <span className="macoords_title">Координаты выхода за верхнюю границу:</span>
            {['1, 2, 3', '4, 5, 6', '7, 8, 9'].map((coord, index) => <div key={coord} className="max_coord">{index}: {'['}{coord}{']'}</div>)}</div>}
    </div>
}