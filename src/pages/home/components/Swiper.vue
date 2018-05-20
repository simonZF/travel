<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>
      <img class="siper-img" src=""/>
    </swiper-slide>
    <swiper-slide>
      <img class="siper-img" src=""/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    width:100%;
    height:0;
    overflow:hidden;
    background:#ccc;
    //用来撑开容器防止抖动
    padding-bottom:31.25%;
    .swiper-img
      width:100%

</style>
