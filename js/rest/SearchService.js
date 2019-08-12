import { omdbURL, omdbApiKey } from "../utils/AppConstants";
import { searchSuggestionObserver } from "../observers/SearchResultsObserver";
import { contentLoadingObserver } from "../observers/ContenLoadingObserver";

export const searchService = {
    getSearchSuggestionResults(searchParam) {
        contentLoadingObserver.sendIsContentLoading(true);
        urlRequest = omdbURL + "s=" + searchParam + "&type=movie&apikey=" + omdbApiKey;
        fetch(urlRequest)
            .then((response) => {
                if(response.status !== 200) {
                    this.handleError(response.status)
                    return undefined;
                } else {
                    return response.json();
                }
            }).then((responseJson) => {
                if(responseJson !== undefined) {
                    this.handleSuccess(responseJson);
                }
                return;
            })
            .catch((error) => {
                this.handleError(error);
        });
    },

    handleSuccess(responseJson) {
        const hasValidResponse = responseJson.Response !== "False" ? true : false;
        searchSuggestionObserver.sendSearchSuggestionResults(hasValidResponse, responseJson);
    },

    handleError(error){
        searchSuggestionObserver.sendSearchSuggestionResults(false, undefined);
    }
}