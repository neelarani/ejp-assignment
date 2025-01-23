'use client';

import { useEffect } from 'react';
import { UserData } from '../context/UserProvider';
import { redirect } from 'next/navigation';
import Swal from 'sweetalert2';

const page = () => {
  const { user, isAuth } = UserData();

  useEffect(() => {
    if (!isAuth) {
      redirect('/signin');
    }
  }, [isAuth]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Wellcome to your Profile
      </h1>
      {user && (
        <>
          <img className="rounded-full w-16 h-16" src={user.picture} alt="" />
          <p>{user.email}</p>
          <p>{user.given_name}</p>
        </>
      )}
    </div>
  );
};

export default page;
