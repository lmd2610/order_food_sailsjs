/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const nodemailer = require('nodemailer');
const crypto = require('crypto');
module.exports = {

  attributes: {

    name: { type: 'string' },
    address: { type: 'string' },
    orderAddressId: { type: 'number' },
    image: { type: 'string' },
    status: { type: 'number' }
  },
  customerInfoByEmail: async (email) => {
    let query = `select c.* from customer c inner join user u on u.objectId = c.id where u.userGroupId = 1 and email = $1`
    let result = await sails.sendNativeQuery(query, [email]);
    return result.rows
  },
  sendOTP: async (email) => {
    //Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
    var transporter = nodemailer.createTransport({ // config mail server
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'laduc45@gmail.com', //Tài khoản gmail vừa tạo
        pass: 'laminhduc' //Mật khẩu tài khoản gmail vừa tạo
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
    const timestamp = "" + Date.now();
    const secret_key = "scswdsdaxzcsadwfsaasadasdsdsdsdsdsd";

    const hashed_value = crypto.createHash('sha256').update(timestamp + secret_key).digest('hex');
    const last_six_characters = hashed_value.substr(hashed_value.length - 6);

    const otp = parseInt(last_six_characters, 16);

    let otp_string = otp.toString();

    while (otp_string.length < 6) {
      otp_string = "0" + otp_string;
    }
    if (otp_string.length > 6) {
      otp_string = otp_string.substr(otp_string.length - 6)
    }
    let OTP = otp_string;

    var content = '';
    content += `
      <div style="padding: 10px; background-color: #003375">
          <div style="padding: 10px; background-color: white;">
              <h4 style="color: #0085ff">OTP của bạn là: ${OTP}</h4>
              <span style="color: black">OTP sẽ hết hạn trong 1 phút </span>
          </div>
      </div>
  `;
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
      from: 'laduc45@gmail.com',
      to: email,
      subject: 'Xác thực đăng nhập app Ăn',
      text: 'Thử cái',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
      html: content //Nội dung html mình đã tạo trên kia :))
    }
    transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
        console.log(err);
        throw "Không gửi được mail"

      } else {
        console.log('Message sent: ' + info.response);

      }
    });
    return OTP;
  },
  createCustomer: async (name, birth, password, email) => {
    let query = `call REGISTER_CUSTOMER($1,$2,$3,$4,$5)`;
    let result = await sails.sendNativeQuery(query, [name, birth, password, email, Date.now()])
    return result;
  }
};

