## Popper 容器

用于select组件、dropdown组件等的包裹容器。

### 基础用法

使用`<x-popper></x-popper>`组件。

:::demo

```html
<template>
  <x-popper style="width: 300px;">
		<template v-slot:reference>
			下拉菜单
		</template>
		<template v-slot:default="props">
			<div class="demo-dropdown-content">
				下拉展示的内容
			</div>
		</template>
	</x-popper>
</template>
```
:::