<template>
  <div class="entry" @touchmove="touchmove" @touchend="touchend">
    <navigator :id="currentPage" @linkTo="linkTo" />
    <language-switcher />
    <index
      id="0"
      :class="{
        currentPage: currentPage === 0,
        prePage: currentPage > 0,
        nextPage: currentPage < 0
      }"/>
    <introductions
      id="1"
      :class="{
        currentPage: currentPage === 1,
        prePage: currentPage > 1,
        nextPage: currentPage < 1
      }"/>
    <skills
      id="2"
      :class="{
        currentPage: currentPage === 2,
        prePage: currentPage > 2,
        nextPage: currentPage < 2
      }"
      :show="currentPage === 2"/>
    <works
      id="3"
      :class="{
        currentPage: currentPage === 3,
        prePage: currentPage > 3,
        nextPage: currentPage < 3
      }"/>
    <projects
      id="4"
      :class="{
        currentPage: currentPage === 4,
        prePage: currentPage > 4,
        nextPage: currentPage < 4
      }"
      :show="currentPage === 4"/>
    <!--<articles-->
      <!--id="5"-->
      <!--:class="{-->
        <!--currentPage: currentPage === 5,-->
        <!--prePage: currentPage > 5,-->
        <!--nextPage: currentPage < 5-->
      <!--}"/>-->
  </div>
</template>

<script>
  /**
   * import components
   **/
  import navigator from './components/navigator'
  import languageSwitcher from './components/languageSwitcher'
  /**
   * import router for generator a route map
   **/
  import route from './router'
  import { mapActions } from 'vuex'
  /**
   * import pages
   **/
  import index from './pages/index'
  import introductions from './pages/introductions'
  import skills from './pages/skills'
  import works from './pages/works'
  import projects from './pages/projects'
  import articles from './pages/articles'

  export default {
    name: 'entry',
    data: () => ({
      transitionName: 'slideUpIn',
      currentPage: 0,
      routeMap: [],
      touchStartY: 0,
      outdatedbrowser: false
    }),
    beforeMount () {
      this.routeMap = route.map((v, i) => {
        v.id = i
        return v
      })
    },
    mounted () {
      // scrolling listener
      window.onmousewheel = e => {
        e.stopPropagation()
        e.preventDefault()

        if (this.scrollingLock) return

        if (e.wheelDelta < -40) {
          this.switchPage(true)
        } else if (e.wheelDelta > 40) {
          this.switchPage()
        }
      }

      window.addEventListener('keydown', this.keyDown)
    },
    methods: {
      linkTo (id) {
        this.currentPage = id
      },
      touchmove (e) {
        e.preventDefault()
        if (this.touchStartY === 0) {
          this.touchStartY = e.changedTouches[0].screenY
        }
      },
      touchend (e) {
        e.preventDefault()

        if (this.touchStartY === 0 || this.scrollingLock) {
          return
        }

        const touchEndY = e.changedTouches[0].screenY

        if (this.touchStartY - touchEndY > 80) {
          this.switchPage(true)
        } else if (this.touchStartY - touchEndY < -80) {
          this.switchPage()
        }

        this.touchStartY = 0
      },
      keyDown (event) {
//        alert(event.keyCode)
        if (event.keyCode === 38) { // up
          this.switchPage()
        } else if (event.keyCode === 40) {  // down
          this.switchPage(true)
        } else if (event.keyCode === 32) {
          this.changeLanguage(this.$store.state.lang === 'cn' ? 'en' : 'cn')
        }
      },
      switchPage (isNext) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 500)

        if (isNext) {
          if (this.currentPage !== this.routeMap.length - 1) {
            this.currentPage++
          }
        } else {
          if (this.currentPage !== 0) {
            this.currentPage--
          }
        }
      },
      ...mapActions([
        'changeLanguage'
      ])
    },
    components: {
      navigator,
      languageSwitcher,
      index,
      introductions,
      skills,
      works,
      projects,
      articles
    }
  }
</script>

<style lang="less">
  @import './assets/less/_reset.less';
  @import './assets/less/common.less';
  @import './assets/less/entry.less';
  @import './assets/less/animations.less';
</style>
