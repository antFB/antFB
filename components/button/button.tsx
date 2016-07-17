import * as React from 'react';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
                              child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}

type ButtonType = 'primary' | 'ghost' | 'dashed'
type ButtonShape = 'circle' | 'circle-outline'
type ButtonSize = 'small' | 'large'

interface ButtonProps {
  type?: ButtonType;
  htmlType?: string;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  onClick?: React.FormEventHandler;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
}

export default class Button extends React.Component<ButtonProps, any> {
  static Group: any;

  static defaultProps = {
    prefixCls: 'ant-btn',
    onClick() {},
    loading: false,
  };

  static propTypes = {
    type: React.PropTypes.string,
    shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
    size: React.PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: React.PropTypes.func,
    loading: React.PropTypes.bool,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
  };

  timeout: any;
  clickedTimeout: any;

  componentWillUnmount() {
    if (this.clickedTimeout) {
      clearTimeout(this.clickedTimeout);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  clearButton = (button) => {
    button.className = button.className.replace(` ${this.props.prefixCls}-clicked`, '');
  }

  handleClick = (e) => {
    // Add click effect
    const buttonNode = findDOMNode(this);
    this.clearButton(buttonNode);
    this.clickedTimeout = setTimeout(() => buttonNode.className += ` ${this.props.prefixCls}-clicked`, 10);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.clearButton(buttonNode), 500);

    this.props.onClick(e);
  }

  // Handle auto focus when click button in Chrome
  handleMouseUp = (e) => {
    (findDOMNode(this) as HTMLElement).blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  render() {
    const props = this.props;
    const [{ type, shape, size, className, htmlType, children, icon, loading, prefixCls }, others] = splitObject(props,
      ['type', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'loading', 'prefixCls']);

    // large => lg
    // small => sm
    const sizeCls = ({
      large: 'lg',
      small: 'sm',
    })[size] || '';

    const classes = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && icon,
      [`${prefixCls}-loading`]: loading,
      [className]: className,
    });

    const iconType = loading ? 'loading' : icon;

    const kids = React.Children.map(children, insertSpace);

    return (
      <button {...others}
        type={htmlType || 'button'}
        className={classes}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
      >
        {iconType ? <Icon type={iconType} /> : null}{kids}
      </button>
    );
  }
}
