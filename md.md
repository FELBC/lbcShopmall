# 开发踩坑记录

## 1.github gh-pages分支部署演示
```
所有开发放dev分支，开发完测试没问题合并master分支，master分支yarn run build打包生成dist文件夹，然后运行git subtree push --prefix=dist origin gh-pages，将dist静态文件推到gh-pages分支，然后去https://github.com/FELBC/lbcShopmall/settings设置，Source设为gh-pages branch,最终发布地址为https://felbc.github.io/lbcShopmall/index.html
```

