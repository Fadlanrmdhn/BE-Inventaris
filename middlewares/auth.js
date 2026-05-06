const jwt = require('jsonwebtoken')
const {response} = require('../helpers/response.formatter')
const {auth_secret} = require('../config/base.config')

module.exports = {
    checkToken : async (req, res, next) => {
        //token diambil dari header
        const token = req.header("authorization");
        if(!token) {
            //401: error untuk penggunaa yg belu, login (unauthorization)
            return res.status(401).json(response(401, "unauthorized", "please login and try again!"));
        }
        try {
            //cek token aktif atau engga (belum  exp)
            const check = jwt.verify(token, auth_secret);
            //karena nanti penguna perlu data indentitas pengguan, panggil payload yang dikirim jwt.sign() di logincontroller dam si,pan di req. data payload tersimpan di const check (hasil verify), ada {userId, name, email}
            req.user = check;
            next(); //lanjutkan proses routing yang diminta
        } catch (error){
            return res.status(401).json(response(401, "unauthorized", "please login and try again!"));

        }
    }
}