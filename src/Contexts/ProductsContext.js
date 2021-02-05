import React, { createContext, useState } from 'react';
import {ProductData} from '../Services/ProductData';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [ProductsData] = useState(ProductData);

    return (  
        <ProductsContext.Provider value={{ProductsData}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;