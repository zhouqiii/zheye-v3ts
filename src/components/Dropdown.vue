<template>
  <div class="dropdown" data-bs-theme="light" ref="dropRef">
    <button
      class="btn btn-outline-light dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="changeDropItem"
    >
      你好,{{name}}
    </button>
    <ul class="dropdown-menu py-0" :style="{display: 'block'}" v-if="ifOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useDropdown from '../hooks/useDropdown'
export default defineComponent({
  props: {
    username: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const ifOpen = ref(false)
    const changeDropItem = () => {
      ifOpen.value = !ifOpen.value
    }
    const dropRef = ref<null | HTMLElement>(null)
    // const handler = (e: MouseEvent) => {
    //   if (dropRef.value) {
    //     if (!dropRef.value.contains(e.target as HTMLElement) && ifOpen.value === true) {
    //       ifOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   window.addEventListener('click', handler)
    // })
    // onUnmounted(() => {
    //   window.removeEventListener('click', handler)
    // })
    const isClickOutside = useDropdown(dropRef)
    watch(isClickOutside, (val) => {
      if (ifOpen.value === true && !val) {
        ifOpen.value = false
      }
    })
    return {
      name: props.username,
      ifOpen,
      dropRef,
      changeDropItem
    }
  }
})
</script>
