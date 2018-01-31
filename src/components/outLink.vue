<template>
  <a @click="jump()"
     @touchstart="touchstart"
     @touchend="touchend" style="cursor: pointer">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'outLink',
    props: ['href', 'target'],
    data () {
      return {
        startX: 0,
        startY: 0
      }
    },
    methods: {
      jump () {
        if (this.target && this.target === '_blank') {
          window.open(this.href)
        } else {
          window.location.href = this.href
        }
      },
      touchstart (e) {
        this.startX = e.changedTouches[0].screenX
        this.startY = e.changedTouches[0].screenY
      },
      touchend (e) {
        const endX = e.changedTouches[0].screenX
        const endY = e.changedTouches[0].screenY
        if (Math.abs(endX - this.startX) < 10 && Math.abs(endY - this.startY) < 10) {
          this.jump()
        }
      }
    }
  }
</script>
