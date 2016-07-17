import * as React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import omit from 'object.omit';

export default class Form extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-form',
    onSubmit(e) {
      e.preventDefault();
    },
  };

  static propTypes = {
    prefixCls: React.PropTypes.string,
    horizontal: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    form: React.PropTypes.object,
    children: React.PropTypes.any,
    onSubmit: React.PropTypes.func,
  };

  static childContextTypes = {
    form: React.PropTypes.object,
  };

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }

  getChildContext() {
    return {
      form: this.props.form,
    };
  }

  render() {
    const { prefixCls, className, inline, horizontal } = this.props;
    const formClassName = classNames({
      [`${prefixCls}-horizontal`]: horizontal,
      [`${prefixCls}-inline`]: inline,
      [className]: !!className,
    });

    const formProps = omit(this.props, [
      'prefixCls',
      'className',
      'inline',
      'horizontal',
      'form',
    ]);

    return <form {...formProps} className={formClassName} />;
  }
}
