'use client';

import { useSession, signIn } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  const data = useSession();

  console.log(data)

  if (data.status === 'authenticated') {
    return <Link href={`/`}>
      Your photo
      <Image src={data.data.user?.image ?? '/default-avatar.jpg'} alt="Your Name" width="32" height="32" />
    </Link>
  }

  return <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
}

export default SignIn