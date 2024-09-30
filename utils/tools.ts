// @ts-ignore
import CryptoJS from "crypto-js";

import { keyOne } from "@/common/auth/constant";

/**
 * 随机生成 16 位的 iv 向量
 * 使用base64加密
 * @returns {*}
 */
export function generateRandomIV() {
  // 创建一个16字节的数组用于存放随机值
  const iv = CryptoJS.lib.WordArray.random(16);
  const ivBase64 = CryptoJS.enc.Base64.stringify(iv);

  return exformatBase64(ivBase64);
}

/**
 * 加密请求数据
 * @param {string/object} word - 要加密的数据
 * @param {string} ivBase64 - Base64 编码的 IV
 * @returns {string} - Base64 编码的加密数据
 */
export function encrypt(word: string, ivBase64: string) {
  if (word === undefined) {
    return "";
  }
  // 创建密钥
  let key = CryptoJS.enc.Base64.parse(keyOne);
  // 将 Base64 编码的 IV 转换为 WordArray
  let iv = CryptoJS.enc.Base64.parse(deformatBase64(ivBase64));
  let enc;

  // 加密数据
  let wordArray = CryptoJS.enc.Utf8.parse(word);

  enc = CryptoJS.AES.encrypt(wordArray, key, {
    iv: iv,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
  });
  // 将加密后的数据转换为 Base64 字符串，并进行 URL 安全处理
  let encryptedData = enc.ciphertext.toString(CryptoJS.enc.Base64);

  return exformatBase64(encryptedData);
}

/**
 * 解密响应数据
 * @param {string} encryptWord 要解密的数据
 * @param {string} ivBase64 对应的 iv
 * @returns {string} - 解密后的 json 字符串
 */
export function decrypt(encryptWord: string, ivBase64: string) {
  try {
    // 将 IV Base64转换为 WordArray
    let iv1 = CryptoJS.enc.Base64.parse(deformatBase64(ivBase64));
    // 创建密钥
    let key = CryptoJS.enc.Base64.parse(keyOne);
    // 还原 Base64 字符串并解码为 WordArray
    let encryptedData = CryptoJS.enc.Base64.parse(deformatBase64(encryptWord));
    // 创建 CipherParams 对象
    let cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: encryptedData,
    });
    // 解密数据
    let dec = CryptoJS.AES.decrypt(cipherParams, key, {
      iv: iv1,
      mode: CryptoJS.mode.CTR,
      padding: CryptoJS.pad.NoPadding,
    });
    // 尝试将解密后的数据转换为字符串
    let decryptedStr = dec.toString(CryptoJS.enc.Utf8);

    if (!decryptedStr) {
      throw new Error("解密后的数据不能转换为有效的 UTF-8 字符串");
    }

    return decryptedStr;
  } catch (error) {
    return '{"error": "' + error + '"}';
  }
}

//格式化base64字符串
// 替换
export function exformatBase64(base64Str: string) {
  return base64Str.replace(/\//g, "_").replace(/\+/g, "-");
}
//还原
export function deformatBase64(base64Str: string) {
  return base64Str.replace(/_/g, "/").replace(/-/g, "+");
}

/**
 * 为 url 匹配创建正则表达式
 * @param pattern
 */
function createRegex(pattern: string): RegExp {
  // 将通配符转换为正则表达式
  const regexPattern = pattern
    .replace(/\*\*/g, ".*") // ** 匹配任意数量的路径
    .replace(/\*/g, "[^/]+") // * 匹配单个路径段
    .replace(/\//g, "\\/"); // 转义斜杠

  return new RegExp(`^${regexPattern}$`);
}

/**
 * 使用正则表达式对 url 进行匹配
 * @param url
 * @param whiteList
 */
export function matchesWhiteList(url: string, whiteList: []): boolean {
  return whiteList.some((pattern) => createRegex(pattern).test(url));
}
