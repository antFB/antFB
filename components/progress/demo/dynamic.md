---
order: 4
title: 动态展示
---

会动的进度条才是好进度条。

````jsx
import { Progress, Button } from 'antd';
const ButtonGroup = Button.Group;

const MyProgress = React.createClass({
  getInitialState() {
    return {
      percent: 0,
    };
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  },
  decline() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  },
  render() {
    return (
      <div>
        <Progress percent={this.state.percent} />
        <ButtonGroup>
          <Button type="ghost" onClick={this.decline} icon="minus" />
          <Button type="ghost" onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  },
});

ReactDOM.render(<MyProgress />, mountNode);
````
