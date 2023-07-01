import React from 'react'
import { useReducer, createContext } from 'react';

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const updateTimes = async (selectedDate, fetchData, dispatch) => {
    try {
        const response = await fetchData(selectedDate);
        dispatch({ type: 'SET_AVAILABLE_TIMES', payload: response })
    } catch (error) {
        console.log('Error updating available times:', error);
    }
};

const initializeTimes = async (fetchData) => {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetchData(today);

        const availableTimes = response || [];

        return availableTimes;
    } catch (error) {

    }
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
export { AvailableTimesContext }