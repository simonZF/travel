<template>
  <div class="icons">
    <swiper  >
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl"/>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '经典景点'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height:0;
    padding-bottom:50%;
    .icon
      width:25%;
      padding-bottom:25%;
      overflow:hidden;
      float:left;
      height:0;
      img
        display:block;
        width:1.1rem;
        height:1.1rem;
        margin:0.1rem auto 0;
      p
        margin-top: .1rem;
        color: #212121;
        font-size: .28rem;
        text-align:center;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

</style>
