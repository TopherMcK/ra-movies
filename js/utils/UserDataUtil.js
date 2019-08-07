export const userDataUtil = {
    getDisplayUsername(username) {
        if(username.length > 9) {
            return username.substring(0, 9) + "...";
        }

        return username;
    }
}