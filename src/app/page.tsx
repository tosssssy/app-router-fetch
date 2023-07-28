import { UserList } from '@/components/UserList';
import { UserList_swr_use } from '@/components/UserList_swr_use';
import { Suspense } from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getUsers = async () => {
  await sleep(2000);
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-cache',
  });

  return await res.json();
};

export default async function Home() {
  const usersPromise = getUsers();

  return (
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <UserList usersPromise={usersPromise} />
      </Suspense>

      {/* <Suspense fallback={<div>loading...</div>}>
        <UserList_swr_use usersPromise={usersPromise} />
      </Suspense> */}
    </main>
  );
}
