import { Dispatch, SetStateAction } from 'react';

export interface IDataFromBack {
  event: string;
  windowLabel: string;
  payload: {
    data: string;
  };
  id: number;
}

export type TDataContext = {
  data: string[];
  addData: (data: string) => void;
};
