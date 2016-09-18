import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page2() {
  return (
    <ScrollOverPack scrollName="page2"
      className="content-wrapper page" playScale={1} replay
      hideProps={{ image: { reverse: true } }}
    >
      <QueueAnim className="text-wrapper left-text" delay={300} key="text"
        duration={550} type="bottom" leaveReverse
      >
        <h2 key="h2"><FormattedMessage id="app.home.design-pattern" /></h2>
        <p key="p" style={{ maxWidth: 260 }}><FormattedMessage id="app.home.pattern" /></p>
        <div key="button">
          <Link to="/docs/pattern/navigation">
            <Button type="primary" size="large">
              <FormattedMessage id="app.home.learn-more" />
              <Icon type="right" />
            </Button>
          </Link>
        </div>
      </QueueAnim>
      <TweenOne key="image" className="image2 image-wrapper"
        animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
        style={{ transform: 'translateX(100px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
