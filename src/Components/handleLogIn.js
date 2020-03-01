import { logInUser } from '../api-services';

export const handleLogIn = async (param, email, password) => {
    const user = await logInUser(param, email, password)
    this.props.setUser(user);
    localStorage.setItem('user', JSON.stringify(user.body));
    this.props.history.push('/');
}
