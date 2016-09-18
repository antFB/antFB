---
order: 11
title:
  zh-CN: 表单校验
  en-US: Basic validate
---

## zh-CN

基本的表单校验例子。

## en-US

Basic validation for form.

````jsx
import { Button, Form, Input } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

let BasicDemo = React.createClass({
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'JasonWood') {
          callback([new Error('Sorry, the user name is already in use.')]);
        } else {
          callback();
        }
      }, 800);
    }
  },

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  },

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('passwd')) {
      callback('The two passwords you enter is inconsistent!');
    } else {
      callback();
    }
  },

  render() {
    const { getFieldDecorator, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="User name"
          hasFeedback
          help={isFieldValidating('name') ? 'validating...' : (getFieldError('name') || []).join(', ')}
        >
          {getFieldDecorator('name', {
            rules: [
              { required: true, min: 5, message: 'User name for at least 5 characters' },
              { validator: this.userExists },
            ],
          })(
            <Input placeholder="Real-tiem validation, try to input JasonWood" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Email"
          hasFeedback
        >
          {getFieldDecorator('email', {
            validate: [{
              rules: [
                { required: true },
              ],
              trigger: 'onBlur',
            }, {
              rules: [
                { type: 'email', message: 'Please input the correct email' },
              ],
              trigger: ['onBlur', 'onChange'],
            }],
          })(
            <Input type="email" placeholder="This control uses onBlur and onChange" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('passwd', {
            rules: [
              { required: true, whitespace: true, message: 'Please enter your password' },
              { validator: this.checkPass },
            ],
          })(
            <Input type="password" autoComplete="off"
              onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Confirm password"
          hasFeedback
        >
          {getFieldDecorator('rePasswd', {
            rules: [{
              required: true,
              whitespace: true,
              message: 'Please confirm your password',
            }, {
              validator: this.checkPass2,
            }],
          })(
            <Input type="password" autoComplete="off" placeholder="Two passwords that you enter must be consistent"
              onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="remark"
        >
          {getFieldDecorator('textarea', {
            rules: [
              { required: true, message: 'Really not supposed to write something?' },
            ],
          })(
            <Input type="textarea" placeholder="Please write something" id="textarea" name="textarea" />
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>OK</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  },
});

BasicDemo = createForm()(BasicDemo);

ReactDOM.render(<BasicDemo />, mountNode);
````
