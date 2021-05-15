// Token Const
export const TokenConst = {
  NO_LOGIN: 'NO_LOGIN', // 尚未登录系统
  NO_TOKEN: 'NO_TOKEN', // TOKEN过期
  TOKEN_REFRESH: 300 // token滑动刷新时间, 单位为秒, 用户活跃则刷新token时间
}

// // Message Const
// export const MessageConst = {
//   AUTO_LOGIN_FAIL_TIPS_MSG: "系统登录错误，是否重新登录？",
//   AUTO_LOGIN_FAIL_TIPS_TITLE: "登录提示",
//   TOKEN_EXPIRE_MSG: "登录已过期，请重新登录",

//   AUTO_LOGIN_FAIL_MESSAGE: "系统登录错误",
//   LOGIN_FAIL_MESSAGE: "用户名或密码错误",
//   LOGIN_SUCCESS_MESSAGE: "登录成功",

//   SYMBOL_LINEBREAKER: "\n\n",
//   SYMBOL_QUESTIONMARK: " ？",

//   SERVER_DATA_ERROR: "获取数据错误，请稍后重试",
// };

// App Const, TODO
export const AppConst = {
  SYSTEM_NAME: 'vue3+vite+template',
  VUE_APP_VERSION: `1.0.0`, // `${process.env.VUE_APP_VERSION}`,
  VUE_APP_REVISION: `123456`, // `${process.env.VUE_APP_REVISION}`,
  VUE_APP_VERSIONNAME: `测试系统`, // `${process.env.VUE_APP_VERSIONNAME}`,
  NODE_ENV: `` // `${process.env.NODE_ENV}`,
}
