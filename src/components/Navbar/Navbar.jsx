'use client';

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { UserData } from '@/app/context/UserProvider';
import Link from 'next/link';

const Navbar = () => {
  const { user, isAuth } = UserData();

  return (
    <div className="flex gap-4 justify-center items-center sticky top-0 z-10">
      <p>Home</p>
      <Link href={'/profile'}>Profile</Link>

      <div className="flex">
        {user ? (
          <LogoutLink>Log out</LogoutLink>
        ) : (
          <>
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
