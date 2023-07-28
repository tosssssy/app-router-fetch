'use client';
import { FC, use } from 'react';

type UserListProps = {
  usersPromise: Promise<any>;
};

export const UserList: FC<UserListProps> = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
