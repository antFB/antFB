---
order: 1
title:
  zh-CN: 平行排列
  en-US: Inline form
---

## zh-CN

行内排列，常用于登录界面。

## en-US

Inline form is often used for login.

````jsx
import { Form, Input, Button, Checkbox } from 'antFB';
const FormItem = Form.Item;

let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('Received values of form:', this.props.form.getFieldsValue());
  },

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
          label="Account"
        >
          {getFieldDecorator('userName')(
            <Input placeholder="Please input the account" />
          )}
        </FormItem>
        <FormItem
          label="Password"
        >
          {getFieldDecorator('password')(
            <Input type="password" placeholder="Please input the password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('agreement')(
            <Checkbox>Remember me</Checkbox>
          )}
        </FormItem>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    );
  },
});

Demo = Form.create()(Demo);

ReactDOM.render(<Demo />, mountNode);
````
