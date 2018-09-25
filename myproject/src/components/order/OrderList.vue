<template>
    <div class="order-list">
        <ul class="title">
            <li class="select">全部</li>
            <li>待就餐</li>
            <li>完成</li>
        </ul>
        <ul class="list">
            <li v-for="order in orders" :key="order.id">
                <h3>{{order.name}}<span v-if="order.isSuccess" class="success">完成</span><span v-else class="wait">待就餐</span></h3>
                <div class="details">
                    <img :src="order.src"/>
                    <div class="messsage">
                        <p><span>时间：</span>{{order.date}}（{{order.week}}）&nbsp;&nbsp;{{order.time}}</p>
                        <p><span>人数：</span>{{order.num}}人</p>
                        <p><span>位置：</span>{{order.address}}</p>
                        <a v-if="order.isSuccess" class="again">再次预约</a>
                        <a v-else class="cancel">取消预约</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"OrderList",
    data(){
        return{
            orders:[
                {name:"万龙洲海鲜大酒店（望京店）",isSuccess: false,src:require("@/assets/images/index/hotel.png"),date:"08-24",week:"四",time:"12:00",num:"6",address:"大厅"},
                {name:"万龙洲海鲜大酒店（望京店）",isSuccess: true,src:require("@/assets/images/index/hotel.png"),date:"08-23",week:"四",time:"12:00",num:"6",address:"大厅"}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.order-list{
    display: flex;
    flex-direction: column;
    width: 100%;
    .title{
        height: 46px;
        background: #FFFFFF;
        display: flex;
        justify-content: space-around;
        position: relative;
        li{
            height: 45px;
            line-height: 44px;
            padding: 0 15px;
        }
        .select{
            border-bottom: 1px solid #00C093;
            color: #00C093;
        }
    }
    .title::after{
        content: '';
        position: absolute;
        width: 200%;
        height: 1px;
        background: #DCDCDC;
        left: 0;
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
    .list{
        flex: 1;
        overflow-y: auto;
        li{
            margin-bottom: 10px;
            background: #FFFFFF;
            h3{
                padding: 0 15px;
                height: 42px;
                line-height: 42px;
                color: #333333;
                font-weight: bold;
                position: relative;
                span{
                    font-weight: normal;
                    float: right;
                }
                .wait{
                    color: #FD8F14;
                }
                .success{
                    color: #00C093;
                }
            }
            h3::after{
                content: "";
                position: absolute;
                width: 200%;
                height: 1px;
                background: #DCDCDC;
                left: 0;
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
            .details{
                padding: 15px;
                display: flex;
                img{
                    width: 86px;
                    height: 67px;
                    margin-right: 10px;
                }
                .messsage{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    flex: 1;
                    p{
                        color: #333333;
                        span{
                            color: #999999;
                        }
                    }
                    a{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        display: inline-block;
                        width: 72px;
                        height: 26px;
                        line-height: 26px;
                        text-align: center;
                        color: #FFFFFF;
                        border-radius: 4px;
                    }
                    .cancel{
                        background: #E46A75;
                    }
                    .again{
                        background: #00C093;
                    }
                }
            }
        }
    }
}
</style>
