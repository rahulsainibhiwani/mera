import crypto from "crypto-js";

export const encryptPass = (pass) => {
  const encrypt = crypto.AES.encrypt(pass, process.env.CRYPTO_SECRET_KEY);
  return encrypt;
};
export const decryptPass = (encrypt) => {
  const decrypt = crypto.AES.decrypt(
    encrypt,
    process.env.CRYPTO_SECRET_KEY
  ).toString(crypto.enc.Utf8);
  return decrypt;
};
