export const LOGIN_ORANGE_LOCATORS = {
    username: (page) => page.getByPlaceholder('Username'),
    password: (page) => page.getByPlaceholder('Password'),
    loginButton: (page) => page.getByRole('button', { name: 'Login' }),
    usernameText: (page) => page.getByText('Username : Admin'),
    passwordText: (page) => page.getByText('Password : admin123'),
    errorMsg: (page) => page.getByText('Invalid credentials')
}