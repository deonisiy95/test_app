export function checkAuthenticationData(username: string, password: string): boolean {

    return username.toLowerCase() === 'user' && password.toLowerCase() === 'password';
}