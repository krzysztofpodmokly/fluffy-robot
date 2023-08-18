'use client';

import { signOut } from "next-auth/react";

const SignOut = () => {
  return <button className="btn btn-outline ml-2" onClick={() => signOut()}>Sign out</button>
}

export default SignOut