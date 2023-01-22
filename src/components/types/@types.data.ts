export interface IDataFromBack {
  data: string | undefined;
}

export type DataContext = {
  data: IDataFromBack[];
  addData: (data: IDataFromBack) => void;
};
