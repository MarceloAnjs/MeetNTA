module.exports = (error, req, res, next) => {

    // format error
    if (!error.status && !error.errors) {
        res.status(500).json({
            errors: [
                {
                    message: error.message,
                },
            ],
        });
    } else {
        res.status(error.status).json({
            message: error.message,
            errors: error.errors,
        });
    }
    next();
};