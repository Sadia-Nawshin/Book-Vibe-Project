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

const getStoredWishBook = () => {
    const storedWishBookSTR = localStorage.getItem("wishlist")
    
    if (storedWishBookSTR) {
        const storedWishBookData = JSON.parse(storedWishBookSTR);
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

const addToStoredWishDB = (id) => {
    const storedWishBookData = getStoredWishBook();
    if (storedWishBookData.includes(id)) {
        alert("The ID already exists")
    }
    else{
        storedWishBookData.push(id);
        const data = JSON.stringify(storedWishBookData)
        localStorage.setItem("wishlist", data)
    }
}


export {addToStoredDB, getStoredBook, getStoredWishBook, addToStoredWishDB}