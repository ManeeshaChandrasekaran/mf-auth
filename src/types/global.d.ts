declare module 'host/store' {
  import { Store } from '@reduxjs/toolkit';
  import { RootState } from '@reduxjs/toolkit';
  
  export const store: Store;
  export const login: (username: string) => { type: string; payload: string };
  export const logout: () => { type: string };
  export type { RootState };
}

