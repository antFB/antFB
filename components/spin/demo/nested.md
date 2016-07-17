---
order: 3
title: 卡片加载中
---

可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

````jsx
import { Spin, Switch, Alert } from 'antd';

const Card = React.createClass({
  getInitialState() {
    return { loading: false };
  },
  toggle(value) {
    this.setState({ loading: value });
  },
  render() {
    const container = (
      <Alert message="消息提示的文案"
        description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading}>{container}</Spin>
        切换加载状态：<Switch checked={this.state.loading} onChange={this.toggle} />
      </div>
    );
  },
});

ReactDOM.render(<Card />, mountNode);
````
