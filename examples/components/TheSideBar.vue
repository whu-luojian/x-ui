<template>
	<div class="x-sidebar">
		<div class="nav-group" v-for="title in (Object.keys(navConfig))" :key="title">
			<p class="nav-title">{{title}}</p>
			<div class="nav-item" :class="$route.name === item.name ? 'active' : ''"
        v-for="item in navConfig[title]" :key="item.name">
				<router-link
					:to="{name: item.name}"
				>
          <div class="nav-item-link">{{item.desc}}</div>
        </router-link>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import config from "@/router/config";

@Component
export default class Nav extends Vue {
	private navConfig = config;
}
</script>

<style lang='scss'>
.x-sidebar {
	.nav-group {
		padding-top: 32px;
		.nav-title {
			padding-left: 32px;
			font-size: 16px;
			font-weight: bold;
		}
		.nav-item {
      font-size: 15px;
      cursor: pointer;
      &.active {
        background-color: lighten($text-highlight-color, 48%);
        a {
          color: $text-highlight-color;
        }
      }
      &:hover {
        a {
          color: $text-highlight-color
        }
      }
      .nav-item-link {
        padding: 8px 0 10px 48px;
      }
		}
	}
}
</style>
