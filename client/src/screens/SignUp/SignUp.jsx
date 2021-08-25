import React from 'react'

import { signUpUser } from '../../services/auth'
import SignUpCard from './SignUpCard'

export default function SignUp(props) {
  const { setCurrentUser } = props;


  const handleSignUp = async (signUpData) => {
    const userData = await signUpUser(signUpData);
    setCurrentUser(userData);

  };

  return (
    <div>
      <SignUpCard handleSignUp={handleSignUp} />
    </div>
  )
}
