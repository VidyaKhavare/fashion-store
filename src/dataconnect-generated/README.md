# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetProductsByCategory*](#getproductsbycategory)
  - [*GetMyOrders*](#getmyorders)
- [**Mutations**](#mutations)
  - [*AddProductToWishlist*](#addproducttowishlist)
  - [*CreateNewOrder*](#createneworder)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetProductsByCategory
You can execute the `GetProductsByCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductsByCategory(vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface GetProductsByCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface GetProductsByCategoryRef {
  ...
  (dc: DataConnect, vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductsByCategoryRef:
```typescript
const name = getProductsByCategoryRef.operationName;
console.log(name);
```

### Variables
The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductsByCategoryVariables {
  category: string;
}
```
### Return Type
Recall that executing the `GetProductsByCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  } & Product_Key)[];
}
```
### Using `GetProductsByCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductsByCategory, GetProductsByCategoryVariables } from '@dataconnect/generated';

// The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`:
const getProductsByCategoryVars: GetProductsByCategoryVariables = {
  category: ..., 
};

// Call the `getProductsByCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductsByCategory(getProductsByCategoryVars);
// Variables can be defined inline as well.
const { data } = await getProductsByCategory({ category: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductsByCategory(dataConnect, getProductsByCategoryVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductsByCategory(getProductsByCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetProductsByCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductsByCategoryRef, GetProductsByCategoryVariables } from '@dataconnect/generated';

// The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`:
const getProductsByCategoryVars: GetProductsByCategoryVariables = {
  category: ..., 
};

// Call the `getProductsByCategoryRef()` function to get a reference to the query.
const ref = getProductsByCategoryRef(getProductsByCategoryVars);
// Variables can be defined inline as well.
const ref = getProductsByCategoryRef({ category: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductsByCategoryRef(dataConnect, getProductsByCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetMyOrders
You can execute the `GetMyOrders` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyOrders(): QueryPromise<GetMyOrdersData, undefined>;

interface GetMyOrdersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyOrdersData, undefined>;
}
export const getMyOrdersRef: GetMyOrdersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyOrders(dc: DataConnect): QueryPromise<GetMyOrdersData, undefined>;

interface GetMyOrdersRef {
  ...
  (dc: DataConnect): QueryRef<GetMyOrdersData, undefined>;
}
export const getMyOrdersRef: GetMyOrdersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyOrdersRef:
```typescript
const name = getMyOrdersRef.operationName;
console.log(name);
```

### Variables
The `GetMyOrders` query has no variables.
### Return Type
Recall that executing the `GetMyOrders` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyOrdersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMyOrders`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyOrders } from '@dataconnect/generated';


// Call the `getMyOrders()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyOrders();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyOrders(dataConnect);

console.log(data.orders);

// Or, you can use the `Promise` API.
getMyOrders().then((response) => {
  const data = response.data;
  console.log(data.orders);
});
```

### Using `GetMyOrders`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyOrdersRef } from '@dataconnect/generated';


// Call the `getMyOrdersRef()` function to get a reference to the query.
const ref = getMyOrdersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyOrdersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orders);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orders);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddProductToWishlist
You can execute the `AddProductToWishlist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addProductToWishlist(vars: AddProductToWishlistVariables): MutationPromise<AddProductToWishlistData, AddProductToWishlistVariables>;

interface AddProductToWishlistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProductToWishlistVariables): MutationRef<AddProductToWishlistData, AddProductToWishlistVariables>;
}
export const addProductToWishlistRef: AddProductToWishlistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addProductToWishlist(dc: DataConnect, vars: AddProductToWishlistVariables): MutationPromise<AddProductToWishlistData, AddProductToWishlistVariables>;

interface AddProductToWishlistRef {
  ...
  (dc: DataConnect, vars: AddProductToWishlistVariables): MutationRef<AddProductToWishlistData, AddProductToWishlistVariables>;
}
export const addProductToWishlistRef: AddProductToWishlistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addProductToWishlistRef:
```typescript
const name = addProductToWishlistRef.operationName;
console.log(name);
```

### Variables
The `AddProductToWishlist` mutation requires an argument of type `AddProductToWishlistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddProductToWishlistVariables {
  productId: UUIDString;
}
```
### Return Type
Recall that executing the `AddProductToWishlist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddProductToWishlistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddProductToWishlistData {
  wishlistItem_insert: WishlistItem_Key;
}
```
### Using `AddProductToWishlist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addProductToWishlist, AddProductToWishlistVariables } from '@dataconnect/generated';

// The `AddProductToWishlist` mutation requires an argument of type `AddProductToWishlistVariables`:
const addProductToWishlistVars: AddProductToWishlistVariables = {
  productId: ..., 
};

// Call the `addProductToWishlist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addProductToWishlist(addProductToWishlistVars);
// Variables can be defined inline as well.
const { data } = await addProductToWishlist({ productId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addProductToWishlist(dataConnect, addProductToWishlistVars);

console.log(data.wishlistItem_insert);

// Or, you can use the `Promise` API.
addProductToWishlist(addProductToWishlistVars).then((response) => {
  const data = response.data;
  console.log(data.wishlistItem_insert);
});
```

### Using `AddProductToWishlist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addProductToWishlistRef, AddProductToWishlistVariables } from '@dataconnect/generated';

// The `AddProductToWishlist` mutation requires an argument of type `AddProductToWishlistVariables`:
const addProductToWishlistVars: AddProductToWishlistVariables = {
  productId: ..., 
};

// Call the `addProductToWishlistRef()` function to get a reference to the mutation.
const ref = addProductToWishlistRef(addProductToWishlistVars);
// Variables can be defined inline as well.
const ref = addProductToWishlistRef({ productId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addProductToWishlistRef(dataConnect, addProductToWishlistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.wishlistItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.wishlistItem_insert);
});
```

## CreateNewOrder
You can execute the `CreateNewOrder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewOrder(vars: CreateNewOrderVariables): MutationPromise<CreateNewOrderData, CreateNewOrderVariables>;

interface CreateNewOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewOrderVariables): MutationRef<CreateNewOrderData, CreateNewOrderVariables>;
}
export const createNewOrderRef: CreateNewOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewOrder(dc: DataConnect, vars: CreateNewOrderVariables): MutationPromise<CreateNewOrderData, CreateNewOrderVariables>;

interface CreateNewOrderRef {
  ...
  (dc: DataConnect, vars: CreateNewOrderVariables): MutationRef<CreateNewOrderData, CreateNewOrderVariables>;
}
export const createNewOrderRef: CreateNewOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewOrderRef:
```typescript
const name = createNewOrderRef.operationName;
console.log(name);
```

### Variables
The `CreateNewOrder` mutation requires an argument of type `CreateNewOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewOrderVariables {
  paymentDetails: string;
  shippingAddress: string;
  status: string;
  totalAmount: number;
}
```
### Return Type
Recall that executing the `CreateNewOrder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewOrderData {
  order_insert: Order_Key;
}
```
### Using `CreateNewOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewOrder, CreateNewOrderVariables } from '@dataconnect/generated';

// The `CreateNewOrder` mutation requires an argument of type `CreateNewOrderVariables`:
const createNewOrderVars: CreateNewOrderVariables = {
  paymentDetails: ..., 
  shippingAddress: ..., 
  status: ..., 
  totalAmount: ..., 
};

// Call the `createNewOrder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewOrder(createNewOrderVars);
// Variables can be defined inline as well.
const { data } = await createNewOrder({ paymentDetails: ..., shippingAddress: ..., status: ..., totalAmount: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewOrder(dataConnect, createNewOrderVars);

console.log(data.order_insert);

// Or, you can use the `Promise` API.
createNewOrder(createNewOrderVars).then((response) => {
  const data = response.data;
  console.log(data.order_insert);
});
```

### Using `CreateNewOrder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewOrderRef, CreateNewOrderVariables } from '@dataconnect/generated';

// The `CreateNewOrder` mutation requires an argument of type `CreateNewOrderVariables`:
const createNewOrderVars: CreateNewOrderVariables = {
  paymentDetails: ..., 
  shippingAddress: ..., 
  status: ..., 
  totalAmount: ..., 
};

// Call the `createNewOrderRef()` function to get a reference to the mutation.
const ref = createNewOrderRef(createNewOrderVars);
// Variables can be defined inline as well.
const ref = createNewOrderRef({ paymentDetails: ..., shippingAddress: ..., status: ..., totalAmount: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewOrderRef(dataConnect, createNewOrderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.order_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.order_insert);
});
```

