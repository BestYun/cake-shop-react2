
## 下载运行

进入下载好的目录，运行一下命令
```
yarn install
yarn start

```

### antd-mobile 按需加载设置

#### 1.安装库
<p>yarn add react-app-rewired customize-cra babel-plugin-import  --dev</p>

#### 2.在项目根目录创建一个 config-overrides.js 用于修改默认配置
```
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);
```

#### 3.修改package.json文件里面的scripts修改为
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
},
```
