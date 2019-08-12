import { omdbURL, omdbApiKey } from "../utils/AppConstants";
import { searchSuggestionObserver } from "../observers/SearchResultsObserver";
import { contentLoadingObserver } from "../observers/ContenLoadingObserver";

export const searchService = {
    getSearchSuggestionResults(searchParam) {
        contentLoadingObserver.sendIsContentLoading(true);
        urlRequest = omdbURL + "s=" + searchParam + "&type=movie&apikey=" + omdbApiKey;
        fetch(urlRequest)
            .then((response) => {
                console.log("Current Response for " + urlRequest + " : " + response.status);
                if(response.status !== 200) {
                    this.handleError(response.status)
                    return undefined;
                } else {
                    return response.json();
                }
            }).then((responseJson) => {
                if(responseJson !== undefined) {
                    console.log("Calling Handle Success !!");
                    this.handleSuccess(responseJson);
                }
                return;
            })
            .catch((error) => {
                this.handleError(error);
        });
    },

    handleSuccess(responseJson) {
        console.log("responseJson.Response : " + responseJson.Response);
        const hasValidResponse = responseJson.Response !== "False" ? true : false;
        searchSuggestionObserver.sendSearchSuggestionResults(hasValidResponse, responseJson);
    },

    handleError(error){
        console.log("Error retrieving search suggestions : " + error);
        searchSuggestionObserver.sendSearchSuggestionResults(false, undefined);
    }
}