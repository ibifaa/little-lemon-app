import React from 'react'
import { useReducer, createContext } from 'react';
import { fetchAPI } from '../littleLemonApi';


const updateTimes =  (date) => {
    fetchAPI(date);
};

const output = fetchAPI(new Date());

const AvailableTimesContext = createContext();

function MyContext({ children }) {
    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
        <AvailableTimesContext.Provider value={{ availableTimes, updateTimes}}>
            {children}
        </AvailableTimesContext.Provider>
    )
}

export default MyContext
export { AvailableTimesContext }