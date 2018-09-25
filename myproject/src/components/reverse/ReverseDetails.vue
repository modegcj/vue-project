<template>
    <div class="reverse-details">
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><div class="box" style="background: #FF0000;">Slide 1</div></swiper-slide>
                <swiper-slide><div class="box" style="background: #00FF00;">Slide 2</div></swiper-slide>
                <swiper-slide><div class="box" style="background: #0000FF;">Slide 3</div></swiper-slide>
                <!-- 分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- 导航按钮 -->
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <!-- 滚动条 -->
                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: "ReverseDetails",
    data(){
        return{
            swiperOption:{
                notNextTick: true,
                autoplay: true,
                speed: 1000,
                loop: true,
                pagination:{
                    el:'.swiper-pagination',
                    type:'bullets',
                    progressbarOpposite: true,
                    bulletElement:'span',
                    dynamicBullets:true,
                    dynamicMainBullets:1
                },
                scrollbar:{
                    el:'.swiper-scrollbar',
                    dragSize: "auto"
                },
                navigator:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            }
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.reverse-details{
    width: 100%;
    .banner{
        height: 100px;
        .box{
            height: 100px;
            text-align: center;
            line-height: 100px;
            color: #FFFFFF;
            font-size: 20px;
        }
    }
}
</style>
