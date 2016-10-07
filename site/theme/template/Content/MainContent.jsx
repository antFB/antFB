import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Menu } from 'antd';
import Article from './Article';
import ComponentDoc from './ComponentDoc';
import * as utils from '../utils';
import config from '../../';

const SubMenu = Menu.SubMenu;

function getActiveMenuItem(props) {
  return props.params.children || props.location.pathname;
}

function fileNameToPath(filename) {
  const snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').split('/');
  return snippets[snippets.length - 1];
}

function isNotTopLevel(level) {
  return level !== 'topLevel';
}

export default class MainContent extends React.Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { openKeys: [] };
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
    this.componentDidUpdate();
  }

  componentWillReceiveProps(nextProps) {
    const prevModule = this.currentModule;
    this.currentModule = location.pathname.split('/')[2] || 'components';
    if (this.currentModule === 'react') {
      this.currentModule = 'components';
    }
    if (prevModule !== this.currentModule) {
      const moduleData = this.getModuleData(nextProps);
      const shouldOpenKeys = Object.keys(utils.getMenuItems(
        moduleData, this.context.intl.locale
      ));
      this.setState({ openKeys: shouldOpenKeys });
    }
  }

  componentDidUpdate() {
    if (!location.hash) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        document.getElementById(decodeURI(location.hash.replace('#', ''))).scrollIntoView();
      }, 10);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleMenuOpenChange = (openKeys) => {
    this.setState({ openKeys });
  }

  generateMenuItem(isTop, item) {
    const locale = this.context.intl.locale;
    const key = fileNameToPath(item.filename);
    const text = isTop ?
            item.title[locale] || item.title : [
              <span key="english">{item.title}</span>,
              <span className="chinese" key="chinese">{item.subtitle}</span>,
            ];
    const disabled = item.disabled;
    const url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();
    const child = !item.link ?
      <Link to={/^components/.test(url) ? `${url}/` : url} disabled={disabled}>
        {text}
      </Link> :
      <a href={item.link} target="_blank" rel="noopener noreferrer" disabled={disabled}>
        {text}
      </a>;

    return (
      <Menu.Item key={key.toLowerCase()} disabled={disabled}>
        {child}
      </Menu.Item>
    );
  }

  generateSubMenuItems(obj) {
    const topLevel = (obj.topLevel || []).map(this.generateMenuItem.bind(this, true));
    const itemGroups = Object.keys(obj).filter(isNotTopLevel)
      .sort((a, b) => config.typeOrder[a] - config.typeOrder[b])
      .map((type, index) => {
        const groupItems = obj[type].sort((a, b) => {
          return a.title.charCodeAt(0) -
          b.title.charCodeAt(0);
        }).map(this.generateMenuItem.bind(this, false));
        return (
          <Menu.ItemGroup title={type} key={index}>
            {groupItems}
          </Menu.ItemGroup>
        );
      });
    return [...topLevel, ...itemGroups];
  }

  getModuleData(props) {
    const pathname = props.location.pathname;
    const moduleName = /^components/.test(pathname) ?
            'components' : pathname.split('/').slice(0, 2).join('/');
    const moduleData = moduleName === 'components' || moduleName === 'changelog' || moduleName === 'docs/react' ?
            [...props.picked.components, ...props.picked['docs/react'], ...props.picked.changelog] :
            props.picked[moduleName];
    const locale = this.context.intl.locale;
    const excludedSuffix = locale === 'zh-CN' ? 'en-US.md' : 'zh-CN.md';
    return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
  }

  getMenuItems() {
    const moduleData = this.getModuleData(this.props);
    const menuItems = utils.getMenuItems(
      moduleData, this.context.intl.locale
    );
    const topLevel = this.generateSubMenuItems(menuItems.topLevel);
    const subMenu = Object.keys(menuItems).filter(isNotTopLevel)
      .sort((a, b) => config.categoryOrder[a] - config.categoryOrder[b])
      .map((category) => {
        const subMenuItems = this.generateSubMenuItems(menuItems[category]);
        return (
          <SubMenu title={<h4>{category}</h4>} key={category}>
            {subMenuItems}
          </SubMenu>
        );
      });
    return [...topLevel, ...subMenu];
  }

  flattenMenu(menu) {
    if (menu.type === Menu.Item) {
      return menu;
    }

    if (Array.isArray(menu)) {
      return menu.reduce((acc, item) => acc.concat(this.flattenMenu(item)), []);
    }

    return this.flattenMenu(menu.props.children);
  }

  getFooterNav(menuItems, activeMenuItem) {
    const menuItemsList = this.flattenMenu(menuItems);
    let activeMenuItemIndex = -1;
    menuItemsList.forEach((menuItem, i) => {
      if (menuItem.key === activeMenuItem) {
        activeMenuItemIndex = i;
      }
    });
    const prev = menuItemsList[activeMenuItemIndex - 1];
    const next = menuItemsList[activeMenuItemIndex + 1];
    return { prev, next };
  }

  render() {
    const props = this.props;
    const activeMenuItem = getActiveMenuItem(props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getFooterNav(menuItems, activeMenuItem);
    const localizedPageData = props.localizedPageData;
    return (
      <div className="main-wrapper">
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Menu className="aside-container" mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[activeMenuItem]}
              onOpenChange={this.handleMenuOpenChange}
            >
              {menuItems}
            </Menu>
          </Col>
          <Col lg={20} md={18} sm={24} xs={24} className="main-container">
            {
              props.utils.get(props, 'pageData.demo') ?
                <ComponentDoc {...props} doc={localizedPageData} demos={props.demos} /> :
                <Article {...props} content={localizedPageData} />
            }
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 20, offset: 4 }}
            md={{ span: 18, offset: 6 }}
            sm={24} xs={24}
          >
            <section className="prev-next-nav">
              {
                prev ?
                  React.cloneElement(prev.props.children, { className: 'prev-page' }) :
                  null
              }
              {
                next ?
                  React.cloneElement(next.props.children, { className: 'next-page' }) :
                  null
              }
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}
