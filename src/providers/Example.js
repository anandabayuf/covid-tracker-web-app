/*
ini contoh fetch menggunakan async await
======

import BASE_URL = ...

const getSummaryData = async () => {
    try{
        const response = await fetch(`{BASE_URL}...`);
        const responseJson = await response.json();

        return responseJson
    }
    catch(error){
        alert(error)
    }
}

*/