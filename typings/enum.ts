/* 模型sid */
export enum modelName {
  SUBJECT = 1, // 剧集
  NEWS, // 新闻
  STAR, // 明星
  STORY, // 剧情
  EPISODE, // 剧集
  ROLE, // 角色
  FAVORITE, // 收藏评分表
  TAG, // 标签
  PINS, // 动态
  FORWARD, // 转发
  COMMENT, // 评论表
  REPLY, // 评论回复表
  FEED, // 关联动态表
  TOPIC, // 话题表
  DETAILEDLIST, // 清单
  ACOTR, // 演员表
  USER, // 用户
  LINK // 链接
}

export enum feedType {
  FOLLOW = 'follow', // 关注
  SCORE = 'score', // 评分
  EVALUATE = 'evaluate', // 评价
  ADD = 'add', // 添加
  UPDATE = 'update' // 更新
}
