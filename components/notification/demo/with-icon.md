---
order: 2
title: 带有Icon的通知提醒框
---

通知提醒框左侧有图标。

````jsx
import { Button, notification } from 'antd';

const openNotificationWithIcon = function (type) {
  return function () {
    notification[type]({
      message: '这是标题',
      description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案',
    });
  };
};

ReactDOM.render(
  <div>
    <Button onClick={openNotificationWithIcon('success')}>成功</Button>
    <Button onClick={openNotificationWithIcon('info')}>消息</Button>
    <Button onClick={openNotificationWithIcon('warning')}>警告</Button>
    <Button onClick={openNotificationWithIcon('error')}>错误</Button>
  </div>
, mountNode);
````

<style>
.code-box-demo .ant-btn {
  margin-right: 1em;
}
</style>
