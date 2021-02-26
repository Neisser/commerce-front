export const Collections = {
  SETTINGS: 'settings'
}

/**
 * 
 * @param {*} collection Name of collection stored in local storage.
 */
export const getDataFromLocal = (collection) => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(collection);
    return JSON.parse(data ?? '{}');
  }
};

/**
 * 
 * @param {*} collection Name of collection stored in local storage.
 * @param {*} data Data to save.
 */
export const setDataFromLocal = (collection, payload) => {
  if (typeof window !== "undefined") { 
    const currentData = getDataFromLocal(collection);
    const allData = {...currentData, ...payload};
    const data = JSON.stringify(allData ?? '');
    window.localStorage.setItem(collection, data);
  }
};