<template>
    <div class="app-index">
        <!-- 搜索框 -->
        <div class="search">
            <div class="location"><img src="@/assets/images/index/location.png"/>北京</div>
            <div class="searchinp">
                <img src="@/assets/images/index/search.png"/>
                <div class="inpout"><input type="text" placeholder="餐厅名称"/></div>
            </div>
        </div>
        <!-- 搜索框end -->
        <!-- 餐厅列表 -->
        <div class="hotels">
            <div class="title">
                <div class="select">推荐</div>
                <router-link to='/practice' tag="div">去过的餐厅</router-link>
            </div>
            <ul class="list">
                <li v-for="hotel in hotels" :key="hotel.id">
                    <img :src="hotel.src"/>
                    <div class="details">
                        <h3>{{hotel.name}}</h3>
                        <p><span>人均&nbsp;&nbsp;{{hotel.price}}元</span><i></i>{{hotel.type}}</p>
                        <div class="address">
                            <img src="@/assets/images/index/address.png"/>
                            <p>{{hotel.address}}</p>
                            <router-link to="/orderdetails" @click.native="toJump">预定</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 餐厅列表end -->
    </div>
</template>
<script>
export default {
    name: "AppIndex",
    data(){
        return{
            hotels:[
                {name:"万龙洲海鲜大酒店（望京店）",price:"43",type:"粤菜",address:"朝阳区新源南路12号三层2号新店",src:require("@/assets/images/index/hotel.png")},
                {name:"金源酒店（丽泽店）",price:"43",type:"粤菜",address:"朝阳区新源南路12号",src:require("@/assets/images/index/hotel.png")},
                {name:"毛家湾",price:"43",type:"粤菜",address:"朝阳区新源南路12号三层2号新店",src:require("@/assets/images/index/hotel.png")},
                {name:"半岛酒店",price:"43",type:"粤菜",address:"朝阳区新源南路12号三层2号新店",src:require("@/assets/images/index/hotel.png")}
            ]
        }
    },
    methods:{
        toJump(){
            this.$store.commit("footerHidden");
        }
    }
}
</script>
<style lang="scss" scoped>
.app-index{
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 100%;
    // 搜索框
    .search{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 10px solid #F0F0F8;
        // 位置信息
        .location{
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 11px;
                height: 15px;
                margin-right: 10px;
            }
        }
        // 搜索框
        .searchinp{
            height: 32px;
            flex: 1;
            background: #F0F0F8;
            border-radius: 4px;
            overflow: hidden;
            margin-right: 15px;
            padding-left: 10px;
            display: flex;
            align-items: center;
            img{
                width: 14px;
                height: 14px;
            }
            .inpout{
                flex: 1;
                padding-right: 10px;
            }
        }
    }
    // 搜索框end
    // 餐厅列表
    .hotels{
        flex: 1;
        display: flex;
        flex-direction: column;
        // 头部标题
        .title{
            height: 40px;
            display: flex;
            position: relative;
        }
        .title>div{
            height: 39px;
            line-height: 38px;
            padding: 0 20px;
            margin-left: 10px;
        }
        // 选中状态
        .title>.select{
            color: #00C093;
            border-bottom: 1px solid #00C093;
        }
        .title::after{
            content: "";
            position: absolute;
            width: 200%;
            height: 1px;
            background: #DCDCDC;
            bottom: 0px;
            -webkit-transform-origin: 0 0;
            -moz-transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            -o-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(0.5, 0.5);
            -moz-transform: scale(0.5, 0.5);
            -ms-transform: scale(0.5, 0.5);
            -o-transform: scale(0.5, 0.5);
            transform: scale(0.5, 0.5);
        }
        // 酒店列表
        .list{
            padding: 0 15px;
            flex: 1;
            overflow-y: auto;
            li{
                padding: 15px 0;
                display: flex;
                align-items: center;
                position: relative;
                img{
                    width: 115px;
                    height: 76px;
                }
                // 酒店信息
                .details{
                    flex: 1;
                    margin-left: 10px;
                    h3{
                        font-size: 14px;
                        font-weight: bold;
                        color: #333;
                    }
                    p{
                        display: flex;
                        align-items: center;
                        height: 30px;
                        span{
                            color: #FD8F14;
                        }
                        i{
                            width: 1px;
                            background: #DCDCDC;
                            height: 10px;
                            margin: 0 5px;
                        }
                    }
                    .address{
                        display: flex;
                        align-items: flex-start;
                        img{
                            width: 11px;
                            height: 15px;
                            margin-right: 3px;
                            margin-top: 3px;
                        }
                        a{
                            width: 70px;
                            height: 26px;
                            display: inline-block;
                            text-align: center;
                            line-height: 26px;
                            color: #FFFFFF;
                            background: #00C093;
                            border-radius: 2px;
                            margin-left: 5px;
                        }
                        p{
                            flex: 1;
                            height: 30px;
                            display: flex;
                            align-items: flex-start;
                        }
                    }
                }
            }
            li::after{
                content: "";
                width: 200%;
                height: 1px;
                position: absolute;
                background: #F0F0F8;
                bottom: 0;
                -webkit-transform-origin: 0 0;
                -moz-transform-origin: 0 0;
                -ms-transform-origin: 0 0;
                -o-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scale(0.5, 0.5);
                -moz-transform: scale(0.5, 0.5);
                -ms-transform: scale(0.5, 0.5);
                -o-transform: scale(0.5, 0.5);
                transform: scale(0.5, 0.5);
            }
        }
    }
    // 餐厅列表end
}
</style>