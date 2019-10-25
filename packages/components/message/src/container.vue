<template>
  <div class="xui-message" :style="wrapStyles">
    <transition-group name="move-up" appear>
      <div
        class="xui-message-notice"
        v-for="message in messages"
        :key="message.name"
        >
        <Message
          v-bind="message">
        </Message>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Message from './message.vue';

export default {
  components: {
    Message
  },
  props: {
    styles: {
      type: Object,
      default: function() {
        return {
          top: '65px',
          left: '50%'
        };
      }
    }
  },
  data() {
    return {
      messages: []
    };
  },
  computed: {
    wrapStyles() {
      let styles = Object.assign({}, this.styles);
      return styles;
    }
  },
  methods: {
    add(message) {
      this.messages.push(message);
    },
    close(name) {
      const messages = this.messages;
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name) {
          this.messages.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>

<style>

</style>
