import { Subject } from 'rxjs';

const subject = new Subject();

export const userDataService = {
    sendUserData: (username, isGuest) => subject.next({ username: username, isGuest: isGuest }),
    getUserData: () => subject.asObservable()
};