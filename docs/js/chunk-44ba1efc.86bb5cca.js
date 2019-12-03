(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ba1efc"],{"09cf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("介绍")]),n("p",[t._v("基于 Vue 的 UI 组件")])])}],c=n("2877"),s={},i=Object(c["a"])(s,o,r,!1,null,null,null);e["default"]=i.exports},"1bd2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("贡献")])])}],c=n("2877"),s={},i=Object(c["a"])(s,o,r,!1,null,null,null);e["default"]=i.exports},"1e97":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("Icon 图标")]),n("p",[t._v("提供了一套常用的图标集合，支持单色图标和多色图标。")]),n("h3",[t._v("使用方法")]),t._m(0),n("demo-block",[n("template",{slot:"source"},[n("x-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<x-icon name="m-attention"></x-icon>\n<x-icon name="sort"></x-icon>\n<x-icon name="upload"></x-icon>\n')])])])],2),n("h3",[t._v("props")]),t._m(1),n("h3",[t._v("图标集合")]),n("ul",{staticClass:"icon-list"},t._l(t.$icon,function(e){return n("li",{key:e},[n("span",[n("x-icon",{attrs:{name:e}}),n("span",{staticClass:"icon-name"},[t._v(t._s(e))])],1)])}),0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("使用"),n("code",[t._v("<x-icon></x-icon>")]),t._v("组件，指定图标对应的name属性，示例：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("name")]),n("td",[t._v("String")]),n("td",[t._v("图标的名称")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("String | Number")]),n("td",[t._v("图标的大小，传入number时单位默认是px")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("String")]),n("td",[t._v("图标的颜色，只对单色图标有效")])])])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var a={name:"component-doc",components:{"x-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-icon",{attrs:{name:"m-attention"}}),t._v(" "),n("x-icon",{attrs:{name:"sort"}}),t._v(" "),n("x-icon",{attrs:{name:"upload"}})],1)},e=[],n={};return i({render:t,staticRenderFns:e},n)}()}},l=a,u=n("2877"),p=Object(u["a"])(l,o,r,!1,null,null,null);e["default"]=p.exports},4067:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("Popper 容器")]),n("p",[t._v("用于select组件、dropdown组件等的包裹容器。")]),n("h3",[t._v("基础用法")]),t._m(0),n("demo-block",[n("template",{slot:"source"},[n("x-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <x-popper style="width: 300px;">\n\t\t<template v-slot:reference>\n\t\t\t下拉菜单\n\t\t</template>\n\t\t<template v-slot:default="props">\n\t\t\t<div class="demo-dropdown-content">\n\t\t\t\t下拉展示的内容\n\t\t\t</div>\n\t\t</template>\n\t</x-popper>\n</template>\n')])])])],2)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("使用"),n("code",[t._v("<x-popper></x-popper>")]),t._v("组件。")])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var a={name:"component-doc",components:{"x-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("x-popper",{staticStyle:{width:"300px"},scopedSlots:t._u([{key:"reference",fn:function(){return[t._v("\n\t\t\t下拉菜单\n\t\t")]},proxy:!0},{key:"default",fn:function(e){return[n("div",{staticClass:"demo-dropdown-content"},[t._v("\n\t\t\t\t下拉展示的内容\n\t\t\t")])]}}])})]],2)},e=[],n={};return i({render:t,staticRenderFns:e},n)}()}},l=a,u=n("2877"),p=Object(u["a"])(l,o,r,!1,null,null,null);e["default"]=p.exports},"454f":function(t,e,n){n("46a7");var o=n("584a").Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},"46a7":function(t,e,n){var o=n("63b6");o(o.S+o.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"62cd":function(t,e,n){var o={"./contribute.md":"1bd2","./icon.md":"1e97","./introduce.md":"09cf","./message.md":"771e","./popper.md":"4067","./start.md":"843f"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=c,t.exports=r,r.id="62cd"},"771e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("Message 消息提示")]),n("p",[t._v("常用于主动操作后的反馈提示。")]),n("h3",[t._v("基础用法")]),n("p",[t._v("从顶部出现，3 秒后自动消失。")]),n("demo-block",[n("div",[n("p",[t._v("XUI 注册了一个"),n("code",[t._v("$Message")]),t._v("方法用于调用，Message 可以接收一个字符串，它会被显示为正文内容。")])]),n("template",{slot:"source"},[n("x-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <button @click=\"open\">打开消息提示</button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$Message('这是一条消息提示');\n      }\n    }\n  }\n<\/script>\n")])])])],2),n("h3",[t._v("不同状态")]),n("p",[t._v("用来显示「成功、警告、消息、错误」类的操作反馈。")]),n("demo-block",[n("div",[n("p",[t._v("当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置"),n("code",[t._v("type")]),t._v("字段可以定义不同的状态，默认为"),n("code",[t._v("info")]),t._v("。此时正文内容以"),n("code",[t._v("content")]),t._v("的值传入。")])]),n("template",{slot:"source"},[n("x-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <button @click=\"open2\">成功</button>\n  <button @click=\"open3\">警告</button>\n  <button @click=\"open1\">消息</button>\n  <button @click=\"open4\">错误</button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$Message('这是一条消息提示');\n      },\n      open2() {\n        this.$Message({\n          content: '恭喜你，这是一条成功消息',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$Message({\n          content: '警告哦，这是一条警告消息',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$Message({\n\t\t\t\t\tcontent: '错了哦，这是一条错误消息',\n\t\t\t\t\ttype: 'error'\n\t\t\t\t});\n      }\n    }\n  }\n<\/script>\n")])])])],2),n("h3",[t._v("可关闭")]),n("p",[t._v("可以添加关闭按钮。")]),n("demo-block",[n("div",[n("p",[t._v("默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用"),n("code",[t._v("closable")]),t._v("字段。此外，Message 拥有可控的"),n("code",[t._v("duration")]),t._v("，设置"),n("code",[t._v("0")]),t._v("为不会被自动关闭，默认为 3000 毫秒。")])]),n("template",{slot:"source"},[n("x-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <button @click=\"open1\">消息</button>\n  <button @click=\"open2\">成功</button>\n  <button @click=\"open3\">警告</button>\n  <button @click=\"open4\">错误</button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$Message({\n          closable: true,\n          content: '这是一条消息提示'\n        });\n      },\n\n      open2() {\n        this.$Message({\n          closable: true,\n          content: '恭喜你，这是一条成功消息',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$Message({\n          closable: true,\n          content: '警告哦，这是一条警告消息',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$Message({\n          closable: true,\n          content: '错了哦，这是一条错误消息',\n          type: 'error'\n        });\n      }\n    }\n  }\n<\/script>\n")])])])],2),n("h3",[t._v("使用 HTML 片段")]),t._m(0),n("demo-block",[n("div",[n("p",[t._v("将"),n("code",[t._v("dangerouslyUseHTMLString")]),t._v("属性设置为 true，"),n("code",[t._v("content")]),t._v(" 就会被当作 HTML 片段处理。")])]),n("template",{slot:"source"},[n("x-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <button @click=\"openHTML\">使用 HTML 片段</button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openHTML() {\n        this.$Message({\n          dangerouslyUseHTMLString: true,\n          content: '<strong>这是 <i>HTML</i> 片段</strong>'\n        });\n      }\n    }\n  }\n<\/script>\n")])])])],2),n("h3",[t._v("Options")]),t._m(1),n("h3",[t._v("方法")]),t._m(2),t._m(3)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("content")]),t._v(" 属性支持传入 HTML 片段")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("content")]),n("td",[t._v("消息文字")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("type")]),n("td",[t._v("主题")]),n("td",[t._v("string")]),n("td",[t._v("success/warning/info/error")]),n("td",[t._v("info")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("自定义图标的类名，会覆盖 "),n("code",[t._v("type")])]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("dangerouslyUseHTMLString")]),n("td",[t._v("是否将 content 属性作为 HTML 片段处理")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("customClass")]),n("td",[t._v("自定义类名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("显示时间, 毫秒。设为 0 则不会自动关闭")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("3000")])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否显示关闭按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("调用 "),n("code",[t._v("this.$Message")]),t._v(" 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 "),n("code",[t._v("close")]),t._v(" 方法。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭当前的 Message")])])])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var a={name:"component-doc",components:{"x-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("button",{on:{click:t.open}},[t._v("打开消息提示")])]],2)},e=[],n={methods:{open:function(){this.$Message("这是一条消息提示")}}};return i({render:t,staticRenderFns:e},n)}(),"x-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("button",{on:{click:t.open2}},[t._v("成功")]),t._v(" "),n("button",{on:{click:t.open3}},[t._v("警告")]),t._v(" "),n("button",{on:{click:t.open1}},[t._v("消息")]),t._v(" "),n("button",{on:{click:t.open4}},[t._v("错误")])]],2)},e=[],n={methods:{open1:function(){this.$Message("这是一条消息提示")},open2:function(){this.$Message({content:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$Message({content:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$Message({content:"错了哦，这是一条错误消息",type:"error"})}}};return i({render:t,staticRenderFns:e},n)}(),"x-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("button",{on:{click:t.open1}},[t._v("消息")]),t._v(" "),n("button",{on:{click:t.open2}},[t._v("成功")]),t._v(" "),n("button",{on:{click:t.open3}},[t._v("警告")]),t._v(" "),n("button",{on:{click:t.open4}},[t._v("错误")])]],2)},e=[],n={methods:{open1:function(){this.$Message({closable:!0,content:"这是一条消息提示"})},open2:function(){this.$Message({closable:!0,content:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$Message({closable:!0,content:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$Message({closable:!0,content:"错了哦，这是一条错误消息",type:"error"})}}};return i({render:t,staticRenderFns:e},n)}(),"x-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("button",{on:{click:t.openHTML}},[t._v("使用 HTML 片段")])]],2)},e=[],n={methods:{openHTML:function(){this.$Message({dangerouslyUseHTMLString:!0,content:"<strong>这是 <i>HTML</i> 片段</strong>"})}}};return i({render:t,staticRenderFns:e},n)}()}},l=a,u=n("2877"),p=Object(u["a"])(l,o,r,!1,null,null,null);e["default"]=p.exports},"843f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content x-doc"},[n("h2",[t._v("快速上手")])])}],c=n("2877"),s={},i=Object(c["a"])(s,o,r,!1,null,null,null);e["default"]=i.exports},"85f2":function(t,e,n){t.exports=n("454f")},"8e6e":function(t,e,n){var o=n("5ca1"),r=n("990b"),c=n("6821"),s=n("11e9"),i=n("f1ae");o(o.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,o=c(t),a=s.f,l=r(o),u={},p=0;while(l.length>p)n=a(o,e=l[p++]),void 0!==n&&i(u,e,n);return u}})},"990b":function(t,e,n){var o=n("9093"),r=n("2621"),c=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=o.f(c(t)),n=r.f;return n?e.concat(n(t)):e}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("85f2"),r=n.n(o);function c(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},f1ae:function(t,e,n){"use strict";var o=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}}}]);