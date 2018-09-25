<template>
    <div class="order-details">
        <div class="type">待就餐</div>
        <div class="details">
            <h3>万龙洲海鲜大酒店（望京店）</h3>
            <!-- 酒店信息 -->
            <div class="hotel">
                <img src="@/assets/images/index/hotel.png"/>
                <div class="message">
                    <p>包间&nbsp;&nbsp;<span>VIP2</span>&nbsp;&nbsp;6人</p>
                    <p>2018-12-33&nbsp;&nbsp;12:00</p>
                    <i>订金&nbsp;&nbsp;¥100</i>
                </div>
            </div>
            <!-- 酒店信息end -->
            <!-- 订单信息 -->
            <div class="order">
                <div class="user">
                    <span class="name">张先生</span><span class="phone">188-2334-8786</span>
                </div>
                <p>下单时间<span>2018-12-13&nbsp;&nbsp;14:36</span></p>
                <p>订单编号<span>45453535435</span></p>
            </div>
            <!-- 订单信息end -->
            <div class="deposit">已付定金&nbsp;&nbsp;<span>¥100</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "OrderDetails"
}
</script>
<style lang="scss" scoped>
.order-details{
    width: 100%;
    .type{
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        font-size: 16px;
        color: #FD8F14;
    }
    .details{
        background: #FFFFFF;
        h3{
            height: 42px;
            line-height: 42px;
            font-weight: bold;
            padding-left: 15px;
            position: relative;
        }
        h3::after{
            content: "";
            position: absolute;
            width: 200%;
            height: 1px;
            background: #DCDCDC;
            bottom: 0;
            left: 0;
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
        // 酒店信息
        .hotel{
            padding: 15px;
            display: flex;
            position: relative;
            img{
                width: 86px;
                height: 63px;
                margin-right: 10px;
            }
            .message{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p{
                    span{
                        color: #333333;
                    }
                }
                i{
                    color: #FD8F14;
                }
            }
        }
        .hotel::after{
            content: "";
            position: absolute;
            width: 200%;
            height: 1px;
            background: #DCDCDC;
            bottom: 0;
            left: 0;
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
        // 酒店信息end
        // 用户信息
        .order{
            padding: 15px;
            position: relative;
            .user{
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                .name{
                    color: #333333;
                }
                .phone{
                    margin-left: 25px;
                }
            }
            p{
                height: 26px;
                line-height: 26px;
                span{
                    color: #333333;
                    float: right;
                }
            }
        }
        .order::after{
            content: "";
            position: absolute;
            width: 200%;
            height: 1px;
            background: #DCDCDC;
            bottom: 0;
            left: 0;
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
        // 用户信息end
        .deposit{
            height: 56px;
            line-height: 56px;
            text-align: center;
            font-size: 14px;
            span{
                color: #00C093;
            }
        }
    }
}
</style>
