export const GlobaMiddleware = async (err, req, res, next) => {
    try {
        if (err) {
            if (err.code === 105) {
                res.status(400).jsonp({
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
    }
    catch (e) {
        next(e);
    }
};
