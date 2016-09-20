--
order: 3
title: Interface
---

antFB use fetch-ie8 and fetch-jsonp to invoke remote interface。


<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## feature

- support multi data source, desided by parameter fbMode：

<table style='width:100%'>
		<tbody>
			<tr>
				<th>value</th><th>function</th>
			</tr>	
			<tr>
				<td>5</td><td>publish envirment（just request remote server）</td>
			</tr>
			<tr>	
				<td>9</td><td>publish envirment（request remote server first,then local.）</td>
			</tr>
			<tr>
				<td>6</td><td>test envirment（just request remote test server）</td>
			</tr>
			<tr>
				<td>10</td><td>test envirment（request remote test server first,then local.）</td>
			</tr>
			<tr>
				<td>16</td><td>local static file (just request local static file）</td>
			</tr>	
		</tbody>
</table>
	
- support json and jsonp
	json example：xFetch({name:'interfaceName'});
	jsonp example：xFetch({name:'interfaceName',dataType:'jsonp'});

- support ie8+
  

## xFetch config api

<table style='width:100%'>
		<tbody>
			<tr>
				<th>property</th><th>default</th><th>function</th>
			</tr>	
			<tr>
				<td>name</td><td>undefined</td><td>interface name，url and name can't be undefined at same time</td>
			</tr>
			<tr>	
				<td>url</td><td>undefined</td><td>interface url</td>
			</tr>
			<tr>
				<td>dataType</td><td>'json'</td><td>interface data type:'text','json','jsonp'</td>
			</tr>
			<tr>
				<td>method</td><td>'get'</td><td>request method，'get','post'</td>
			</tr>
			<tr>
				<td>body</td><td>undefined</td><td>request body,when method is get，body will be put at end of url中；当method为post时，在请求体body中发出.</td>
			</tr>
			<tr>
				<td>head</td><td>undefined</td><td>request head</td>
			</tr>	
			<tr>
				<td>nameSuffix</td><td>''</td><td>static file suffix after file name, this is for static file</td>
			</tr>	
			<tr>
				<td>jsonpCallback</td><td>'jsonpcallback'</td><td>jsonp callback function argument name</td>
			</tr>	
			<tr>
				<td>timeout</td><td>5000</td><td>jsonp time out</td>
			</tr>	
		</tbody>
</table>


## 示例

```jsx
//get json
import xFetch from './xFetch';
xFetch({name:'todos'}).then(json=>{console.log('data',json)});
```

```jsx
//get json by jsonp
import xFetch from './xFetch';
xFetch({name:'todos',dataType:'jsonp'}).then(json=>{console.log('data',json)});
```

```jsx
//with parameters
import xFetch from './xFetch';
xFetch({name:'todos',dataType:'jsonp',body:{arg1:'arg1Value'}}).then(json=>{console.log('data',json)});
```
```jsx
//in post way
import xFetch from './xFetch';
xFetch({name:'todos',dataType:'jsonp',body:{arg1:'arg1Value'},method:'post'}).then(json=>{console.log('data',json)});
```