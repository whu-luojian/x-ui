<template>
  <div class="xui-popper"
    v-click-outside.capture="onClickOutside"
    v-click-outside:mousedown.capture="onClickOutside"
    v-click-outside:touchstart.capture="onClickOutside"
  >
    <div ref="reference" @click="handleReferenceClick" class="xui-popper-reference">
      <slot name="reference">
      </slot>
    </div>
    <transition name="transition-drop">
      <Drop
        ref="popperdown"
        v-show="dropVisible"
        :data-transfer="transfer"
        :transfer="transfer"
        v-transfer-dom
      >
        <slot :hide="hide">
        </slot>
      </Drop>
    </transition>
  </div>
</template>

<script>
import Drop from './drop.vue';
import Emitter from '../../../mixins/emitter';
import TransferDom from '../../../directives/transfer-dom';
import { directive as clickOutside } from 'v-click-outside-x';
export default {
  name: "XPopper",
  mixins: [ Emitter ],
  directives: {
    TransferDom,
    clickOutside
  },
  components: {
    Drop
  },
  props: {
    // 是否添加到body
    transfer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dropVisible: false
    };
  },
  methods: {
    handleReferenceClick() {
      this.toggleMenu(!this.dropVisible);
    },
    toggleMenu(visible) {
      this.dropVisible = visible;
      if (this.dropVisible) {
        this.broadcast('Drop', 'on-update-popper');
        this.$emit('show');
      } else {
        this.broadcast('Drop', 'on-destroy-popper');
        this.$emit('hide');
      }
    },
    hide() {
      this.toggleMenu(false);
    },
    show() {
      this.toggleMenu(true);
    },
    update() {
      this.broadcast('Drop', 'on-update-popper');
    },
    onClickOutside() {
      if (this.dropVisible) {
        if (this.transfer) {
          const { $el } = this.$refs.popperdown;
          if ($el === event.target || $el.contains(event.target)) {
            return;
          }
        }
        event.preventDefault();
        this.toggleMenu(false);
      }
    }
  }
};
</script>

<style lang="scss">
.xui-popper {
  position: relative;
  .xui-popper-reference {
    cursor: pointer;
  }
}
</style>
