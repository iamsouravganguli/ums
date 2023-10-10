import { JWT } from '../../helpers/jwt/jwt.js';
export const AuthorizationMiddleware = async (req, res, next) => {
    try {
        await JWT.verify_access_token(req);
        next();
    }
    catch (e) {
        res.status(401).jsonp({
            meta: {
                success: e?.status,
                message: e?.message,
            },
        });
    }
};
