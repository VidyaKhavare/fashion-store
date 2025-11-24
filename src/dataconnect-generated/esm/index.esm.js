import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'fashion-store',
  location: 'us-east4'
};

export const addProductToWishlistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddProductToWishlist', inputVars);
}
addProductToWishlistRef.operationName = 'AddProductToWishlist';

export function addProductToWishlist(dcOrVars, vars) {
  return executeMutation(addProductToWishlistRef(dcOrVars, vars));
}

export const getProductsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByCategory', inputVars);
}
getProductsByCategoryRef.operationName = 'GetProductsByCategory';

export function getProductsByCategory(dcOrVars, vars) {
  return executeQuery(getProductsByCategoryRef(dcOrVars, vars));
}

export const createNewOrderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewOrder', inputVars);
}
createNewOrderRef.operationName = 'CreateNewOrder';

export function createNewOrder(dcOrVars, vars) {
  return executeMutation(createNewOrderRef(dcOrVars, vars));
}

export const getMyOrdersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyOrders');
}
getMyOrdersRef.operationName = 'GetMyOrders';

export function getMyOrders(dc) {
  return executeQuery(getMyOrdersRef(dc));
}

