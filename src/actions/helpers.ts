export function checkAuthenticationData(username: string, password: string): boolean {

    return username.toLowerCase() === 'username' && password.toLowerCase() === 'password';
}