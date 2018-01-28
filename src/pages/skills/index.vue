<template>
  <div class="page skills">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="skillsContent">
        <div class="progressBar" v-for="skill in $store.state.data.website.skills">
          <p class="progressTitle">{{skill.value}}</p>
          <div class="progressContent">
            <div class="bar" :style="progressStyle(skill)">
              <div class="progressValue">{{skill.grade}}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="pagebody">-->
      <!--<div class="cardContainer">-->
        <!--<div-->
          <!--class="card"-->
          <!--v-for="skill in $store.state.data.website.skills"-->
          <!--:style="skill.style ? skill.style : ''"-->
          <!--:data-desc="skill.gradeText">-->
          <!--<div class="s1" :style="s1Style(skill)"></div>-->
          <!--<div class="s2" :style="s2Style(skill)"></div>-->
          <!--<img :src="skill.logo" style="z-index:100;">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: ['id', 'show'],
  data: () => {
    return {
      mShow: false
    }
  },
  watch: {
    show: function( val, oldVal) {
      let vm = this
      if (val) {
        setTimeout( function () {
          vm.mShow = true
        }, 500)
      } else {
        vm.mShow = false
      }
    }
  },
  methods: {
    progressStyle: function (skill) {
      const vm = this
      const style = {
        width: vm.mShow ? skill.grade + '%' : 0
      }
      Object.assign(style, skill.style)
      return style
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
