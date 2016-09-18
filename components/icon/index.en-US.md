---
category: Components
type: Basic
title: Icon
toc: false
---

Meaningful vector graphics.

## Icons naming convention

We provide semantic name for every icon, and naming rules are as follows:

- Scanning line icon has the similar name with its solid one，but it's distinguished by `-o`, for example, `question-circle`(a full circle) and `question-circle-o`(an empty circle);

- Naming sequence：`[icon's name]-[shape, optional]-[Scanning line or not]-[direction, optional]`.

## How To Use

Use tag <Icon /> to create an icon and set its type in the type prop, for example:

```html
<Icon type="link" />
```

Finally, it will be rendered as follow:

```html
<i class="anticon anticon-${type}"></i>
```

## Local deployment of icons font

By default, icon components uses [iconfont.cn](http://iconfont.cn), publicly available repository of a huge set of icons. In case you need to use a locally deployed version of the icon font, you can refer to [this example](https://github.com/antFB/antFB-init/tree/master/examples/local-iconfont)。

## List of icons

> Click the icon and copy the code。

### Directional Icons

```__react
import IconSet from 'site/theme/template/IconSet';
const icons1 = ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'circle-up', 'circle-down', 'circle-o-up', 'circle-o-down', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-up', 'caret-circle-down'];

ReactDOM.render(<IconSet className="icons" icons={icons1} key="icons1" />, mountNode);
```

### Suggested Icons

```__react
const icons2 = ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'];

ReactDOM.render(<IconSet className="icons" icons={icons2} key="icons2" />, mountNode);
```

### Other Icons

```__react
const icons3 = ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf','file-excel', 'file-jpg', 'file-ppt', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading', 'smile-circle', 'meh-circle', 'frown-circle', 'tags-o', 'tag-o', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customerservice', 'qrcode', 'scan', 'like', 'dislike', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o'];

ReactDOM.render(<IconSet className="icons" icons={icons3} key="icons3" />, mountNode);
```

<style>
.markdown .icons {
  width: 100%;
}
ul.anticons-list {
  margin: 40px 0;
  list-style: none;
  overflow: hidden;
}
ul.anticons-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #555;
  transition: all 0.2s ease;
  position: relative;
  margin: 3px 0;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 0 0 0;
}
ul.anticons-list li:hover {
  background-color: #eaf8fe;
}
ul.anticons-list li.copied:hover {
  color: rgba(255,255,255,0.2);
}
ul.anticons-list li:after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "Copied!";
  text-align: center;
  line-height: 110px;
  color: #2db7f5;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
}
ul.anticons-list li.copied:after {
  opacity: 1;
  top: -10px;
}
.anticon {
  font-size: 22px;
  margin: 12px 0 16px;
  transition: all .3s;
}
ul.anticons-list li:hover .anticon {
  transform: scale(1.4);
}
.anticon-class {
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: Consolas;
  white-space: nowrap;
}
</style>
