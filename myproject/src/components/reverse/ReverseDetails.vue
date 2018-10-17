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
        <div class="custom">
            <input type="text" v-focus/>
        </div>
        <div class="map">
            <div id="container" class="mymap"></div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import AMap from 'AMap'
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
    created(){
        Vue.directive('focus',{
            inserted:function (el){
                el.focus()
            }
        })
    },
    mounted(){
        this.loadmap();
    },
    methods:{
        loadmap(){
            const map = new AMap.Map('container',{
                zoom: 11,
                center: [116.397428,39.90923],
                viewMode:'3D'
            });
            AMap.plugin('AMap.Driving',function(){
                var driving = new AMap.Driving({
                    policy: AMap.DrivingPolicy.LEAST_TIME
                })
                var startLngLat = [116.379028,39.865042]
                var endLngLat = [116.427281,39.903719]
                driving.search(startLngLat,endLngLat,function(status,result){
                    
                })
            })
        }
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
    .mymap{
        width: 300px;
        height: 300px;
        margin: 10px auto;
        border: 1px solid #333333;
    }
}
</style>
