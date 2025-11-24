const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'fashion-store',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addProductToWishlistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddProductToWishlist', inputVars);
}
addProductToWishlistRef.operationName = 'AddProductToWishlist';
exports.addProductToWishlistRef = addProductToWishlistRef;

exports.addProductToWishlist = function addProductToWishlist(dcOrVars, vars) {
  return executeMutation(addProductToWishlistRef(dcOrVars, vars));
};

const getProductsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByCategory', inputVars);
}
getProductsByCategoryRef.operationName = 'GetProductsByCategory';
exports.getProductsByCategoryRef = getProductsByCategoryRef;

exports.getProductsByCategory = function getProductsByCategory(dcOrVars, vars) {
  return executeQuery(getProductsByCategoryRef(dcOrVars, vars));
};

const createNewOrderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewOrder', inputVars);
}
createNewOrderRef.operationName = 'CreateNewOrder';
exports.createNewOrderRef = createNewOrderRef;

exports.createNewOrder = function createNewOrder(dcOrVars, vars) {
  return executeMutation(createNewOrderRef(dcOrVars, vars));
};

const getMyOrdersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyOrders');
}
getMyOrdersRef.operationName = 'GetMyOrders';
exports.getMyOrdersRef = getMyOrdersRef;

exports.getMyOrders = function getMyOrders(dc) {
  return executeQuery(getMyOrdersRef(dc));
};
