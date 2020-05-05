# 开发踩坑记录

## 1.github gh-pages分支部署演示

## 所有开发放dev分支，开发完测试没问题合并master分支，
## master分支每次部署前记得先删除上次生成的dist文件夹，
## 然后yarn run build打包生成dist文件夹，记得将dist提交master分支，可能会引起代码冲突，
## 删除本地跟线上gh-pages分支，git branch -d gh-pages,git push origin --delete gh-pages,
## 然后运行git subtree push --prefix=dist origin gh-pages，要发布的内容将会推到gh-pages分支，
## 然后去https://github.com/FELBC/lbcShopmall/settings设置，Source设为gh-pages branch,
## 最终发布地址为https://felbc.github.io/lbcShopmall/index.html，
## 暂时没有找到更好的解决办法，应该有相应的自动化部署办法，有时间再折腾

## 2.vue.config.js修改完需重启才能生效

## 3.Mock.mock后面匹配的接口地址需要用正则, eg：/user\/login/,不然拦截不到接口

## 4.build生成dist放到github图片找不到路径问题(待解决)