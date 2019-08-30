## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo 描述信息
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
```
:::

:::demo 描述信息
```html
<i class="el-icon-test"></i>
<i class="el-icon-success"></i>
<i class="el-icon-fail"></i>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>