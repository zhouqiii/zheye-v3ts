<template>
  <div class="form">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱1</label>
      <input
        type="email"
        class="form-control"
        :class="{'is-invalid': info.ifError}"
        id="validationServer03"
        aria-describedby="validationServer03Feedback"
        v-model="info.content"
        @blur="validateEmail"
      >
      <div id="validationServer03Feedback" class="invalid-feedback" v-if="info.ifError">{{info.message}}</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <!--
      1.rules封装实现问题
      2.理解vue3的v-model双向绑定是怎么实现的
      3.$attrs的用法,搭配inheritAttrs: false禁用属性穿透到子组件根元素问题
    -->
    <form-item
      v-model="emailVal"
      :rules="emailRules"
      placeholder="请输入邮箱地址"
      type="text"
    ></form-item>
    <form-item
      v-model="passVal"
      :rules="passRules"
      placeholder="请输入密码"
      type="password"
    ></form-item>
    <h1>{{emailVal}}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import FormItem, { IRule } from './FormItem.vue'

export interface IInput{
  content:string,
  ifError: boolean,
  message?: string,
}
const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
export default defineComponent({
  components: { FormItem },
  setup() {
    const info:IInput = reactive({
      content: '',
      ifError: false,
      message: ''
    })
    const validateEmail = () => {
      if (info.content.trim() === '') {
        info.ifError = true
        info.message = '邮箱不能为空'
      } else if (!emailReg.test(info.content)) {
        info.ifError = true
        info.message = '邮箱格式错误'
      } else {
        info.ifError = false
      }
    }
    const emailVal = ref('')
    const passVal = ref('')
    const emailRules: IRule[] = [
      { valid: 'require', message: '不能为空' },
      { valid: 'email', message: '邮件地址格式不正确' }
    ]
    const passRules: IRule[] = [
      { valid: 'require', message: '不能为空' }
    ]
    return {
      info,
      emailVal,
      passVal,
      emailRules,
      passRules,
      validateEmail
    }
  }
})
</script>
<style scoped>
.form{
  text-align: left;
}
</style>
