<template>
	<i v-if="!isMultiColor" :style="style" class="iconfont" :class="'x-icon-' + name"></i>
	<svg v-else :style="style" class="iconfont-m" aria-hidden="true">
		<use :xlink:href="'#x-icon-' + name" />
	</svg>
</template>

<script>
export default {
  name: "XIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: [String, Number],
    color: String
  },
  computed: {
    isMultiColor() {
      return this.name.startsWith("m-");
    },
    style() {
      let style = {};
      if (this.size !== undefined) {
        style['font-size'] = typeof this.size === 'number' ? `${this.size}px` : this.size;
      }
      if (!this.isMultiColor && this.color) {
        style.color = this.color;
      }
      return style;
    }
  }
};
</script>

<style>
</style>
