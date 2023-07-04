# vue-admin-template

> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

**Live demo:** http://panjiachen.github.io/vue-admin-template

[中文文档](https://github.com/PanJiaChen/vue-admin-template/blob/master/README-zh.md)

## Build Setup

```bash
# Clone project
git clone https://github.com/PanJiaChen/vue-admin-template.git

# Install dependencies
npm install

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

## Demo

![demo](https://github.com/PanJiaChen/PanJiaChen.github.io/blob/master/images/demo.gif)

## Extra

If you want router permission && generate menu by user roles , you can use this branch [permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

This project is based on `webpack4` development. If you want to use `webpack3` development, please use this branch [webpack3](https://github.com/PanJiaChen/vue-admin-template/tree/webpack3)

For `typescript` version, you can use [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (Credits: [@Armour](https://github.com/Armour))

## Related Project

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

[electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

[vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template)

### Element-Ui using cdn tutorial

First find `index.html`([root directory](https://github.com/PanJiaChen/vue-admin-template/blob/element-ui-cdn/index.html))

Import css and js of `Element`, and then import vue. Because `Element` is vue-dependent, vue must be import before it.

Then find [webpack.base.conf.js](https://github.com/PanJiaChen/vue-admin-template/blob/element-ui-cdn/build/webpack.base.conf.js)
Add `externals` to make webpack not package vue and element.

```
externals: {
  vue: 'Vue',
  'element-ui':'ELEMENT'
}
```

Finally there is a small detail to pay attention to that if you import vue in global, you don't need to manually `Vue.use(Vuex)`, it will be automatically mounted, see
[issue](https://github.com/vuejs/vuex/issues/731)

And you can use `npm run build --report` to see the effect

Pictured:
![demo](https://panjiachen.github.io/images/element-cdn.png)

**[Detailed code](https://github.com/PanJiaChen/vue-admin-template/commit/746aff560932704ae821f82f10b8b2a9681d5177)**

**[Branch](https://github.com/PanJiaChen/vue-admin-template/tree/element-ui-cdn)**

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2017-present PanJiaChen



<p align="center">
  <a href="https://gitee.com/susantyp/face-ui">
    <img src="https://img-blog.csdnimg.cn/5776aada5ab946b384c92e8adb69892d.png#pic_center" width="81" alt="FACE-UI">
  </a>
</p>
<h1 align="center">FACE-UI</h1>

FACE-UI 基于前后端分离Web端项目，主要实现了网页版的人脸登录，通过调取前端摄像头拍照，传入后台进行跟数据库人脸库的相似度比对，技术的用点：Springboot，Mysql，JWT，VUE 2.X 等等技术实现，主要功能点：人脸列表CRUD，日志列表CRUD，基于自建人脸库通过base64编码方式存储人脸图片，通过调用腾讯云人脸对比API场景实现

### 工程介绍

#### 1，face-easy (后端springboot工程)

项目地址：[susantyp/face-easy (gitee.com)](https://gitee.com/susantyp/face-easy)

拉取相关代码

在工程sql文件夹下面，有基于mysql的sql脚本

在application.yml 文件中配置 腾讯云的secretId和secretKey

然后还需要选购一下腾讯云人脸对比api

#### 2，face-ui(前端VUE 2.X 工程)

项目地址：[susantyp/face-ui (gitee.com)](https://gitee.com/susantyp/face-ui)

拉取相关代码

npm install  安装相关依赖

npm run serve 运行服务

刚刚开始进入浏览器，需要授权浏览器摄像头权限，点击同意即可

### 怎么配置腾讯云？

详细文档：https://blog.csdn.net/Susan003/article/details/125914027?spm=1001.2014.3001.5502