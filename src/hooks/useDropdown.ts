import { onMounted, onUnmounted, Ref, ref } from 'vue'

function useDropdown(elementRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    window.addEventListener('click', handler)
  })
  onUnmounted(() => {
    window.removeEventListener('click', handler)
  })
  return isClickOutside
}
export default useDropdown
