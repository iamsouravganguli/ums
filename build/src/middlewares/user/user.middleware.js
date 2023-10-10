export const UserMiddleware = async (err, req, res, next) => {
    if (err) {
        if (err.code === 100) {
            res.status(409).jsonp({
                meta: {
                    success: err.status,
                    message: err.message,
                },
            });
        }
        if (err.code === 102) {
            res.status(403).jsonp({
                meta: {
                    success: err.status,
                    message: err.message,
                },
            });
        }
        if (err.code === 105) {
            res.status(409).jsonp({
                meta: {
                    success: err.status,
                    message: err.message,
                },
                error: err.error,
            });
        }
        else {
            next();
        }
    }
    else {
        next();
    }
};
