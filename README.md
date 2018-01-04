# h5api

h5 api 项目

## 目录结构

```text
|-- app
    |-- controller  控制器
        |-- index.d.ts  控制器声明文件
    |-- extend      框架扩展
    |-- middleware  中间件
    |-- model       模型
        |-- index.d.ts  模型声明文件
    |-- public      静态资源
    |-- service     业务逻辑
        |-- index.d.ts  业务逻辑声明文件
    |-- index.d.ts  框架声明文件
    |-- router.ts   路由文件
|-- config          配置文件
    |-- config.default.ts   默认配置
    |-- plugin.ts           插件配置
|-- lib             业务无关类库
|-- logs            程序日志
|-- run             运行时状态
|-- test            单元测试目录
    |-- app
        |-- controller  控制器测试
```

## 开始开发

### 新建路由

1. 在**app/controller**新建文件

1. 编辑**app/controller/index.d.ts**，添加控制器定义

1. 编辑**router.ts**，添加路由定义

### 新建service

1. 在**app/service**新建文件

1. 编辑**app/service/index.d.ts**，添加业务逻辑定义

### 新建model

1. 在**app/model**新建文件

1. 编辑**app/model/index.d.ts**，添加模型定义

### 控制器调用业务逻辑代码

```typescript
this.service.[service名称].[service方法]
```

### 业务逻辑调用其他业务逻辑

```typescript
this.app.service.[service名称].[service方法]
```

### 业务逻辑调用model

```typescript
this.app.model.Demo.[model方法]
```

## 开发规范

1. 必须开启tslint

1. 非依赖性接口(如微信授权，这个必须手动测试)必须单元测试

1. 必须有完善的版本号管理规则

1. 必须使用gitflow工作流

1. 编辑器建议使用vscode