import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../services/auth'
import LoginCard from './LoginCard'

export default function Login(props) {
  const { setCurrentUser } = props;
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div>
      <LoginCard handleLogin={handleLogin} />
    </div>
  )
}
