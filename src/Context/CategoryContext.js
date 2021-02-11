import React, { createContext, useState } from 'react'

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
    const [category, setCategory] = useState('null');
    const changeCategory = (elem) => {
        setCategory(elem)
    }

    return (
        <CategoryContext.Provider value={{category, changeCategory}}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;