import { FC, PropsWithChildren, createContext, memo, useMemo, useState } from "react";
import { TDataContext, IDataFromBack } from "../types/@types.data.js";

export const DataFromBackContext = createContext<TDataContext | null>(null)

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<IDataFromBack[]>([])
    // необходимо писать в хранилище, например, json-server
    const addData = (data: IDataFromBack) => {
        setData(prev => [...prev, data])
    }

    return (
        <DataFromBackContext.Provider value={{ data, addData }}>
            {children}
        </DataFromBackContext.Provider>
    )
}
