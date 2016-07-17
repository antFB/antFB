---
order: 2
title: 进场和离场
---

通过把属性设置一个数组来分别表示进出场的效果，`type`、`animConfig`、`delay`、`duration`、`interval`、`ease` 等属性均支持配置为数组。

````jsx
import { QueueAnim, Button } from 'antd';

const Test = React.createClass({
  getInitialState() {
    return {
      show: true,
    };
  },
  onClick() {
    this.setState({
      show: !this.state.show,
    });
  },
  render() {
    const list = this.state.show ? [
      <div className="demo-kp" key="a">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>,
      <div className="demo-listBox" key="b">
        <div className="demo-list">
          <div className="title"></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>,
    ] : null;
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content"
          key="demo"
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}
        >
          {list}
        </QueueAnim>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
