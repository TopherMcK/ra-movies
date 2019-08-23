import { Subject } from 'rxjs';

const subject = new Subject();

export const navigationObserver = {
    sendDestination: (destination) => subject.next({destination: destination}),
    getDestination: () => subject.asObservable(),
    unsubscribe: () => subject.unsubscribe()
};