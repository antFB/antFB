---
order: 0
title: 基本
---

最简单的用法，4.5 秒后自动关闭。

````jsx
import { Button, notification } from 'antd';

const openNotification = function () {
  notification.open({
    message: '这是标题',
    description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>打开通知提醒框</Button>
, mountNode);
````
