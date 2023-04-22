import { Dispatch, SetStateAction } from 'react';

export interface IDataFromBack {
  data: string;
  createdAt: number;
}

export type TDataContext = {
  data: IDataFromBack[];
  addData: (data: IDataFromBack) => void;
};
