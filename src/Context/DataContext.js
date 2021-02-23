import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    const changeData = (/*elem*/) => {
        fetch(`https://toutsport-api.herokuapp.com/list`)
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
        <DataContextProvider.Provider value={{ data, changeData }}>
            {props.children}
        </DataContextProvider.Provider>
    )
}

export default DataContextProvider;