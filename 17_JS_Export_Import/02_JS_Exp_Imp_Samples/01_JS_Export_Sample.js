export function validateEmail(email) {
    if(!email) return false;
    return email.includes("@") && email.includes(".");
}

export function validatePassword(password) {
    if(!password) return false;
    // Password must be at least 8 characters long
    return typeof password === "string" && password.length >= 8;
}