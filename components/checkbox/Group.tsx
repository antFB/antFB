import React from 'react';
import Checkbox from './index';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export interface CheckboxOptionType {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  /** 默认选中的选项 */
  defaultValue?: Array<string>;
  /** 指定选中的选项 */
  value?: Array<string>;
  /** 指定可选项 */
  options?: Array<CheckboxOptionType> | Array<string>;
  /** 变化时回调函数 */
  onChange?: (checkedValue: Array<string>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
}

export interface CheckboxGroupState {
  value: any;
}

export default class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
  static defaultProps = {
    options: [],
    onChange() {},
    prefixCls: 'ant-checkbox-group',
  };
  static propTypes = {
    defaultValue: React.PropTypes.array,
    value: React.PropTypes.array,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || [],
     };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }
  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  getOptions() {
    const { options } = this.props;
    // https://github.com/Microsoft/TypeScript/issues/7960
    return (options as Array<any>).map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        } as CheckboxOptionType;
      }
      return option;
    });
  }
  toggleOption = (option) => {
    const optionIndex = this.state.value.indexOf(option.value);
    const value = [...this.state.value];
    if (optionIndex === - 1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  }
  render() {
    const { prefixCls } = this.props;
    const options = this.getOptions();
    return (
      <div className={prefixCls}>
        {
          options.map(option =>
            <Checkbox disabled={'disabled' in option ? option.disabled : this.props.disabled}
              checked={this.state.value.indexOf(option.value) !== -1}
              onChange={() => this.toggleOption(option)}
              className={`${prefixCls}-item`} key={option.value}
            >
              {option.label}
            </Checkbox>
          )
        }
      </div>
    );
  }
}
