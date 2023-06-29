import React from 'react'
import { useReducer, createContext } from 'react';



function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload;
        default:
            return state;
    }

}

const initializeTimes = () => {
    return ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];
};

const AvailableTimesContext = createContext();

function MyContext({ children }) {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <AvailableTimesContext.Provider value={{ availableTimes, dispatch }}>
            {children}
        </AvailableTimesContext.Provider>
    )
}

export default MyContext
export  { AvailableTimesContext }