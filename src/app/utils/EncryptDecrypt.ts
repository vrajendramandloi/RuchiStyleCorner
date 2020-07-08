import * as CryptoJS from 'crypto-js';

export class EncryptDecrypt {
  encrypterRc4(longString, key) {
    return CryptoJS.AES.encrypt(longString, key, {
        keySize: 128 / 8,
        iv: key,
        /* mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923 */
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
  }
  decrypterRc4(encrypted, key) {
    return JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encrypted, key, {
          keySize: 128 / 8,
          iv: key,
          mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
        })));
  }
  /*
    Usage of below Methods.
    const encd = new EncryptDecrypt();
    const encryptedMsg = encd.encrypt(JSON.stringify(blog), 'VrajendraMandloi');
    console.log('encrypted msg {}', JSON.stringify(encryptedMsg));

    const decryptedMsg = encd.decrypt(encryptedMsg, 'VrajendraMandloi');
    console.log('decrypted msg ', JSON.parse(decryptedMsg));
 */
  encrypt(longString, key): any {
    const iv = CryptoJS.lib.WordArray.random(16);
    const salt = CryptoJS.lib.WordArray.random(256);
    const hashKey = CryptoJS.PBKDF2(key, salt, {
      'hasher': CryptoJS.algo.SHA512, 'keySize': 8, 'iterations': 999
    });
    const encrypted = CryptoJS.AES.encrypt(longString, hashKey, { 'mode': CryptoJS.mode.CBC, 'iv': iv });
    const encryptedString = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    const output = {
      'ciphertext': encryptedString, 'iv': iv, 'salt': salt
    };
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(output)));
  }

  decrypt(encryptedString, key) {
    const json = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedString)));
    const encrypted = json.ciphertext;
    const iv = json.iv;
    const salt = json.salt;
    const hashKey = CryptoJS.PBKDF2(key, salt, {
      'hasher': CryptoJS.algo.SHA512, 'keySize': 8, 'iterations': 999
    });
    const decrypted = CryptoJS.AES.decrypt(encrypted, hashKey, { 'mode': CryptoJS.mode.CBC, 'iv': iv });
    //return decrypted.toString(CryptoJS.enc.Utf8);
    return CryptoJS.enc.Utf8.stringify(decrypted);
  }
}
