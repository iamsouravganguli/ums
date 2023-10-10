import { JWT } from '../../helpers/jwt/jwt.js';
import { User } from '../../database/models/user.model.js';
export const ProfileService = async (req) => {
    try {
        const userID = (await JWT.verify_access_token(req));
        const userProfile = await User.findOne({
            where: {
                id: userID?.id,
            },
        });
        if (!userProfile) {
            return Promise.reject('wrong');
        }
        else {
            return Promise.resolve({
                status: true,
                message: 'The requested resource was found',
                data: userProfile.user_profile_view,
            });
        }
    }
    catch (e) {
        return Promise.reject({
            code: 105,
            status: false,
            message: 'internal Server Error',
            error: e,
        });
    }
};
