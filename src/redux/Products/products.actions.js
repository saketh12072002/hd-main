import productTypes from './products.types';

export const addProductsStart = productData => ({
    type:productTypes.ADD_NEW_PRODUCT_START,
    payload:productData
});

export const fetchProductsQueryStart = (filterqueries={}) => ({
    type:productTypes.FETCH_PRODUCTS_QUERY_START,
    payload: filterqueries
})

export const fetchProductsStartSize = (filtersize={}) => ({
    type:productTypes.FETCH_PRODUCTS_START_SIZE,
    payload: filtersize
})

export const fetchProductsStartColour = (filtercolour={}) => ({
    type:productTypes.FETCH_PRODUCTS_START_COLOUR,
    payload: filtercolour
})


export const fetchProductsStartBrand = (filterbrand={}) => ({
    type:productTypes.FETCH_PRODUCTS_START_BRAND,
    payload: filterbrand
})

export const fetchProductsStartDresstype = (filterdresstype={}) => ({
    type:productTypes.FETCH_PRODUCTS_START_DRESSTYPE,
    payload: filterdresstype
})

export const fetchProductsStart = (filters={}) => ({
    type:productTypes.FETCH_PRODUCTS_START,
    payload: filters
    
})

export const setProducts = products => ({
    type:productTypes.SET_PRODUCTS,
    payload: products
})

export const deleteProductStart = productID => ({
    type:productTypes.DELETE_PRODUCT_START,
    payload:productID
})

export const fetchProductStart = productID => ({
    type:productTypes.FETCH_PRODUCT_START,
    payload:productID
})

export const setProduct = product => ({
    type:productTypes.SET_PRODUCT,
    payload:product
})
