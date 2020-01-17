import {RSA} from 'react-native-rsa-native';
import AsyncStorage from '@react-native-community/async-storage';

const RSA_KEY_SIZE = 2048;

const KEY_PRIVATE_KEY = 'key_priv_key';
const KEY_PUBLIC_KEY = 'key_pub_key';

/**
 * Get public/private key pair or generate one if not exists
 * @param {*} ID Identifier for particular public/private key
 */
async function getOrGenerateKeyPair(ID) {
  const privateKey = await AsyncStorage.getItem(`${KEY_PRIVATE_KEY}_${ID}`);
  const publicKey = await AsyncStorage.getItem(`${KEY_PUBLIC_KEY}_${ID}`);

  if (privateKey && publicKey) {
    return {
      private: privateKey,
      public: publicKey,
    };
  }

  const keys = await RSA.generateKeys(RSA_KEY_SIZE);

  await AsyncStorage.setItem(`${KEY_PRIVATE_KEY}_${ID}`, keys.private);
  await AsyncStorage.setItem(`${KEY_PUBLIC_KEY}_${ID}`, keys.public);

  return {
    private: keys.private,
    public: keys.public,
  };
}

/**
 * @param {*} ID Identifier for particular public/private key
 * @param {*} data A data string to be encrypted
 */
async function encryptDataFor(ID, data) {
  const keys = await getOrGenerateKeyPair(ID);

  const encrypted = await RSA.encrypt(data, keys.public);
  return {
    keys,
    data,
    encrypted,
  };
}

/**
 * @param {*} ID Identifier for particular public/private key
 * @param {*} encryptedData Chiper text to be decrypted
 */
async function decryptDataFor(ID, encryptedData) {
  const keys = await getOrGenerateKeyPair(ID);

  const decrypted = await RSA.decrypt(encryptedData, keys.private);
  return {
    keys,
    encryptedData,
    decrypted,
  };
}

export default {
  encryptDataFor,
  decryptDataFor,
};
