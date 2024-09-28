/**
 * 与后端约定好的 加密字符串
 */
export const keyOne = "eW1awsJiSLH7CGnmPGvBQZyPmACHTQYImNJPAu34fzs=";

/**
 * cookie 过期时间
 * - 记住我 7d
 * - 不记住我 1h
 */
export const cookieExpireWithRememberMe = 7;
export const cookieExpireWithoutRememberMe = 1 / 86400;

/**
 * 用户信息的 cookie key 键，包含了 token
 */
export const userInfoCookie = "token";

/**
 * 后端请求白名单（不需要登录可以访问的 api）
 */
export const whiteList = [
  "/user/open/login",
  "/user/open/register",
  "/system/verif/gen/random",
  "/system/verif/check3",
];
