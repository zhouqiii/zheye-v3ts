<template>
  <div class="mb-3 form-item">
    <label class="form-label">邮箱2</label>
    <input
      class="form-control"
      :class="{'is-invalid': info.ifError}"
      :value="info.content"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    <div class="invalid-feedback" v-if="info.ifError">{{info.message}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

export interface IRule{
  valid: 'require' | 'email' | 'number', // 这里还可以扩展
  message: string
}
interface IInput{
  content:string,
  ifError: boolean,
  message?: string,
}
const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
const numberReg = /[^0-9]/
export default defineComponent({
  props: {
    rules: Array as PropType<IRule[]>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs)
    const info: IInput = reactive({
      content: props.modelValue || '',
      ifError: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const target = (e.target as HTMLInputElement).value
      info.content = target
      context.emit('update:modelValue', target)
    }
    const validateInput = () => {
      if (props.rules) {
        const pause = props.rules.every((item) => {
          info.message = item.message
          let flag = true
          switch (item.valid) {
            case 'require':
              flag = info.content.trim() !== ''
              break
            case 'email':
              flag = emailReg.test(info.content)
              break
            case 'number':
              flag = numberReg.test(info.content)
              break
            default:
              break
          }
          return flag
        })
        info.ifError = !pause
      }
    }
    return {
      info,
      updateValue,
      validateInput
    }
  }
})
</script>
<style scoped>
.form-item{
  text-align: left;
}
</style>
