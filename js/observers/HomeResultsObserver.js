import { Subject } from 'rxjs';

const subject = new Subject();

export const homeResultsObserver = {
    sendHomeResults: (hasValidResponse, results) => subject.next({ hasValidResponse: hasValidResponse, results: results }),
    getHomeResults: () => subject.asObservable(),
    unsubscribe: () => subject.unsubscribe()
};