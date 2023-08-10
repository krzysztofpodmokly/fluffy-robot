'use client';

import { useSession } from 'next-auth/react';

const AuthCheck = ({ children }: BaseProps) => {
  const data = useSession();

  console.log('client session', data)

  if (data.status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }

  // return children
}

export default AuthCheck