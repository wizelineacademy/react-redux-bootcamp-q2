import React, { useReducer } from 'react'
import useLocalStorage from './customHooks/useLocalStorage';

const actions = {
  SET_ACTIVE_USER: '@global/setActiveUser',
  GET_USER_CART: '@global/getUserCart',
}

const usersData = {
  "activeUser": "123",
  "users": [
    {
      "id": 123,
      "cartItems": [
        {
          "id": 3,
          "quantity": 4
        }
      ]
    },
    {
      "id": 490,
      "cartItems": [
      ]
    }
  ]
}

export const UserContext = React.createContext();

const UserData = ({ children }) => {
  const [wizelineStorage, setWizelineStorage] = useLocalStorage('wizelineStore', usersData);
  
  const reducer = (state, action) =>{
    switch (action.type) {
      case '@global/setActiveUser':
        const newState = structuredClone(state);
        newState.activeUser = action.id;
        setWizelineStorage(newState);
        return newState;
      default:
          return state;
    }
  }
      
  const [userData, dispatch] = useReducer(reducer, usersData);
  
  const UserValues = {
    activeUser: wizelineStorage.activeUser,
    setActiveUser: (id) => {
      dispatch({ type: actions.SET_ACTIVE_USER, id: id});
    },
    getUserCart: (id) => {
      if (!id) return [];
      const user = userData.users.find(user => user.id === id);
      return user ? user.cartItems : []
    }
  }

  return (
    <UserContext.Provider value={UserValues}>
      { children }
    </UserContext.Provider>
  )
}

export default UserData