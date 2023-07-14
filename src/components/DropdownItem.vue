<template>
  <li :class="{ 'dropdown-option': true, 'if-disabled': ifDisabled }">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    return {
      ifDisabled: props.disabled
    }
  }
})
</script>
<style>
.dropdown-option.if-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
