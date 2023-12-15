import { createContext, useReducer } from 'react';

const initialState = {
    isSidebarOpen: false,
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIDEBAR':
            return {
                ...state,
                isSidebarOpen: action.payload,
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
