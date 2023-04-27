import { FC, PropsWithChildren, createContext, memo, useMemo, useState } from "react";
import { TDataContext, IDataFromBack } from "../types/@types.data.js";


export const DataFromBackContext = createContext<TDataContext | null>(null)

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<string[]>([])
    const [currentTime, setCurrentTime] = useState(Date.now())

    // необходимо писать в хранилище, например, json-server
    const addData = (data: string) => {
        setData(prev => [...prev, data])
    }

    return (
        <DataFromBackContext.Provider value={{ data, addData, currentTime, setCurrentTime }}>
            {children}
        </DataFromBackContext.Provider>
    )
}
