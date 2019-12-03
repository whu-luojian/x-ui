## Message 消息提示

常用于主动操作后的反馈提示。

### 基础用法

从顶部出现，3 秒后自动消失。

:::demo XUI 注册了一个`$Message`方法用于调用，Message 可以接收一个字符串，它会被显示为正文内容。

```html
<template>
  <button @click="open">打开消息提示</button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$Message('这是一条消息提示');
      }
    }
  }
</script>
```
:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`content`的值传入。
```html
<template>
  <button @click="open2">成功</button>
  <button @click="open3">警告</button>
  <button @click="open1">消息</button>
  <button @click="open4">错误</button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$Message('这是一条消息提示');
      },
      open2() {
        this.$Message({
          content: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$Message({
          content: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$Message({
					content: '错了哦，这是一条错误消息',
					type: 'error'
				});
      }
    }
  }
</script>
```
:::

### 可关闭

可以添加关闭按钮。

:::demo 默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`closable`字段。此外，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 3000 毫秒。
```html
<template>
  <button @click="open1">消息</button>
  <button @click="open2">成功</button>
  <button @click="open3">警告</button>
  <button @click="open4">错误</button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$Message({
          closable: true,
          content: '这是一条消息提示'
        });
      },

      open2() {
        this.$Message({
          closable: true,
          content: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$Message({
          closable: true,
          content: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$Message({
          closable: true,
          content: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
```
:::

### 使用 HTML 片段
`content` 属性支持传入 HTML 片段

:::demo 将`dangerouslyUseHTMLString`属性设置为 true，`content` 就会被当作 HTML 片段处理。

```html
<template>
  <button @click="openHTML">使用 HTML 片段</button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$Message({
          dangerouslyUseHTMLString: true,
          content: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>
```
:::

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 消息文字 | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| icon | 自定义图标的类名，会覆盖 `type` | string | — | — |
| dangerouslyUseHTMLString | 是否将 content 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| closable | 是否显示关闭按钮 | boolean | — | false |

### 方法
调用 `this.$Message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |
