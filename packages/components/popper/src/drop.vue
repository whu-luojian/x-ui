<template>
  <div class="xui-popper-dropdown" :style="styles" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import Popper from 'popper.js';
import { transferIndex, transferIncrease } from '../../../utils/transfer-queue';
import { getStyle } from '../../../utils/assist';
import elementResizeDetectorMaker from 'element-resize-detector';
const erdUltraFast = elementResizeDetectorMaker({
  strategy: "scroll" // <- For ultra performance.
});

export default {
  name: 'Drop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    className: {
      type: String
    },
    transfer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      popper: null,
      width: '',
      popperStatus: false,
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.width) {
        style.minWidth = `${this.width}px`;
      }
      if (this.transfer) {
        style['z-index'] = 2000 + this.tIndex;
      }
      return style;
    }
  },
  methods: {
    handleGetIndex () {
      transferIncrease();
      return transferIndex;
    },
    update() {
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update();
          this.popperStatus = true;
        });
      } else {
        this.$nextTick(() => {
          this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false // 不开启3d变换
              },
              preventOverflow: {
                boundariesElement: 'window' // popper保持在窗口内
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          });
        });
        // 监测popper尺寸变化进行位置更新(reference尺寸变化和drop尺寸变化，比如多选下拉选择组件：多选会导致reference高度变化，搜索会导致选项变少，导致drop尺寸变化)
        erdUltraFast.listenTo(this.$parent.$refs.reference, () => {
          this.update();
        });
        erdUltraFast.listenTo(this.$el, () => {
          this.update();
        });
      }
      this.tIndex = this.handleGetIndex();
      this.width = parseInt(getStyle(this.$parent.$el, 'width'));
    },
    destroy() {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.destroy();
            this.popper = null;
          }
          this.popperStatus = false;
        }, 300);
      }
    },
    resetTransformOrigin() {
      if (!this.popper) {
        return;
      }

      let x_placement = this.popper.popper.getAttribute('x-placement');
      let placementStart = x_placement.split('-')[0];
      let placementEnd = x_placement.split('-')[1];
      const leftOrRight = x_placement === 'left' || x_placement === 'right';
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin = placementStart === 'bottom' || ( placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
      }
    }
  },
  created () {
    this.$on('on-update-popper', this.update);
    this.$on('on-destroy-popper', this.destroy);
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
    if (this.$parent.$refs.reference) {
      erdUltraFast.uninstall(this.$parent.$refs.reference);
    }
    if (this.$el) {
      erdUltraFast.uninstall(this.$el);
    }
  }
};
</script>

<style lang="scss">
.xui-popper-dropdown {
  overflow: auto;
  width: auto;
  min-width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
}
</style>
