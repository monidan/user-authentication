const setDataInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export {
    setDataInLocalStorage,
    getDataFromLocalStorage,
}