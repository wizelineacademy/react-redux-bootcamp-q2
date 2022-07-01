export function mockRequest<T>(
  response: T,
  time = 3000,
  shouldResolve = true
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(response);
      } else {
        reject(response);
      }
    }, time);
  });
}
