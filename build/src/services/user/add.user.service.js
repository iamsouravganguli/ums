import { User } from '../../database/models/user.model.js';
import bcrypt from 'bcrypt';
export const AddUserService = async (req) => {
    try {
        if (await User.findOne({
            where: { email: req.body.email },
        })) {
            return Promise.reject({
                code: 100,
                status: false,
                message: 'User already exist',
            });
        }
        else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
            const add_user = new User();
            add_user.email = req?.body?.email;
            add_user.first_name = req?.body?.first_name;
            add_user.last_name = req?.body?.last_name;
            add_user.password = hashedPassword;
            add_user.t_and_c = req?.body?.t_and_c;
            await add_user.save();
            return Promise.resolve({
                status: true,
                message: 'Sign up successfully completed',
                data: add_user.user_signup_response,
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
