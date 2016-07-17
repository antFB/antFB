---
order: 3
title: 输入框组合
---

输入框的组合展现。

````jsx
import { Input, Col } from 'antd';
const InputGroup = Input.Group;

ReactDOM.render(
  <div>
    <InputGroup size="large">
      <Col span="4">
        <Input defaultValue="0571" />
      </Col>
      <Col span="8">
        <Input defaultValue="26888888" />
      </Col>
    </InputGroup>
  </div>
, mountNode);
````
