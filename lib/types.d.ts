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
export declare class Holberton {
    private url;
    private user?;
    constructor(url?: string);
    /**
     * authenticate
     */
    authenticate(credentials: Credentials): Promise<User>;
    /**
     * getUser
     */
    getUser(): User | undefined;
}
