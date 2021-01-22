import { loginCall } from '../src/controllers';

export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    profile_url: string;
    city: string;
}

export class Holberton {
    private url:string;
    private user?:User;

    constructor(url?: string) {
        this.url = (url !== '' && url !== undefined)
            ? url 
            : 'https://api.hippokampe.wtf';

        console.log(this.url);
    }

    /**
     * authenticate
     */
    public async authenticate(credentials: Credentials):Promise<User> {
        const endpointURL = `${this.url}/auth/login`;

        return loginCall(endpointURL, credentials) 
    }


    /**
     * getUser
     */
    public getUser():User|undefined {
        return this.user
    }
}
