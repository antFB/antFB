---
category: Components
type: Navigation
title: Pagination
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

## When to use

- When it will take a long time to load/render all items.
- If you want to browse the data by switching in the pages.

## API

```html
<Pagination onChange={onChange} total={50} />
```

Property | Description | Type | Default
-----|-----|-----|------
current | current page number | Number | -
defaultCurrent | default current page number | Number | 1
total | total number of data | Number | 0
defaultPageSize | default number of data per page | Number | 10
pageSize | number of data per page | Number | -
onChange | a callback function, can be executed when the page number is changing, and it takes the resulting page number as an argument | Function | noop
showSizeChanger | determine whether `pageSize` can be changed | Boolean | false
pageSizeOptions | specify the sizeChanger selections | Array | ['10', '20', '30', '40']
onShowSizeChange | a callback function, can be executed when `pageSize` is changing | Function | noop
showQuickJumper | determine whether you can jump to a page directly | Boolean | false
size | specify the size of `Pagination`, can be set to `small` | String | ""
simple | whether to use simple mode | Object | -
showTotal | to custom the total number display | Function | -
