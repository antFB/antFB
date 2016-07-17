---
category: Components
chinese: 全局提示
type: Views
noinstant: true
english: Message
---

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

- `message.success(content, duration)`
- `message.error(content, duration)`
- `message.info(content, duration)`
- `message.warning(content, duration)`
- `message.warn(content, duration)`
- `message.loading(content, duration)`

组件提供了四个静态方法，参数如下：

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| content    | 提示内容       | React.Element or String    | -           |
| duration   | 自动关闭的延时，单位秒 | number               | 1.5          |

还提供了全局配置和全局销毁方法：

- `message.config(options)`
- `message.destroy()`

```js
message.config({
  top: 100,
  duration: 2,
});
```

| 参数       | 说明                | 类型                       | 默认值       |
|------------|--------------------|--------------------------|-------------|
| top        | 消息距离顶部的位置 | Number                      | 24px        |
| duration   | 默认自动关闭延时，单位秒 | Number                 | 1.5         |
