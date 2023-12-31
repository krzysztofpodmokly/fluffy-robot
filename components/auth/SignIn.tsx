'use client';

import { useSession, signIn } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import Loader from "../loader/Loader";

const SignIn = (): JSX.Element => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <Loader />
  }

  if (status === 'authenticated') {
    return <Link href={`/`}>
      <div className="avatar mr-4">
        <div className="w-10 rounded-full">
          <Image src={data.user?.image ?? '/default-avatar.jpg'} alt="Your Name" width="32" height="32" />
        </div>
      </div>
    </Link>
  }

  return <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
}

export default SignIn