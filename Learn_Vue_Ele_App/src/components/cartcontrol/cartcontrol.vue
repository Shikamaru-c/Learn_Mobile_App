<template>
  <div class="cartcontrol">
    <transition name="move-rotate">
    <div class="cart-decrease icon-remove_circle_outline"
      v-show="food.count > 0"
      @click.stop.prevent="decreaseCart"></div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('add', event.target)
    },
    decreaseCart () {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="scss">
  .cartcontrol {
    font-size: 0;
    .cart-decrease {
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      // 字体没导进来 测试用
      width: 24px;
      height: 24px;
      background-color: rgb(0, 160, 220);
      &.move-rotate-enter-active, &.move-rotate-leave-active {
        transition: all .4s linear;
      }
      &.move-rotate-enter, &.move-rotate-leave-active {
        transform: translate3d(24px, 0, 0) rotate(180deg);
        opacity: 0;
      }
    }
    .cart-count {
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 24px;
      color: rgb(147, 153, 159);
    }
    .cart-add{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      // 字体没导进来 测试用
      width: 24px;
      height: 24px;
      background-color: rgb(0, 160, 220);
    }
  }
</style>


