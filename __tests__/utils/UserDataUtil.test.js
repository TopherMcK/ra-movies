import { userDataUtil } from '../../js/utils/UserDataUtil';

describe('UserDataUtil', () => {
    
    describe('getDisplayUsername', () => {
        it('should return an unchanged username when char length is less than or equal to 9', () => {
            const expectedName = "123456789";
            const actualName = userDataUtil.getDisplayUsername(expectedName);
            expect(actualName).toEqual(expectedName);
        });
    
        it('should return an the first 9 chars of a name followed by "..." when un is greater than 9', () => {
            const expectedName = "123456789...";
            const actualName = userDataUtil.getDisplayUsername("12345678910");
            expect(actualName).toEqual(expectedName);
        });
    });
});