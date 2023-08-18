'use client';

import { useSession } from 'next-auth/react';

const AuthCheck = ({ children }: BaseProps) => {
  const data = useSession();

  if (data.status === 'authenticated') {
    return <>{children}</>
  }

  return <></>
}

export default AuthCheck