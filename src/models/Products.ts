export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  categories: string[];
}

export interface Products {
  items: Item[];
}

export interface Item2 {
  id: number;
  name: string;
}

export interface Categories {
  items: Item2[];
}

export interface Data {
  products: Products;
  categories: Categories;
}

export interface ProductResponse {
  data: Data;
  maxItems: number;
  page: number;
  totalPages: number;
  numOfResults: number;
  totalRecords: number;
}
