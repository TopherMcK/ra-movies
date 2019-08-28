export function isValidUsername(username) {
    return username.length > 2;
}

export function isValidPassword(password) {
    return password.length > 3;
}

export function doPasswordsMatch(password1, password2) {
    if (password1 != undefined && password2 != undefined && password1 == password2 && password1.length > 3 && password2.length > 3) {
        return true;
    } else {
        return false;
    }
}