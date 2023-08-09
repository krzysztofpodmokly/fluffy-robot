'use client';

import { useSession } from 'next-auth/react';

const AuthCheck = ({ children }: BaseProps) => {
  const data = useSession();

  console.log('client session', data)

  return children
}

export default AuthCheck