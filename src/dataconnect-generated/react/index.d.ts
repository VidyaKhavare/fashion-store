import { AddProductToWishlistData, AddProductToWishlistVariables, GetProductsByCategoryData, GetProductsByCategoryVariables, CreateNewOrderData, CreateNewOrderVariables, GetMyOrdersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddProductToWishlist(options?: useDataConnectMutationOptions<AddProductToWishlistData, FirebaseError, AddProductToWishlistVariables>): UseDataConnectMutationResult<AddProductToWishlistData, AddProductToWishlistVariables>;
export function useAddProductToWishlist(dc: DataConnect, options?: useDataConnectMutationOptions<AddProductToWishlistData, FirebaseError, AddProductToWishlistVariables>): UseDataConnectMutationResult<AddProductToWishlistData, AddProductToWishlistVariables>;

export function useGetProductsByCategory(vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;
export function useGetProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;

export function useCreateNewOrder(options?: useDataConnectMutationOptions<CreateNewOrderData, FirebaseError, CreateNewOrderVariables>): UseDataConnectMutationResult<CreateNewOrderData, CreateNewOrderVariables>;
export function useCreateNewOrder(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewOrderData, FirebaseError, CreateNewOrderVariables>): UseDataConnectMutationResult<CreateNewOrderData, CreateNewOrderVariables>;

export function useGetMyOrders(options?: useDataConnectQueryOptions<GetMyOrdersData>): UseDataConnectQueryResult<GetMyOrdersData, undefined>;
export function useGetMyOrders(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyOrdersData>): UseDataConnectQueryResult<GetMyOrdersData, undefined>;
