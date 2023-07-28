// swr内部で使用されているuseの代替実装
// https://github.com/vercel/swr/blob/main/core/src/use-swr.ts#L46-L75

export const use = <T>(
  promise: Promise<T> & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: T;
    reason?: unknown;
  },
): T => {
  if (promise.status === 'pending') {
    throw promise;
  } else if (promise.status === 'fulfilled') {
    return promise.value as T;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else {
    promise.status = 'pending';
    promise.then(
      (v) => {
        promise.status = 'fulfilled';
        promise.value = v;
      },
      (e) => {
        promise.status = 'rejected';
        promise.reason = e;
      },
    );
    throw promise;
  }
};
