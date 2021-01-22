import fetch from 'node-fetch';
import * as types from './types';
import * as errors from './error';

const loginCall = async (url: string, credentials: types.Credentials): Promise<types.User> => {
    return new Promise<types.User>(async (resolve, reject) => {
        try {
            const response = await fetch(url, {
                method: 'post',
                body: JSON.stringify(credentials),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();
            
            if (response.ok) {
                const {
                    user_name,
                    first_name,
                    last_name,
                    id,
                    email,
                    profile_url,
                    city,
                } = data.user;

                const user: types.User = {
                    username: user_name,
                    first_name,
                    last_name,
                    id,
                    email,
                    profile_url,
                    city,
                }

                resolve(user);
            } else {
                const {message} = data;
                reject(new errors.UserError(message));
            }
        } catch {
            reject(new errors.ApiError(`the url of the server it's not valid`));
        }

    });
}

export { loginCall };