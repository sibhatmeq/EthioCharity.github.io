
import React, { createContext , useState } from 'react' ;
import axios from 'axios' ;

export const createAxios = axios.create({
    baseURL: `http://localhost:4000/api/v1` 
}) ;


export const DataContext = createContext() ;

export const DataProvider = props => {
   const [Events , setEvents ] = useState([]) ;

    return (
        <DataContext.Provider value={[Events , setEvents]}>
            {props.children}
        </DataContext.Provider>
    )
    
}





