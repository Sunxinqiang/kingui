# Button 组件
## 基本用法
```html
<Button>按钮</Button>
```
## 按钮类型 type
```html
<Button type="success">success</Button>
<Button type="primary">primary</Button>
<Button type="warning">warning</Button>
<Button type="danger">danger</Button>
<Button type="default">default</Button>
```

## 延展 fluid
```html
<Button type="success" fluid>success</Button>
```
## 边框按钮 outline
```html
<Button type="success" outline>success</Button>
```
## 禁用 disabled
```html
<Button type="success" disabled>success</Button>
```
## 大小 size
```html
<Button type="success" size="large">large</Button>
<Button type="success" size="normal">normal</Button>
<Button type="success" size="small">small</Button>
<Button type="success" size="mini">mini</Button>
```

## API
#### props
|  参数    |    说明  |   类型   | 默认值  |
| ---- | ---- | ---- | ---- |
| type | 图标颜色类型 | string | `default` |
| size | 大小 | string | `normal` |
| fluid | 是否延展 | boolean | `false` |
| outline | 是否为边框 | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |