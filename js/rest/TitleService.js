import { omdbURL, omdbApiKey } from "../utils/AppConstants";

export const titleService = {

    async getTitleResult(searchParam) {

        urlRequest = omdbURL + "t=" + searchParam + "&type=movie&apikey=" + omdbApiKey;
        try {
            const response = await fetch(urlRequest);
            const responseJson = await response.json();
            return responseJson;
        }
        catch (error) {
            console.log("Search Service Error : " + error);
        }
    }
}