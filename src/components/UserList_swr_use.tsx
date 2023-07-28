'use client';
import { FC } from 'react';
import { use } from './swr_use';

type UserListProps = {
  usersPromise: Promise<any>;
};

export const UserList_swr_use: FC<UserListProps> = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
