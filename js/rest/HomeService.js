import { omdbURL, omdbApiKey } from "../utils/AppConstants";
import { homeResultsObserver } from "../observers/HomeResultsObserver";
import { contentLoadingObserver } from "../observers/ContenLoadingObserver";

export const homeService = {

    getSearchSuggestionResults(searchParam) {
        contentLoadingObserver.sendIsContentLoading(true);
        urlRequest = omdbURL + "t=" + searchParam + "&type=movie&apikey=" + omdbApiKey;
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
        homeResultsObserver.sendHomeResults(hasValidResponse, responseJson);
    },

    handleError(error){
        homeResultsObserver.sendHomeResults(false, undefined);
    }
}