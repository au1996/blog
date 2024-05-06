<template>
  <el-image
    v-for="item in srcList"
    :key="item.link"
    fit="cover"
    :src="item.link"
    :preview-src-list="[item.link]"
    :hide-on-click-modal="true"
  />
</template>

<script setup>
import { ref } from 'vue'

const srcList = ref([
  { link: `${location.origin}/blog/images/licongpeng/平安寺1.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺1-2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺3.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺4.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺三剑客.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺合集1.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺合集2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺小胖与聪朋.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/平安寺高高与聪朋.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/高高家里合集.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/高高家里聚会.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/高高家里聚会2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/华阳中学.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/华阳中学合集.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/华阳中学聚首.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/小胖毕业.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/小胖毕业2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/19聚会2.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/19聚会.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/19聚会合集.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/19聚会小胖.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/远郴结婚.jpg` },
  { link: `${location.origin}/blog/images/licongpeng/噩耗讣告.jpg` },
])
</script>
