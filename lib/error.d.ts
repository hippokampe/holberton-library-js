declare class HippokampeError extends Error {
    constructor(message: string);
}
declare class ApiError extends HippokampeError {
    constructor(message: string);
}
declare class UserError extends HippokampeError {
    constructor(message: string);
}
export { HippokampeError, ApiError, UserError };
