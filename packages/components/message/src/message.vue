<template>
  <!-- <transition :name="transitionName" appear @enter="handleEnter" @leave="handleLeave"> -->
    <!-- <div class="xui-message-notice"> -->
      <div
        :class="[
          'xui-message-notice-content',
          `xui-message-${type}`,
          closable ? 'xui-message-notice-closable' : '',
          customClass
        ]"
        >
        <x-icon :name="iconName"></x-icon>
        <span v-if="!dangerouslyUseHTMLString" class="xui-message-notice-content-text">{{content}}</span>
        <span v-else v-html="content" class="xui-message-notice-content-text"></span>
        <a class="xui-message-notice-content-close" @click="close">
          <x-icon v-if="closable" name="close"></x-icon>
        </a>
      </div>
    <!-- </div> -->
  <!-- </transition> -->
</template>

<script>
import XIcon from '../../icon';

const iconMap = {
  info: 'info-circle-fill',
  success: 'check-circle-fill',
  warning: 'info-circle-fill',
  error: 'close-circle-fill'
};

export default {
  components: {
    XIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 3
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    customClass: {
      type: String
    },
    transitionName: {
      type: String,
      default: 'move-up'
    }
  },
  computed: {
    iconName() {
      if (this.icon) {
        return this.icon;
      } else {
        return iconMap[this.type];
      }
    }
  },
  mounted() {
    this.clearCloseTimer();
    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }
  },
  methods: {
    handleEnter (el) {
      // el.style.height = el.scrollHeight + 'px';
    },
    handleLeave (el) {
      // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
      // if (document.getElementsByClassName('xui-message-notice').length !== 1) {
      //   el.style.height = 0;
      //   el.style.paddingTop = 0;
      //   el.style.paddingBottom = 0;
      // }
    },
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    close() {
      this.clearCloseTimer();
      this.$parent.$parent.close(this.name);
    }
  }
};
</script>

<style>

</style>
