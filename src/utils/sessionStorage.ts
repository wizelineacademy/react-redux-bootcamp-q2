/**
 * This is a micro-store
 * Before the redux implementation
 */

import { I_Item } from '../pages/types/Products';
const STORAGE_REACT_REDUX = 'STORAGE_REACT_REDUX';

export interface I_Storage extends I_Item {
  quantity: number;
}

export const getStorage = () => {
  try {
    const storageString = sessionStorage.getItem(STORAGE_REACT_REDUX);
    if (storageString) return JSON.parse(storageString);
  } catch (err) {
    return [];
  }
  return [];
};

const updateStorage = (newStorage: I_Storage[]) => {
  try {
    const storageString = JSON.stringify(newStorage);
    sessionStorage.setItem(STORAGE_REACT_REDUX, storageString);
  } catch (err) {
    throw err;
  }
};

const findItemOnStorage: any = (item: I_Item, storage: I_Storage[]) => {
  const itemFound = storage.filter(itemObj => itemObj.id === item.id);
  return itemFound;
};

export const addItemOnStorage = (item: I_Item) => {
  const storage = getStorage();
  const prevItem = findItemOnStorage(item, storage);
  if (prevItem.length) {
    prevItem[0].quantity += 1;
    updateStorage(storage);
  } else {
    const newItem = { ...item, quantity: 1 };
    updateStorage([...storage, newItem]);
  }
};

export const removeItemOnStorage = (item: I_Item) => {
  let storage = getStorage();
  const prevItem = findItemOnStorage(item, storage);

  if (!prevItem[0]) return;

  if (prevItem[0].quantity > 0) {
    prevItem[0].quantity -= 1;
  }

  if (prevItem[0].quantity === 0) {
    storage = storage.filter((val: any) => val.id !== prevItem[0].id);
  }
  updateStorage(storage);
};
