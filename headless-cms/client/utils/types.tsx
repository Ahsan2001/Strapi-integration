

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}


export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
} 

export interface IResourceMeta  {
    pagiation: IPagination;
}

export interface iCollectionResponse<T>{
    data: T;
    meta: IResourceMeta;
}

