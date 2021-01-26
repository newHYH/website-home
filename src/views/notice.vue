<template>
    <div class="article-wrapper">
        <Header />
        <div class="article-box">
            <div class="title">预置应用信息公示查询</div>
            <div class="content">
                <p>声明：</p>
                <p class="mt20">移动智能终端预置应用是指由生产企业自行或与互联网信息服务提供者合作在移动智能终端出厂前安装在其系统中的应用程序（英文简称为“APP”）。</p>
                <p>1.预置应用信息公示查询范围为2017年7月1日后入网的移动智能终端；</p>
                <p>2.公示中的预置应用对应出厂设置版本。如果系统升级、设备被 Root，预置应用可能会有变化；</p>
                <p>3.第三方应用由第三方公司开发、运营，在法律允许的范围内，联通不承担该应用任何方面的责任；</p>
                <p>4.公示中支持卸载的预置应用，可通过“系统设置 > 应用管理”或者在主屏幕长按应用图标进行卸载；</p>
                <p>5.对于公示范围内的移动智能终端，在主屏幕，打开“服务”应用，也可查看预置应用信息；</p>
            </div>
        </div>
        <div class="search-box">
            <div class="search-form">
                <label class="search-txt">预置应用查询：</label>
                <div class="search">
                    <input type="text" @keyup.enter="handleSearch" v-model="searchText" class="search-input" placeholder="请输入产品型号名称">
                    <i class="search-icon" @click="handleSearch"></i>
                </div>
            </div>
            <div class="search-text">
                * 产品型号查看方式：手机的设置菜单-系统-关于手机-型号，输入时请注意区分字母、数字和符号。
            </div>
            <div class="search-result" v-if="showResult">
                <div class="result-col" :key="index" v-for="(item,index) in reList">
                    <h2 @click="goInfo(index)">{{item.name}}</h2>
                </div>
            </div>
            <div class="search-result" v-if="showNoResult">
                <div class="result-col">
                    <h2>暂无相关产品</h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'notice',
    components: {
        // Header,
        Header,
        Footer
    },
    data() {
        return {
            searchText: '',
            showResult:false,
            showNoResult:false,
            reList: [{
                name: 'VP002 (11.0.1.106(C04E18R1P2)) 预置应用软件信息公示'
            }]
        }
    },
    mounted() {},
    methods: {
        handleSearch() {
            if (this.searchText.indexOf('优畅享20') != -1) {
                this.showNoResult =false
                this.showResult = true
            }else{
                this.showResult =false
                this.showNoResult = true
            }
        },
        goInfo(index){
            let id = Number(index +1)
            console.log(id)
            this.$router.push('/info'+id)
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.article-wrapper {
    width: 100%;
    overflow: hidden;

    .article-box {
        padding: 0 torem(100);

        .title {
            font-size: torem(60);
            font-weight: 700;
            color: #333;
            margin: torem(60) 0;
            text-align: center;
        }

        .content {
            font-size: torem(45);
            color: #333;
            text-align: left;

            p {
                line-height: 1.5;
                margin-bottom: torem(12);

                &.mt20 {
                    margin-bottom: torem(50);
                }
            }
        }
    }

    .search-box {
        padding: torem(30) torem(100);

        .search-result {
            border-top: 1px solid #D8D8D8;
            padding-top: 50px;
            text-align: left;
            margin-top: 20px;

            .result-col {
                margin-bottom: 50px;

                h2 {
                    font-size: 16px;
                    color: #000000;
                    font-weight: bold;
                    line-height: 21px;
                    cursor: pointer;
                }
            }
        }

        .search-form {
            height: 58px;
            width: 100%;
            display: flex;

            .search-txt {
                font-size: torem(45);
                color: #333;
                flex: 1;
                line-height: 58px;
                width: 2rem;
            }

            .search {
                display: flex;
                width: calc(100% - 2rem);
                border: 1px solid #e6e6e6;
                line-height: 56px;
                position: relative;
                border-radius: 8px;
            }

            .search-input {
                width: 100%;
                border: 0;
                padding: 0 2%;
                height: 100%;
                line-height: 56px;
                font-size: 18px;
            }

            .search-icon {
                background: url(../assets/sousuo-2.png) no-repeat;
                background-size: 100%;
                z-index: 3;
                cursor: pointer;
                width: 20px;
                height: 20px;
                position: absolute;
                top: 50%;
                margin-top: -10px;
                right: torem(40);
            }
        }

        .search-text {
            font-size: torem(24);
            color: #666;
            padding-top: torem(24);
            text-align: left;
            padding-left: 2rem;
        }
    }
}

@media screen and (max-width: 768px) {
    .article-wrapper {

        .article-box {

            .title {
                font-size: 20px;
            }

            .content {
                font-size: 16px;
            }
        }
    }


}

@media screen and (max-width: 750px) {
    .article-wrapper {

        .article-box {

            .title {
                font-size: 18px;
            }

            .content {
                font-size: 15px;

                p {
                    line-height: 2;
                }

            }
        }

        .search-box {
            .search-form {
                height: 38px;

                .search-txt {
                    font-size: 15px;
                    line-height: 38px;
                    width: 104px;
                }

                .search {
                    width: calc(100% - 110px);
                    line-height: 36px;
                }

                .search-input {
                    line-height: 36px;
                    font-size: 15px;
                }
            }

            .search-text {
                padding-left: 5px;
                font-size: 12px;
            }
        }
    }
}
</style>