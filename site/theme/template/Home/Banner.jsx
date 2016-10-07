import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner() {
  return (
    <section id="banner">
      <ScrollElement scrollName="banner" className="page">
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300}>
          <h2 key="h2">ANT <p>FABLE</p></h2>
          <p key="content"><FormattedMessage id="app.home.slogan" /></p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <Link to="/docs/spec/introduce">
              <FormattedMessage id="app.home.introduce" />
            </Link>
            <Link to="/docs/react/introduce">
              <FormattedMessage id="app.home.start" />
            </Link>
          </div>
          <GitHubButton key="github-button" type="stargazers"
            namespace="ant-design" repo="ant-design"
          />
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
