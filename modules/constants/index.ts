export enum HTTPCode {
    Continue = 100,
    Success = 200,
    Created = 201,
    Updated = 202,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    NotAcceptable =  406,
    InternalError = 500
}

export enum APIConstants {
     base_url = 'https://test.amonet.co.za',
     consumer_key = 'ck_0c105911cd1f51f1cb4a3002f86328443a80b090',
     consumer_secret = 'cs_f7f7614f27d4ac015de3bc5bb346fa8c8c8f9228'
}

export const aes128_encryptionKey = [ 91, 7, 119, 71, 3,  67, 79, 13, 109, 101, 97, 13, 29, 19, 91, 7 ];
export const aes192_encryptionKey = [ 67, 1, 2, 29, 4, 13, 71, 7, 8, 13, 67, 67, 67, 13, 14, 101,
    101, 17, 71, 29, 19, 29, 19, 19 ];
export const aes256_encryptionKey =  [67, 29, 119, 3, 101, 5, 71, 109, 8, 97, 29, 67, 29, 13, 14, 101, 71, 17, 119, 19, 29, 13, 149, 119, 24, 67, 29, 27, 119,
    29, 71, 31];
export const SMS_CAPABLE_PHONE_NUMBER = "";
export enum HTTPHeaderKey {
    Authenticate = 'ww-authenticate',
    AccountLocked = 'account-locked'
}

export enum HTTPHeaderValue {
    Oob = 'out-of-band'
}
export enum HTTPBodyKey {
   SessionID = 'sessionId',
   UniqueID = 'uniqueId'
}

export const ALLOWED_INCORRECT_CREDENTIALS = 5;

export enum ErrorType {
    BadCredentials = 0,
    AccountLocked = 1,
    FailedConnection = 2,
    InternalError = 3,
    LastAttempt = 4,
    InvalidFormData = 5,
    Unauthorized = 6,
    NotFound = 7
 }