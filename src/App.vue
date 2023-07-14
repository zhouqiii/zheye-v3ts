<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="columnData"></column-list>
    <form-login></form-login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' // class = 'container'的container布局
import ColumnList, { IColumnType } from './components/ColumnList.vue'
import GlobalHeader, { IUserType } from './components/GlobalHeader.vue'
import FormLogin from './components/Form.vue'

const columnDataMock: IColumnType[] = [
  {
    id: 1,
    title: '这是专栏1的标题',
    description: '这是专栏1的描述这是专栏1的描述这是专栏1的描述这是专栏1的描述',
    awater: 'https://himg.bdimg.com/sys/portrait/item/public.1.264075d9.PwVnOrUFpoVfSiXwjp33Rw.jpg'
  },
  {
    id: 2,
    title: '这是专栏2的标题',
    description: '这是专栏2的描述',
    awater: 'https://himg.bdimg.com/sys/portrait/item/public.1.264075d9.PwVnOrUFpoVfSiXwjp33Rw.jpg'
  },
  {
    id: 3,
    title: '这是专栏3的标题',
    description: '这是专栏3的描述'
    // awater: 'https://himg.bdimg.com/sys/portrait/item/public.1.264075d9.PwVnOrUFpoVfSiXwjp33Rw.jpg'
  },
  {
    id: 4,
    title: '这是专栏34的标题',
    description: '这是专栏4的这是专栏4的描述这是专栏4的描述这是专栏4的描述这是专栏4的描述这是专栏4的描述这是专栏4的描述描述',
    awater: 'https://himg.bdimg.com/sys/portrait/item/public.1.264075d9.PwVnOrUFpoVfSiXwjp33Rw.jpg'
  }
]
const currentUserMock: IUserType = {
  ifLogin: true,
  username: 'zqiii'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    FormLogin
  },
  setup () {
    return {
      columnData: columnDataMock,
      currentUser: currentUserMock
    }
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
