export class ErrorItem {
    key: string;
    field: string;
    message: string;
  
    constructor(key, field, message) {
      this.key = key;         // string
      this.field = field;     // string
      this.message = message; // string
    }
  }

  export class CommonError {
    message: string;
    referenceNumber: string;
    errors: Array<ErrorItem>;
  
    constructor(message, referenceNumber, errors = []) {
      this.message = message;
      this.referenceNumber = referenceNumber; // string
      this.errors = errors;                   // array of ErrorItem
    }
  }