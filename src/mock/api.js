import Mock from 'mockjs'

Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "@email",
    "phone|1": /^1[0-9]{10}$/,
    "role|1": ['管理员','普通用户'],
    "createTime": "@date",
    "updateTime": "@date"
  }
});