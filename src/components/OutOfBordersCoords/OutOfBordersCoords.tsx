import './OutOfBordersCoords.css'

type OutOfBordersCoordsProps = {
    min: string[]
    max: string[]
}

export const OutOfBordersCoords = ({ min, max }: OutOfBordersCoordsProps) => {
    return <div className="outofborders_container">
        {min && <div className='outofborders_min'>
            {min.map(coord => <div key={coord} className="min_coord">{coord}</div>)}
        </div>}
        {max && <div className='outofborders_max'>
            {max.map(coord => <div key={coord} className="max_coord">{coord}</div>)}</div>}
    </div>
}