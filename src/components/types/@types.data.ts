export interface IDataFromBack {
  data: string;
  createAt: number;
}

export type DataContext = {
  data: IDataFromBack[];
  addData: (data: IDataFromBack) => void;
};
