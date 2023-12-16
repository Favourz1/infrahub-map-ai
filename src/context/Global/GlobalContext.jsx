import { createContext, useReducer } from 'react';
import { PLANS_DATA } from "Data"


const initialState = {
    isSidebarOpen: false,
    tableData: PLANS_DATA,
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIDEBAR':
            return {
                ...state,
                isSidebarOpen: action.payload,
            };
        case 'SET_TABLE_DATA':
            return {
                ...state,
                tableData: [...state.tableData, ...action.payload],
            };
        default:
            return state;
    }
};


const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider
