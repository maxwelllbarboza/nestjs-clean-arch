export type PaginationoutputDto<Item = any> = {
  items: Item[];
  total: number;
  currentPage: number;
  lastPage: number;
  perPage?: number;
};


export class PaginationOutputMapper{
  static toOutput<Item = any>(): PaginationoutputDto<Item>{

  }
}
