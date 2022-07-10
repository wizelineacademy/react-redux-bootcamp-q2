import React, { useReducer } from 'react'
import useLocalStorage from './customHooks/useLocalStorage';

import Products from '../utils/Products.json';

const actions = {
  SET_ACTIVE_USER: '@global/setActiveUser',
  INCREMENT_QUANTITY_BY1: '@cart/quantity/incrementQuantityBy1',
  DECREMENT_QUANTITY_BY1: '@cart/quantity/decrementQuantityBy1',
  SET_ITEM_QUANTITY: '@cart/quantity/setItemQuantity',
  ADD_PRODUCT_TO_CART: '@products/addProductToCart',
  DELETE_PRODUCT_FROM_CART: '@cart/deleteProductFromCart',
}

const usersData = {
  "activeUser": null,
  "users": [
    {
      "id": 123,
      "cartItems": [
        {
          "id": 3,
          "quantity": 4
        },
        {
          "id": 7,
          "quantity": 2
        },
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
  const productsItems = Products?.data?.products?.items || [];

  const reducer = (state, action) => {
    
    const newState = structuredClone(state);
    let usersStored = [];
    
    switch (action.type) {
      case '@global/setActiveUser':
        newState.activeUser = action.id ? parseInt(action.id) : null;
        setWizelineStorage(newState);
        return newState;
      case '@cart/quantity/incrementQuantityBy1':
        if (!action.id) return state;
        usersStored = newState.users.map(user => {
          if (user.id === action.id) {
            const userCartItems = user.cartItems.map(item => {
              if(item.id === action.cartItemId) {
                return {
                  ...item, quantity: item.quantity + 1
                }
              }
              return {...item}
            })
            return {
              ...user,
              cartItems: [...userCartItems]
            } 
          }
          return {...user}
        })
        newState.users = [...usersStored];
        setWizelineStorage(newState);
        return newState;
      case '@cart/quantity/decrementQuantityBy1':
        if (!action.id) return state;
        usersStored = state.users.map(user => {
          if (user.id === action.id) {
            const userCartItems = user.cartItems.map(item => {
              if(item.id === action.cartItemId && item.quantity >= 0) {
                return {
                  ...item, quantity: item.quantity - 1
                }
              }
              return {...item}
            })
            return {
              ...user,
              cartItems: [...userCartItems]
            } 
          }
          return {...user}
        })
        newState.users = [...usersStored];
        setWizelineStorage(newState);
        return newState;
      case '@cart/quantity/setItemQuantity':
        if (!action.id) return state;
        usersStored = state.users.map(user => {
          if (user.id === action.id) {
            const userCartItems = user.cartItems.map(item => {
              if(item.id === action.cartItemId) {
                return {
                  ...item, quantity: action.quantity
                }
              }
              return {...item}
            })
            return {
              ...user,
              cartItems: [...userCartItems]
            } 
          }
          return {...user}
        })
        newState.users = [...usersStored];
        setWizelineStorage(newState);
        return newState;
      case '@products/addProductToCart':
        usersStored = state.users.map(user => {
          if (user.id === action.id) {
            const indexOfItemInCart = user.cartItems.findIndex(item => item.id === action.productId)
            console.log('indexOfItem', indexOfItemInCart)
            if (indexOfItemInCart >= 0) {
              const newUserCart = user.cartItems.map((item, idx) => {
                if(idx === indexOfItemInCart) {
                  return {
                    ...item,
                    quantity: item.quantity + 1
                  }
                }
                return {...item}
              })
              return {
                ...user,
                cartItems: [...newUserCart]
              }
            } else {
              return {
                ...user, 
                cartItems: [
                  ...user.cartItems, {
                    id: action.productId,
                    quantity: 1
                  }
                ]
              }
            }
          }
          return {...user}
        })

        newState.users = [...usersStored];
        setWizelineStorage(newState);
        return newState;
      case '@cart/deleteProductFromCart':
        if (!action.id) return state;
        usersStored = state.users.map(user => {
          if (user.id === action.id) {
            return {
              ...user,
              cartItems: user.cartItems.filter(item => item.id !== action.productId)
            }
          }
          return {...user}
        })
        newState.users = [...usersStored];
        setWizelineStorage(newState);
        return newState;
      default:
          return state;
    }
  }
      
  const [userData, dispatch] = useReducer(reducer, wizelineStorage);
  const UserValues = {
    activeUser: userData.activeUser,
    setActiveUser: (id) => {
      dispatch({ type: actions.SET_ACTIVE_USER, id: id});
    },
    getUserCart: (id) => {
      if (!id) return [];
      const userCart = userData.users.find(user => user.id === id);
      const cartList = userCart?.cartItems?.map(cartItem => {
        const details =  productsItems.find(item => item.id === cartItem.id)
        return {
          ...details,
          quantity: cartItem.quantity
        }
      })
      return cartList || [];
    },
    incrementQuantityBy1: (id, cartItemId) => {
      dispatch({ type: actions.INCREMENT_QUANTITY_BY1, id: id, cartItemId: cartItemId});
    },
    decrementQuantityBy1: (id, cartItemId) => {
      dispatch({ type: actions.DECREMENT_QUANTITY_BY1, id: id, cartItemId: cartItemId});
    },
    setItemQuantity: (id, cartItemId, quantity) => {
      dispatch({ type: actions.SET_ITEM_QUANTITY, id: id, cartItemId: cartItemId, quantity: quantity});
    },
    addProductToCart: (id, productId) => {
      dispatch({ type: actions.ADD_PRODUCT_TO_CART, id: id, productId: productId});
    },
    deleteProductFromCart: (id, productId) => {
      dispatch({ type: actions.DELETE_PRODUCT_FROM_CART, id: id, productId: productId});
    }
  }

  return (
    <UserContext.Provider value={UserValues}>
      { children }
    </UserContext.Provider>
  )
}

export default UserData