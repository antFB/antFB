---
order: 1
title: 不可用
---

Switch 失效状态。

````jsx
import { Switch, Button } from 'antd';

const Test = React.createClass({
  getInitialState() {
    return {
      disabled: true,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
