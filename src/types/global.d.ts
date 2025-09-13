declare module 'host/store' {
  import { Store } from '@reduxjs/toolkit';
  import { RootState } from '@reduxjs/toolkit';
  
  export const store: Store;
  export const login: (payload: { username: string; role: 'user' | 'admin' }) => { type: string; payload: { username: string; role: 'user' | 'admin' } };
  export const logout: () => { type: string };
  export type { RootState };
}

