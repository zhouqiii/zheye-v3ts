<template>
  <div class="row">
    <div v-for="item in columnList" :key="item.id" class="col-4 mb-3">
      <div class="card text-center py-3 h-100 shadow">
        <div class="card-body">
          <img :src="item.awater" class="card-img-top rounded-circle h-25 w-25 mx-auto mb-3"><!--鼠标item.的时候会提示对应的属性这就是vetur配置experimental.templateInterpolationService的作用-->
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text text-start">{{item.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface IColumnType{
  id: number,
  awater?: string,
  title: string,
  description: string
}
export default defineComponent({
  name: 'column-list',
  props: {
    list: {
      type: Array as PropType<IColumnType[]>, // 1-------------props的类型断言使用v3提供的PropType,为props传入泛型
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.awater) {
          column.awater = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>
