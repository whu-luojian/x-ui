## Icon 图标

提供了一套常用的图标集合，支持单色图标和多色图标。

### 使用方法

使用`<x-icon></x-icon>`组件，指定图标对应的name属性，示例：

:::demo
```html
<x-icon name="m-attention"></x-icon>
<x-icon name="sort"></x-icon>
<x-icon name="upload"></x-icon>
```
:::

### props
|属性|类型|说明|
|---|---|---|
name|String|图标的名称
size|String \| Number|图标的大小，传入number时单位默认是px
color|String|图标的颜色，只对单色图标有效

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <x-icon :name="name"></x-icon>
      <span class="icon-name">{{name}}</span>
    </span>
  </li>
</ul>