import * as CryptoJS from 'crypto-js';

export class EncryptDecrypt {
  get encryptMethodLength() {
      return parseInt(this.encryptMethod.match(/\d+/)[0]);
  }

  get encryptMethod() {
      return 'AES-256-CBC';
  }

  decrypt(encryptedString, key) {
      const json = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedString)));

      const salt = CryptoJS.enc.Hex.parse(json.salt);
      const iv = CryptoJS.enc.Hex.parse(json.iv);

      const encrypted = json.ciphertext;

      let iterations: number = parseInt(json.iterations);
      if (iterations <= 0) {
          iterations = 999;
      }
      const encrlength = (this.encryptMethodLength / 4);
      const hashKey = CryptoJS.PBKDF2(key, salt, {
                    'hasher': CryptoJS.algo.SHA512,
                    'keySize': (encrlength / 8),
                    'iterations': iterations
                  });

      const decrypted = CryptoJS.AES.decrypt(encrypted, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
      return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encrypt(string, key) {
      const iv = CryptoJS.lib.WordArray.random(16);

      const salt = CryptoJS.lib.WordArray.random(256);
      const iterations = 999;
      let encrlength = (this.encryptMethodLength / 4);
      let hashKey = CryptoJS.PBKDF2(key, salt, {
                    'hasher': CryptoJS.algo.SHA512,
                    'keySize': (encrlength / 8),
                    'iterations': iterations});

      const encrypted = CryptoJS.AES.encrypt(string, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
      const encryptedString = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

      const output = {
          'ciphertext': encryptedString,
          'iv': CryptoJS.enc.Hex.stringify(iv),
          'salt': CryptoJS.enc.Hex.stringify(salt),
          'iterations': iterations
      };
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(output)));
  }
}
