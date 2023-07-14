<template>
  <nav class="navbar bg-primary mb-4" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand">者也专栏</a>
      <div class="d-flex" v-if="!currentUser.ifLogin">
        <a href="#" class="btn btn-outline-light btn-sm me-2">登录</a>
        <a href="#" class="btn btn-outline-light btn-sm">注册</a>
      </div>
      <div v-else>
        <dropdown :username="currentUser.username">
          <dropdown-item disabled><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
        </dropdown>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface IUserType{
  ifLogin: boolean,
  username?: string,
}
export default defineComponent({
  components: { Dropdown, DropdownItem },
  props: {
    user: {
      type: Object as PropType<IUserType>,
      required: true
    }
  },
  setup (pros) {
    return {
      currentUser: pros.user
    }
  }
})
</script>
