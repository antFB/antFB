---
order: 4
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

可口的图标让信息类型更加醒目。

## en-US

Decent icon make information more clear and more friendly.

````jsx
import { Alert } from 'antd';

ReactDOM.render(<div>
  <Alert message="成功提示的文案" type="success" showIcon />
  <Alert message="消息提示的文案" type="info" showIcon />
  <Alert message="警告提示的文案" type="warning" showIcon />
  <Alert message="错误提示的文案" type="error" showIcon />
  <Alert
    message="成功提示的文案"
    description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
    type="success"
    showIcon
  />
  <Alert
    message="消息提示的文案"
    description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
    type="info"
    showIcon
  />
  <Alert
    message="警告提示的文案"
    description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
    type="warning"
    showIcon
  />
  <Alert
    message="错误提示的文案"
    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
    type="error"
    showIcon
  />
</div>, mountNode);
````
