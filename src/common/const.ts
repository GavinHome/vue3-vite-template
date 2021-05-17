// Token Const
export const TokenConst = {
  NO_LOGIN: 'NO_LOGIN', // 尚未登录系统
  NO_TOKEN: 'NO_TOKEN', // TOKEN过期
  TOKEN_REFRESH: 300 // token滑动刷新时间, 单位为秒, 用户活跃则刷新token时间
}

// Message Const
export const MessageConst = {
  AUTO_LOGIN_FAIL_TIPS_MSG: '系统登录错误，是否重新登录？',
  AUTO_LOGIN_FAIL_TIPS_TITLE: '登录提示',
  TOKEN_EXPIRE_MSG: '登录已过期，请重新登录',

  AUTO_LOGIN_FAIL_MESSAGE: '系统登录错误',
  LOGIN_FAIL_MESSAGE: '用户名或密码错误',
  LOGIN_SUCCESS_MESSAGE: '登录成功',

  SYMBOL_LINEBREAKER: '\n\n',
  SYMBOL_QUESTIONMARK: ' ？',

  SERVER_DATA_ERROR: '获取数据错误，请稍后重试'
}
