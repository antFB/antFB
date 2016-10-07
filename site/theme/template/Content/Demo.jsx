import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Icon } from 'antd';
import EditButton from './EditButton';

export default class Demo extends React.Component {
  static contextTypes = {
    intl: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      codeExpand: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.codeExpand || this.props.expand) !== (nextState.codeExpand || nextProps.expand);
  }

  handleCodeExapnd = () => {
    this.setState({ codeExpand: !this.state.codeExpand });
  }

  render() {
    const props = this.props;
    const {
      meta,
      src,
      content,
      preview,
      highlightedCode,
      style,
      highlightedStyle,
      expand,
    } = props;

    const codeExpand = this.state.codeExpand || expand;
    const codeBoxClass = classNames({
      'code-box': true,
      expand: codeExpand,
    });

    const locale = this.context.intl.locale;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || content;
    const introChildren = props.utils
      .toReactComponent(['div'].concat(localizeIntro));

    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand,
    });
    return (
      <section className={codeBoxClass} id={meta.id}>
        <section className="code-box-demo">
          {
            meta.iframe ?
              <iframe src={src} /> :
              preview(React, ReactDOM)
          }
          {
            style ?
              <style dangerouslySetInnerHTML={{ __html: style }} /> :
              null
          }
        </section>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`}>
              {localizedTitle}
            </a>
            <EditButton title={<FormattedMessage id="app.content.edit-page" />} filename={meta.filename} />
          </div>
          {introChildren}
          <Icon type="down-circle-o" title="Show Code" className="collapse" onClick={this.handleCodeExapnd} />
        </section>
        <section className={highlightClass}
          key="code"
        >
          <div className="highlight">
            {props.utils.toReactComponent(highlightedCode)}
          </div>
          {
            highlightedStyle ?
              <div key="style" className="highlight">
                <pre>
                  <code className="css" dangerouslySetInnerHTML={{
                    __html: highlightedStyle,
                  }} />
                </pre>
              </div> :
              null
          }
        </section>
      </section>
    );
  }
}
