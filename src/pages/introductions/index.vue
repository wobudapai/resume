<template>
  <div class="page introductions">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="selfIntroduction">
        <p>{{ $store.state.data.website.description }}</p>
      </div>
      <div class="selfInformations">
        <div class="infoRow" v-for="index in infoRows">
          <div class="placeholder"></div>
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations"
            v-if="i >= index * 3 && i < (index + 1) * 3">
            <img :src="v.icon" :alt="v.key" :title="v.key" class="icon">
            <p>{{ v.value }}</p>
          </div>
          <div class="placeholder"></div>
        </div>
        <div class="infoRow infoCol">
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations">
            <img :src="v.icon" class="icon">
            <p>{{ v.key + '：' + v.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introductions',
  props: ['id'],
  computed: {
    infoRows: function () {
      //return Array(Math.ceil(this.$store.state.data.website.infomations.length / 3)).fill(0).map((v, i) => i)
      const arr = Array()
      for (let i = 0; i < Math.ceil(this.$store.state.data.website.infomations.length / 3); i++) {
        arr.push(i)
      }
      console.log(arr)
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
