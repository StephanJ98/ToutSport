import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    const changeData = (elem) => {
        if (!elem) {
            elem = '/list'
        }
        fetch(`https://toutsport-api.herokuapp.com${elem}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                },
                (error) => {
                    setData([])
                    console.log(error)
                }
            )
    }

    return (
        <DataContext.Provider value={{ data, changeData }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;