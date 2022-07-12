# Loading 组件
## 基本用法
```html
<Loading></Loading>
```
## 形式 form
```html
<Loading form="form1">form1</Loading>
<Loading form="form2">form2</Loading>
```
## 类型 type
```html
<Loading type="success">success</Loading>
<Loading type="primary">primary</Loading>
<Loading type="warning">warning</Loading>
<Loading type="danger">danger</Loading>
<Loading type="default">default</Loading>
```

## 自定义颜色 color
```html
<Loading color="#000">#000</Loading>
```
## 大小 size
```html
<Loading type="success" size="large">large</Loading>
<Loading type="success" size="normal">normal</Loading>
<Loading type="success" size="small">small</Loading>
<Loading type="success" size="mini">mini</Loading>
```

## API
#### props
|  参数    |    说明  |   类型   | 默认值  |
| ---- | ---- | ---- | ---- |
| form | 形式 | string | `form1` |
| type | 颜色类型 | string | `default` |
| size | 大小 | string | `normal` |
| color | 自定义颜色 | string |  |