import { FC, PropsWithChildren, createContext, useState } from "react";
import { DataContext, IDataFromBack } from "../types/@types.data.js";

export const DataFromBackContext = createContext<DataContext | null>(null)

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<IDataFromBack[]>([])
    const addData = (data: IDataFromBack) => {
        setData(prev => [...prev, data])
    }

    return (
        <DataFromBackContext.Provider value={{ data, addData }}>
            {children}
        </DataFromBackContext.Provider>
    )
}

export default DataProvider