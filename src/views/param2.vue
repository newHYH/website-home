<template>
    <div class="param">
        <HonorHeader link1="product2" link2="param2" />
<!--        <div class="phone-name">优畅享20</div>-->
<!--        <div class="phone-pic">-->
<!--            <img src="../assets/phones2.png" alt="">-->
<!--        </div>-->
<!--        <div class="phone-colors">-->
<!--            亮黑色、绮境森林、樱雪晴空-->
<!--        </div>-->
        <div class="param-list">
            <ul class="row" style="margin-top: 100px">
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text-title">颜色</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <div class="img-box">
                        <img src="../assets/param2/hei.png" alt="">
                        <span>天亮黑</span>
                    </div>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <div class="img-box">
                        <img src="../assets/param2/lv.png" alt="">
                        <span>绮境森林</span>
                    </div>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <div class="img-box">
                        <img src="../assets/param2/yingxue.png" alt="">
                        <span>樱雪晴空</span>
                    </div>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">存储</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">运行内存（RAM）</p>
                    <p>4GB&6GB</p>
                    <!-- <p class="gray-text">*显示屏采用圆角设计，按照标准矩形测量时，屏幕对角线长度是6.76英寸（实际可视区域略小）。</p> -->
                    <p class="bold-text">存储卡类型</p>
                    <!-- <p>OLED,最高支持90Hz刷新率、240Hz触控采样率。</p> -->
                    <p>MicroSD</p>
                </li>
                <li class="col-sm-12 col-md-6 col-lg-4">
                    <p class="bold-text">机身内存（ROM）</p>
                    <p>128G</p>
<!--                    <p class="gray-text">*该分辨率对应标准矩形，实际屏幕有效像素略少。</p>-->
                    <p class="bold-text">支持最大存储卡容量</p>
                    <p>512GB（非标配）</p>
<!--                    <p class="gray-text">*实际尺寸与重量依配置、制造工艺、测量方法的不同可能有所差异。</p>-->
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">外观</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <img src="../assets/param2/waiguan.png" alt="">
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">机身重量</p>
                    <p>约188g</p>
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
                    <p class="gray-text">5G 支持 NSA 和 SA 两种网络制式。</p>
                    <p class="gray-text">备注：如果两张都是电信卡，副卡（非默认移动数据卡）必须开通电信VoLTE 业务，才能同时使用电信双卡</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text-title">显示参数</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <img class="xianshi" src="../assets/param2/xianshi.png" alt="">
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">屏幕尺寸</p>
                    <p>6.6英寸</p>
                    <p class="bold-text">分辨率</p>
                    <p>1600X720</p>
                    <p class="bold-text">屏幕类型</p>
                    <p>TFT LCD</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-3">
                    <p class="bold-text">屏幕色彩</p>
                    <p>1670万色</p>
                    <p class="bold-text">屏幕像素密度</p>
                    <p>266 PPI</p>
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
                    <p>电源键、音量上键、音量下键</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">拍照/摄像</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">后置摄像头像素</p>
                    <p>13M+5M+2M(景深) PDAF</p>
                    <p class="bold-text">拍照</p>
                    <p>最大可支持 4160×3120</p>
                    <p class="bold-text">后置摄像头闪光灯</p>
                    <p>单色温闪光灯</p>
                    <p class="bold-text">拍摄模式</p>
                    <p>专业模式、全景拍照(后置)、超级夜景、美肤，大光圈、人脸识别等</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">前置摄像头像素</p>
                    <p>8M FF</p>
                    <p class="bold-text">摄像</p>
                    <p>最大可支持 1920x1080</p>
                    <p class="bold-text">前置摄像头闪光灯</p>
                    <p>不支持</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">电池/待机</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">电池容量</p>
                    <p>5000 mAh（典型值） 4900 mAh（最小值）</p>
                    <p class="bold-text">标配充电器</p>
                    <p>5V/2A</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">理论充电时间</p>
                    <p>约 160 分钟（来源于实验室，实际充电时间会有差异）</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <!--<ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">防尘抗水</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-8">
                     <p class="bold-gray-text">IP68 级别</p>
                    <p class="bold-gray-text">*本手机并非专业防水手机，在正常使用状态下可防溅、抗水、防尘，在受控实验室条件下经测试，其效果在 GB/T 4208-2017（国内）/ IEC 60529（海外）标准下达到 IP68 级别。防溅、抗水、防尘功能并非永久有效，防护性能可能会因日常磨损而下降。请勿在潮湿状态下为手机充电；请参阅使用手册了解清洁和干燥说明。由于浸入液体而导致的损坏不在保修范围之内。</p>
                    <p class="gray-text">** IP68 中抗水条件为（1）无流动清水，水深 1.5 米；（2）试验时间 30 分钟；（3）水温与产品温差不大于 5 摄氏度。</p> 
                </li>
            </ul>
            <div class="gray-line"></div>-->
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
                    <p>802.11a/b/g/n/ac</p>
                    <p class="bold-text">WLAN热点</p>
                    <p>支持</p>
                    <p class="bold-text">蓝牙版本</p>
                    <p>BT5.1（支持 BLE、SBC\AAC、LDAC，不支持 HWA 高清音频，不支持 aptX）</p>
                </li>
            </ul>
            <div class="gray-line"></div>
            <ul class="row">
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text-title">其他</p>
                </li>
                <li class="col-sm-12 col-md-12 col-lg-4">
                    <p class="bold-text">USB功能</p>
                    <p>USB 充电/ USB OTG/ 通过 USB 连接上网</p>
                    <p class="bold-text">包装清单</p>
                    <p>(1) 手机（含内置电池）X1</p>
                    <p>(2) 充电器 X1</p>
                    <p>(3) 数据线 X1</p>
                    <p>(4) 取卡针 X1</p>
                    <p>(5) 保修卡 X1</p>
                    <p>(6) TP保护膜 X1 （出厂贴于手机）</p>
                    <p>(7) 保护壳 X1</p>
                    <p>(8) 数据线 X1</p>
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
import HonorHeader from '@/components/honor-header.vue';
import Footer from '@/components/footer.vue';
export default {
    name: "param",
    components: {
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
                    .img-box{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                            margin-bottom: torem(57);
                        }
                    }
                    .xianshi{
                        width: torem(226);
                        height: torem(467);
                    }
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