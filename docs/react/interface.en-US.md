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

## 特性

- 支持多种数据源，由fbMode决定，可选值如下：
	<table style='width:100%'>
		<tbody>
			<tr>
				<th>值</th><th>功能</th>
			</tr>	
			<tr>
				<td>5</td><td>发布环境（只请求远程发布机）</td>
			</tr>
			<tr>	
				<td>9</td><td>发布环境（先远程发布机，失败后请求本地数据）</td>
			</tr>
			<tr>
				<td>6</td><td>联调环境（只请求远程联调机）</td>
			</tr>
			<tr>
				<td>10</td><td>联调环境（先远程联调机，失败后请求本地数据）</td>
			</tr>
			<tr>
				<td>16</td><td>本地环境 (只请求本地静态数据）</td>
			</tr>	
		</tbody>
	</table>
	
- 支持json和jsonp
	调用json接口：xFetch({name:'interfaceName'});
	调用jsonp接口：xFetch({name:'interfaceName',dataType:'jsonp'});

- 支持ie8+
  

## xFetch参数清单
	<table style='width:100%'>
		<tbody>
			<tr>
				<th>参数名</th><th>默认值</th><th>说明</th>
			</tr>	
			<tr>
				<td>name</td><td>undefined</td><td>请求的接口名，url和name参数不能同时为空，name不为空时，xFetch动态读取interfaces.js中定义的同名接口</td>
			</tr>
			<tr>	
				<td>url</td><td>undefined</td><td>请求地址，url和name参数不能同时为空</td>
			</tr>
			<tr>
				<td>dataType</td><td>'json'</td><td>接口返回值的数据格式:'text','json','jsonp'</td>
			</tr>
			<tr>
				<td>method</td><td>'get'</td><td>请求方法，'get','post'</td>
			</tr>
			<tr>
				<td>body</td><td>undefined</td><td>请求体,当method为get时，将拼接在url中；当method为post时，在请求体body中发出.</td>
			</tr>
			<tr>
				<td>head</td><td>undefined</td><td>请求头配置</td>
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