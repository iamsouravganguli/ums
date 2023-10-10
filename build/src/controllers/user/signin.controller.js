import { AuthUserService } from '../../services/user/auth.user.service.js';
export const signin_controller = async (req, res, next) => {
    try {
        const auth_user = await AuthUserService(req);
        res.status(200).jsonp({
            meta: {
                success: auth_user.status,
                message: auth_user.message,
            },
            data: auth_user.data,
        });
    }
    catch (e) {
        next(e);
    }
};
