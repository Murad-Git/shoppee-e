export interface Main {
  children?: React.ReactNode | [React.ReactNode];
}

export interface Product {
  category: string;
  currency: string;
  description: string;
  id: string;
  image: string;
  name: string;
  onstock: boolean;
  price: number;
  slug: string;
}
