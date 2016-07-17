---
order: 2
title: RadioGroup 垂直
---

垂直的 RadioGroup，配合更多输入框选项。

````jsx
import { Radio, Input } from 'antd';
const RadioGroup = Radio.Group;

const App = React.createClass({
  getInitialState() {
    return {
      value: 1,
    };
  },
  onChange(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  },
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} key="a" value={1}>Option A</Radio>
        <Radio style={radioStyle} key="b" value={2}>Option B</Radio>
        <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
        <Radio style={radioStyle} key="d" value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </RadioGroup>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
