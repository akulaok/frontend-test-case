export interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItemType extends ProductType {
  quantity: number;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
}
