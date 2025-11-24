import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddProductToWishlistData {
  wishlistItem_insert: WishlistItem_Key;
}

export interface AddProductToWishlistVariables {
  productId: UUIDString;
}

export interface CartItem_Key {
  userId: UUIDString;
  productId: UUIDString;
  __typename?: 'CartItem_Key';
}

export interface CreateNewOrderData {
  order_insert: Order_Key;
}

export interface CreateNewOrderVariables {
  paymentDetails: string;
  shippingAddress: string;
  status: string;
  totalAmount: number;
}

export interface GetMyOrdersData {
  orders: ({
    id: UUIDString;
    orderDate: TimestampString;
    paymentDetails?: string | null;
    shippingAddress?: string | null;
    status: string;
    totalAmount: number;
  } & Order_Key)[];
}

export interface GetProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  } & Product_Key)[];
}

export interface GetProductsByCategoryVariables {
  category: string;
}

export interface OrderItem_Key {
  orderId: UUIDString;
  productId: UUIDString;
  __typename?: 'OrderItem_Key';
}

export interface Order_Key {
  id: UUIDString;
  __typename?: 'Order_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WishlistItem_Key {
  userId: UUIDString;
  productId: UUIDString;
  __typename?: 'WishlistItem_Key';
}

interface AddProductToWishlistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProductToWishlistVariables): MutationRef<AddProductToWishlistData, AddProductToWishlistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddProductToWishlistVariables): MutationRef<AddProductToWishlistData, AddProductToWishlistVariables>;
  operationName: string;
}
export const addProductToWishlistRef: AddProductToWishlistRef;

export function addProductToWishlist(vars: AddProductToWishlistVariables): MutationPromise<AddProductToWishlistData, AddProductToWishlistVariables>;
export function addProductToWishlist(dc: DataConnect, vars: AddProductToWishlistVariables): MutationPromise<AddProductToWishlistData, AddProductToWishlistVariables>;

interface GetProductsByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
  operationName: string;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;

export function getProductsByCategory(vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;
export function getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface CreateNewOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewOrderVariables): MutationRef<CreateNewOrderData, CreateNewOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewOrderVariables): MutationRef<CreateNewOrderData, CreateNewOrderVariables>;
  operationName: string;
}
export const createNewOrderRef: CreateNewOrderRef;

export function createNewOrder(vars: CreateNewOrderVariables): MutationPromise<CreateNewOrderData, CreateNewOrderVariables>;
export function createNewOrder(dc: DataConnect, vars: CreateNewOrderVariables): MutationPromise<CreateNewOrderData, CreateNewOrderVariables>;

interface GetMyOrdersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyOrdersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyOrdersData, undefined>;
  operationName: string;
}
export const getMyOrdersRef: GetMyOrdersRef;

export function getMyOrders(): QueryPromise<GetMyOrdersData, undefined>;
export function getMyOrders(dc: DataConnect): QueryPromise<GetMyOrdersData, undefined>;

