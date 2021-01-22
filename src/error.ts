class HippokampeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Hippokampe Error';
    }
}

class ApiError extends HippokampeError {
    constructor(message: string) {
        super(message);
        this.name = 'Api Error';
    }
}

class UserError extends HippokampeError {
    constructor(message: string) {
        super(message);
        this.name = 'User Error';
    }
}

export {HippokampeError, ApiError, UserError};