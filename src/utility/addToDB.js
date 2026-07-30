const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList")
    
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}

const getWishStoredBook = () => {

    const storedWishBookSTR = localStorage.getItem("wishList")
    if(storedWishBookSTR) {
        const storedWishBookData = JSON.parse(storedWishBookSTR)
        return storedWishBookData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("The ID already exists")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
    }
}

const addToWishStoreDB = (id) => {
    const storedWishBookData = getStoredBook();
    if (storedWishBookData.includes(id)) {
        alert("The ID altrady exists.")
    }

}

export {addToStoredDB, getStoredBook}