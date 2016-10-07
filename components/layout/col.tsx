import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

export interface ColSize {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export interface ColProps {
  className?: string;
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  prefixCls?: string;
  style?: React.CSSProperties;
}

const Col: React.StatelessComponent<ColProps> = (props) => {
  const [{ span, order, offset, push, pull, className, children, prefixCls = 'ant-col' }, others] = splitObject(props,
    ['span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'prefixCls']);
  let sizeClassObj = {};
  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    let sizeProps: ColSize = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {};
    }

    delete others[size];

    sizeClassObj = assign({}, sizeClassObj, {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
    });
  });
  const classes = classNames(assign({}, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull,
    [className]: !!className,
  }, sizeClassObj));

  return <div {...others} className={classes}>{children}</div>;
};

Col.propTypes = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
};

export default Col;
