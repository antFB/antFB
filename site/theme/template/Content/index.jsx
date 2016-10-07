import React from 'react';
import Promise from 'bluebird';
import MainContent from './MainContent';

// locale copy from layout
const language = (typeof localStorage === 'undefined' || !localStorage.getItem('locale')) ?
        navigator.language : localStorage.getItem('locale');
const isZhCN = language === 'zh-CN';
const locale = isZhCN ? 'zh-CN' : 'en-US';

export function collect(nextProps, callback) {
  const pageData = nextProps.location.pathname === 'changelog' ?
          nextProps.data.CHANGELOG : nextProps.pageData;
  if (!pageData) {
    callback(404, nextProps);
    return;
  }

  const pageDataPromise = typeof pageData === 'function' ?
          pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const promises = [pageDataPromise];

  const pathname = nextProps.location.pathname;
  const demos = nextProps.utils.get(
    nextProps.data, [...pathname.split('/'), 'demo']
  );
  if (demos) {
    promises.push(demos());
  }
  Promise.all(promises)
    .then(list => callback(null, {
      ...nextProps,
      localizedPageData: list[0],
      demos: list[1],
    }));
}

export default (props) => {
  return <MainContent {...props} />;
};
