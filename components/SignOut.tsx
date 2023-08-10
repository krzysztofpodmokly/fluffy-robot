'use client';

import { signOut } from "next-auth/react";

const SignOut = () => {
  return <button className="btn btn-outline" onClick={() => signOut()}>Sign out</button>
}

export default SignOut