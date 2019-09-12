import Vue from 'vue';

declare class MessageParam {
  type: string;
  content: string;
  duration: number;
}

declare interface Message {
  (MessageParam: MessageParam): void;
}

declare module "vue/types/vue" {
  interface Vue {
    $Message: Message;
  }
}
