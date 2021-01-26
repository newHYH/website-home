<template>
    <div class="param">
        <Header />
        <HonorHeader link1="product1" link2="param1" />
        <div class="param-list">
            <ul class="row" style="margin-top: 100px">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">颜色</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-2">
                    <div class="img-box">
                        <img src="../assets/param1/yuan_hei.png" alt="">
                        <span>幻夜黑</span>
                    </div>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-2">
                    <div class="img-box">
                        <img src="../assets/param1/yuan_yin.png" alt="">
                        <span>星河银</span>
                    </div>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-2">
                    <div class="img-box">
                        <img src="../assets/param1/yuan_fen.png" alt="">
                        <span>樱雪晴空</span>
                    </div>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-2">
                    <div class="img-box">
                        <img src="../assets/param1/yuan_lv.png" alt="">
                        <span>翡冷翠</span>
                    </div>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">存储</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">存储空间</p>
                    <p>6GB RAM + 128GB ROM</p>
                    <p>8GB RAM + 128GB ROM</p>
                </li>
                <li class="col-sm-12 col-md-6 col-lg-4">
                    <p class="bold-text">支持最大存储卡容量</p>
                    <p>256GB（非标配）</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">外观</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <img src="../assets/param1/yuan_waiguan.png" alt="">
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">机身重量</p>
                    <p>约197g</p>
                    <p class="gray-text">(备注：因为工艺差异，实际会略有不同）</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">系统</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-8">
                    <p class="bold-text">操作系统</p>
                    <p>Android 10</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">蜂窝网络参数</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-8">
                    <p class="bold-text">NR/TD-LTE/FDD LTE/WCDMA/GSM</p>
                    <p class="gray-text">支持中国移动的5G/4G/2G</p>
                    <p class="gray-text">支持中国联通的 5G/4G/3G/2G</p>
                    <p class="gray-text">支持中国电信的 5G/4G</p>
                    <p class="gray-text">说明：5G 支持 NSA 和 SA 两种网络制式。
                        各个地区的网络和频段可能有所不同，具体取决于当地运营商以及您所在的位置。
                        如果两张都是电信卡，副卡（非默认移动数据卡）必须开通电信 VoLTE 业务，才能同时使用电信双卡。
                        当把双卡中的一张卡设为主卡时，则该卡支持 5G，另一张卡能支持 4G/3G/2G。</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text-title">显示参数</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <img class="xianshi" src="../assets/param1/yuan_xianshi.png" alt="">
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">屏幕尺寸</p>
                    <p>6.63英寸</p>
                    <p class="bold-text">分辨率</p>
                    <p>1080X2400</p>
                    <p class="bold-text">屏幕类型</p>
                    <p>LTPS</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">屏幕色彩</p>
                    <p>1670万色</p>
                    <p class="bold-text">触摸屏</p>
                    <p>多点触控</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">运行参数</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">CPU型号</p>
                    <p>MediaTek MT6853 5G</p>
                    <p class="bold-text">CPU主频</p>
                    <p>2*A76*2.0GHz+6*A55*2.0GHz</p>
                    <p class="bold-text">外部接口</p>
                    <p>Type-C，microSD 卡槽，3.5mm 耳机接口</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">CPU核数</p>
                    <p>八核</p>
                    <p class="bold-text">按键类型</p>
                    <p>电源键</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text-title">拍照/摄像</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">后置摄像头像素</p>
                    <p>4800 万像素（f/1.8 光圈）+800 万像素（f/2.4 光圈）+200 万像素（f/2.4 光圈）</p>
                    <p class="bold-text">副摄像头</p>
                    <p>1600 万像素（f/2.2 光圈）</p>
                    <p class="bold-text">拍摄模式</p>
                    <p>大光圈、夜景、美肤、专业、全景等</p>
                    <p class="bold-text">对焦方式</p>
                    <p>前置：固定焦距</p>
                    <p>后置：PDAF</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">拍照</p>
                    <p>最大可支持 6000×8000</p>
                    <p class="bold-text">拍照</p>
                    <p>最大可支持 4608×3456</p>
                    <p class="bold-text">视频拍摄</p>
                    <p>后置摄像头：支持 4K 视频录制，不支持光学防抖</p>
                    <p>前置摄像头：支持 1080P 视频录制，不支持光学防抖</p>
                    <p class="bold-text">闪光灯</p>
                    <p>单色温闪光灯</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">摄像</p>
                    <p>最大可支持 3840×2160</p>
                    <p class="bold-text">摄像</p>
                    <p>最大可支持 1920×1080</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">电池/待机</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">电池容量</p>
                    <p>4100 mAh（最小值） 4200 mAh（典型值）</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">理论充电时间</p>
                    <p>约 1.5 小时（来源于实验室，实际充电时间会有差异）</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">导航/无线</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">GPS</p>
                    <p>北斗：支持</p>
                    <p>GPS：支持</p>
                    <p>AGPS：支持</p>
                    <p>Glonass：支持 等</p>
                    <p class="bold-text">WLAN频率</p>
                    <p>2.4GHz/5GHz</p>
                    <p class="bold-text">USB版本</p>
                    <p>USB 2.0</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">WLAN协议</p>
                    <p>802.11a/b/g/n/ac 2.4G/5G</p>
                    <p class="bold-text">WLAN热点</p>
                    <p>支持</p>
                    <p class="bold-text">蓝牙版本</p>
                    <p>BT5.1 支持 BLE</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">其他</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">USB功能</p>
                    <p>USB OTG 通过 USB 连接上网 USB 充电</p>
                    <p class="bold-text">包装清单</p>
                    <p>(1) 手机X1</p>
                    <p>(2) 电池（内置） X1</p>
                    <p>(3) 快速指南 X1</p>
                    <p>(4) 充电器 X1</p>
                    <p>(5) 保修卡 X1</p>
                    <p>(6) USB type-C 数据先 X1</p>
                    <p>(7) 取卡针 X1</p>
                    <p>(8) 保护壳 X1</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">安全功能</p>
                    <p>NA</p>
                </li>
            </ul>
            <div class="gray-line"></div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import HonorHeader from '@/components/honor-header.vue';
import Footer from '@/components/footer.vue';
export default {
    name: "param",
    components: {
        Header,
        HonorHeader,
        Footer
    },
    mounted() {
    },
}
</script>
<style scoped lang="scss">
@import "./../sass/common.scss";
.param {
    width: 100%;
    overflow: hidden;
    .phone-name {
        font-size: torem(50);
        line-height: torem(50);
        font-weight: 800;
        color: #000;
        margin-bottom: torem(54);
        margin-top: torem(114);
    }
    .phone-pic {
        width: torem(743);
        height: torem(525);
        margin: 0 auto;
        margin-bottom: torem(54);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .phone-colors {
        font-size: torem(18);
        font-weight: 400;
        color: #666666;
        line-height: torem(25);
        margin-bottom: torem(71);
    }
    .gray-line {
        width: 69%;
        margin: 0 auto;
        height: torem(2);
        background: rgba(216, 216, 216, 1);
        margin-bottom: torem(120);
    }
    .param-list {
        ul {
            width: 69%;
            margin: 0 auto;
            margin-bottom: torem(100);
            li {
                .img-box{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    img{
                        margin-bottom: torem(57);
                    }
                    span{
                        font-size: torem(18);
                        font-family: PingFang-SC-Regular, PingFang-SC;
                        font-weight: 400;
                        color: #333333;
                        line-height: torem(25);
                    }
                }
                .xianshi{
                    width: torem(226);
                    height: torem(467);
                }
                p {
                    word-wrap: break-word;
                    word-break: break-word;
                    font-size: torem(20);
                    font-weight: 400;
                    color: #808080;
                    line-height: torem(28);
                    text-align: left;
                    margin-bottom: torem(18);
                }
                .bold-text {
                    font-size: torem(20);
                    font-weight: 600;
                    color: #333333;
                    line-height: torem(28);
                }
                .bold-text-title {
                    font-size: torem(28);
                    font-weight: 600;
                    color: #333333;
                    line-height: torem(40);
                }
                .bold-gray-text {
                    font-size: torem(20);
                    font-weight: 600;
                    color: #7F7F7F;
                    line-height: torem(28);
                }
                .gray-text {
                    font-size: torem(20);
                    font-weight: 400;
                    color: #B2B2B2;
                    line-height: torem(45);
                }
            }
        }
    }
}
@media screen and (max-width: 750px) {
    .param {
        .param-list {
            ul {
                width: 69%;
                margin: 0 auto;
                margin-bottom: torem(100);
                li {
                    p {
                        word-wrap: break-word;
                        word-break: break-word;
                        font-size: 14px;
                        font-weight: 400;
                        color: #808080;
                        line-height: 28px;
                        text-align: left;
                        margin-bottom: 18px;
                    }
                    .bold-text {
                        font-size: 14px;
                        font-weight: 600;
                        color: #333333;
                        line-height: 28px;
                    }
                    .bold-text-title {
                        font-size: 18px;
                        font-weight: 600;
                        color: #333333;
                        line-height: 40px;
                    }
                    .bold-gray-text {
                        font-weight: 600;
                        color: #7F7F7F;
                        line-height: 28px;
                    }
                    .gray-text {
                        font-weight: 400;
                        color: #B2B2B2;
                        line-height: 28px;
                    }
                }
            }
        }
    }
}
</style>