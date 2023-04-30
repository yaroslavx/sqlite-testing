import { Dispatch, forwardRef, memo, useState } from 'react'
import './BordersInput.css'

type BordersInputProps = {
    minBorderRef: React.MutableRefObject<number | null>
    maxBorderRef: React.MutableRefObject<number | null>
}
export const BordersInput = memo(({
    minBorderRef,
    maxBorderRef
}: BordersInputProps) => {
    const [minBorderInput, setMinBorderInput] = useState<string | null>(null)
    const [maxBorderInput, setMaxBorderInput] = useState<string | null>(null)

    const handleMinBorder = (key: string) => {
        if (key == 'Enter' && minBorderInput != null) {
            minBorderRef.current = Number(minBorderInput)
        }
    }

    const handleMaxBorder = (key: string) => {
        if (key == 'Enter' && maxBorderInput != null) {
            maxBorderRef.current = Number(maxBorderInput)
        }
    }

    return <div className='borders_input_container'>
        <p>Допустимые границы:</p>
        <div>
            <p>Мин</p>
            <input placeholder='0' type='number' value={minBorderInput || ''} onChange={e => setMinBorderInput((e.target.value))} onKeyDown={e => handleMinBorder(e.key)} />
        </div>
        <div>
            <p>Макс</p>
            <input placeholder='1000' type='number' value={maxBorderInput || ''} onChange={e => setMaxBorderInput(e.target.value)} onKeyDown={e => handleMaxBorder(e.key)} />
        </div>
    </div>
})