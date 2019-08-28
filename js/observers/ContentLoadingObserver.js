import { Subject } from 'rxjs';

const subject = new Subject();

export const contentLoadingObserver = {
    sendIsContentLoading: (isContentLoading) => subject.next({ isContentLoading: isContentLoading }),
    getContentLoadingCheck: () => subject.asObservable()
};