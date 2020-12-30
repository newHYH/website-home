<template>
    <div class="text-box">
        <p>1.   88° 曲面数据来源于联通实验室。环幕屏是联通手机对超曲面手机设计的定义，让屏幕显示呈现环幕视觉。 Mate 40 Pro 显示屏来源于多家供应商，屏幕规格一致，由于不同厂商技术方案的差异，最终显示效果会有细微差别。</p>
        <p>2.  不同应用界面及游戏画面下，屏幕刷新率及触控采样率可能略有不同，请以实际体验为准。</p>
        <p>3.   Mate 40 Pro 支持 IP68 级防尘抗水，本手机并非专业防水手机，在正常使用状态下可防溅、抗水、防尘，在受控实验室条件下经测试，其效果在 GB/T 4208-2017（国内）/ IEC 60529（海外）标准下达到 IP68 级别。防溅、抗水、防尘功能并非永久有效，防护性能可能会因日常磨损而下降。请勿在潮湿状态下为手机充电；请参阅使用手册了解清洁和干燥说明。由于浸入液体而导致的损坏不在保修范围之内。IP68 的防水条件为（1）无流动清水，水深 1.5 米；（2）试验时间 30 分钟；（3）水温与产品温差不大于 5 摄氏度</p>
        <p>4.  晶体管数据来源于联通实验室，仅供参考。</p>
        <p>5.  5G 超级上行能否支持，取决于运营商网络部署和业务开通情况。</p>
        <p>6.  四网协同指 Wi-Fi 2.4 GHz、Wi-Fi 5 GHz 、主卡 （5G）、副卡 （4G），可实现网络优选或并发下载，是否生效与您所处的网络环境和使用的应用有关，如生效将消耗移动流量，可能涉及数据流量费用。</p>
        <p>7.  天际通当前支持 Mate 40 系列用户在泰国使用境外 5G 网络，更多国家和地区陆续上线。</p>
        <p>8.  5 倍光学变焦为近似值。Mate 40 Pro 镜头焦段分别为 18 mm，23 mm，125 mm。</p>
        <p>9.  三个摄像头通过不同组合实现各种环境下出色的 10 倍混合变焦效⁠果。</p>
        <p>10.  电池典型值为 4400 mAh ，额定容量为 4300 mAh。</p>
        <p>11.  为达到最大 66 W 有线充电功率，需配合 66 W 联通超级快充充电器使用。实际充电功率随不同场景变化，请以实际使用情况为⁠准。</p>
        <p>12.  最大支持无线充电功率 50 W，需单独购买华为超级快充立式无线充电器（Max 50 W）或华为超级快充无线车充 (Max 50 W)，并搭配特定 66 W 华为超级快充充电器使用，实际充电功率会随不同场景变化，请以实际使用情况为准</p>
        <p>13.  联通分享的多屏协同功能仅支持联通手机（EMUI 11.0及以上版本的部分手机）</p>
        <p>14.  支持实时翻译英语、日语、韩语为中文。韩语，日语翻译中文的功能需 HOTA 升级支持。</p>
        <p>15.  安全分享可去除照片拍摄地点、时间、设备等信息。</p>
        <p>16.  安全系统中的微内核获得全球商用 OS 内核最高安全认证等级 CC EAL5+。</p>
        <p>17.  配件需单独购买。</p>
    </div>
</template>

<script>
export default {
    name: 'text-box',
    props: {
        
    },
    data() {
        return{
        }
    },
    mounted() {
    },
    methods: {
        
    }
}
</script>

<style scoped lang=scss>
    @import "@/sass/common.scss";
    .text-box{
        width: 100%;
        overflow: hidden;
        padding: torem(152) torem(193) torem(136) torem(174);
        p{
            font-size: torem(18);
            font-weight: 400;
            color: #666666;
            line-height: torem(25);
            text-align: left;
        }
    }
    @media screen and (max-width: 750px) {
        .text-box{
            width: 100%;
            overflow: hidden;
            padding: 30px;
            p{
                font-size: 12px;
                font-weight: 400;
                color: #666666;
                line-height: 20px;
                text-align: left;
            }
        }
    }
    @media screen and (min-width: 750px) and (max-width: 1440px) {
        .text-box{
            width: 100%;
            overflow: hidden;
            padding: 60px;
            p{
                font-size: 12px;
                font-weight: 400;
                color: #666666;
                line-height: 20px;
                text-align: left;
            }
        }
    }
</style>