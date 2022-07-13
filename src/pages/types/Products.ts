export interface I_Data {
  items: I_Item[];
  maxItems: string;
  page: string;
  totalPages: string;
  numOfResults: string;
  totalRecords: string;
}

export interface I_Item {
  id: number;
  name: string;
  price: number;
  description: String;
  images: string[];
  categories: string[];
}

export interface I_Request {
  data?: { products?: { items?: I_Item[] } };
}
