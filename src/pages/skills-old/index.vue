<template>
  <div class="page skills">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="cardContainer">
        <div
          class="card"
          v-for="skill in $store.state.data.website.skills"
          :style="skill.style ? skill.style : ''"
          :data-desc="skill.gradeText">
          <div class="s1" :style="s1Style(skill)"></div>
          <div class="s2" :style="s2Style(skill)"></div>
          <img :src="skill.logo" style="z-index:100;">
        </div>
      </div>
    </div>
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
    s1Style: function (skill) {
      const style = {}
      Object.assign(style, skill.maskStyle)
      if (this.mShow) {
        Object.assign(style, {
          visibility: 'visible'
        })
      } else {
        Object.assign(style, {
          visibility: 'hidden'
        })
      }
      return style
    },
    s2Style: function (skill) {
      const style = {}
      Object.assign(style, skill.maskStyle)
      if (this.mShow && skill.grade) {
        var grade = skill.grade / 100 * 360 - 360
        console.log(grade)
        Object.assign(style, {
          transform: `rotate(${grade}deg)`,
          visibility: 'visible'
        })
      } else {
        Object.assign(style, {
          visibility: 'hidden'
        })
      }
      return style
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
