class ApiResponse {
  constructor(statusCode, data, message = "Scuccess") {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.scuccess = statusCode < 400;
  }
}
