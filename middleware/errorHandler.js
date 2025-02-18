const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    console.log("Error Status Code:", statusCode); // Log the status code
    console.log("Error Message:", err.message);   // Log the error message

    const errorResponse = {
        title: "",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    };

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            errorResponse.title = "Validation Error";
            break;
        case constants.NOT_FOUND:
            errorResponse.title = "Not Found";
            break;
        case constants.FORBIDDEN:
            errorResponse.title = "Forbidden";
            break;
        case constants.UNAUTHORIZED:
            errorResponse.title = "Unauthorized";
            break;
        case constants.SERVER_ERROR:
            errorResponse.title = "Server Error";
            break;
        default:
            errorResponse.title = "Unknown Error";
            res.status(500); // Fallback to 500 if no status code is set
            break;
    }

    res.json(errorResponse);
};

module.exports = errorHandler;
