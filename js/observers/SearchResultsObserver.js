import { Subject } from 'rxjs';

const subject = new Subject();

export const searchSuggestionObserver = {
    sendSearchSuggestionResults: (hasValidResponse, results) => subject.next({ hasValidResponse: hasValidResponse, results: results }),
    getSearchSuggestionResults: () => subject.asObservable()
};