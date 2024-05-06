<template>
  <div class="content-box">
    <p>{{ title }}</p>
    <el-input v-model="name" @change="submit"></el-input>
  </div>
  <slot v-if="visible" />
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  title: {
    type: String,
    default: '请输入密码',
  },
  password: {
    type: String,
    required: true,
  },
})

const name = ref('')
const visible = ref(false)

const submit = () => {
  if (name.value === props.password) {
    visible.value = true
    return
  }
  ElMessage.warning('输入错误')
  visible.value = false
}
</script>

<style scoped>
.content-box {
  margin-bottom: 20px;
}
</style>
