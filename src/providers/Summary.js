import { BASE_URL } from "./Helper"

const getSummary = async () => {
    try{
        const response = await fetch(BASE_URL);
        const responseJson = await response.json();

        return responseJson;
    }
    catch (error) {
        alert(error)
    }
}

export {
    getSummary
}