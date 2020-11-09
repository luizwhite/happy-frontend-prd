import api from './api';

interface ResponseAuth {
  user?: {
    id: number;
    username: string;
    email: string;
    password: string;
    admin: boolean;
  };
  token?: string;
  error?: string;
}

/* interface Error {
  error: string;
} */

interface User {
  email: string;
  password: string;
}

export function signIn(user: User): Promise<ResponseAuth> {
  return api
    .post('authenticate', user)
    .then((res) => res.data)
    .catch((err) => err.response.data);
}

// export function signOut(user: User): Promise<object> {
export function signOut(): void {
  localStorage.clear();

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       token: 'aklshdaijhsdjkahsdkhaksdadq1231231kjhk2j1jjkand1u',
  //       user: {
  //         name: 'Luiz',
  //         email: 'luiz@email.com',
  //       },
  //     });
  //   }, 2000);
  // });
}
