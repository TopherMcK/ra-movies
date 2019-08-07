import { omdbURL, omdbApiKey } from "../utils/AppConstants";
import { searchSuggestionObserver } from "../observers/SearchResultsObserver"

export const searchService = {
    getSearchSuggestionResults(searchParam) {
        urlRequest = omdbURL + "s=" + searchParam + "&type=movie&apikey=" + omdbApiKey;
        fetch(urlRequest)
            .then((response) => {
                if(response.status !== 200) {
                    this.handleError(response.status)
                } else {
                    this.handleSuccess(response.json)
                }
            })
            .catch((error) => {
                this.handleError(error);
        });
    },

    handleSuccess(responseJson) {
        searchSuggestionObserver.sendSearchSuggestionResults(true, responseJson);
    },

    handleError(error){
        console.log("Error retrieving search suggestions : " + error);
        searchSuggestionObserver.sendSearchSuggestionResults(false, undefined);
    }
}