import * as types from './types';
declare const loginCall: (url: string, credentials: types.Credentials) => Promise<types.User>;
export { loginCall };
