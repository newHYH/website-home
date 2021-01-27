<template>
    <div class="problem-wrapper">
        <Header />
        <div class="problem-box">
            <div class="title">
                <h2>常见问题</h2>
                <p>查找常见问题，帮您快速定位故障，提供有效解决方案</p>
            </div>
            <div class="problem-list">
                <div class="problem-col" :key="index" v-show="lenIndex>=index" v-for="(item,index) in list">
                    <div class="hd" @click="handleDrop(index)">
                        <div class="hd-t">{{item.title}}</div>
                        <div class="hd-icon" :class="curIndex==index?'icon-up':'icon-down'"></div>
                    </div>
                    <div class="bd" v-show="index==curIndex">
                        <template v-if="item.con">
                            <div v-html="item.con"></div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="more" v-if="lenIndex<39">
                <span @click="handleMore">更多常见问题</span>
            </div>
        </div>
        <ReturnTop />
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import proList from '@/components/pro.js';
import ReturnTop from '@/components/return-top.vue';
export default {
    name: 'problem',
    components: {
        Header,
        Footer,
        ReturnTop 
    },
    data() {
        return {
            list: proList,
            lenIndex:9,
            curIndex: -1,
        }
    },
    mounted() {

        console.log(proList)
    },
    methods: {
        handleDrop(index){
            if(index == this.curIndex){
                this.curIndex = -1
            }else{
                this.curIndex = index
            }
        },
        handleMore(){
            if(this.lenIndex<40){
                 this.lenIndex = this.lenIndex+10
            }
        }
    }
}
</script>
<style type="text/css">
.b-t {
    margin-bottom: 0;
    margin-top: 20px;
    color: #999;
}
</style>
<style scoped lang=scss>
@import "@/sass/common.scss";

.problem-wrapper {
    width: 100%;

    .problem-box {
        padding: 10px;

        .title {
            h2 {
                margin: 30px 0 24px;
                font-weight: 700;
                font-size: 32px;
            }

            p {
                margin-bottom: 45px;
                font-size: 14px;
                line-height: 1.5;
            }
        }

        .more {
            color: #0679FF;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 0;
            text-align: center;

            span {
                cursor: pointer;
            }
        }

        .problem-list {
            width: 60%;
            margin: 10px auto;

            .problem-col {
                border: 1px solid #e6e6e6;
                border-radius: 8px;
                padding: 32px 20px;
                text-align: left;
                margin-bottom: 20px;

                &:nth-child(1) {
                    .hd {
                        &:before {
                            background: url(../assets/wenti_a.png) no-repeat;
                            content: '';
                            width: 68px;
                            height: 68px;
                            display: block;
                            margin-right: 10px;
                        }
                    }

                    background: #F2F5F5;
                }

                &:nth-child(2) {
                    background: #F2F5F5;

                    .hd {
                        &:before {
                            background: url(../assets/wenti_b.png) no-repeat;
                            content: '';
                            width: 68px;
                            height: 68px;
                            display: block;
                            margin-right: 10px;
                        }
                    }
                }

                &:nth-child(3) {
                    .hd {
                        &:before {
                            background: url(../assets/wenti_c.png) no-repeat;
                            content: '';
                            width: 68px;
                            height: 68px;
                            display: block;

                            margin-right: 10px;
                        }
                    }

                    background: #F2F5F5;
                }

                .hd {
                    font-size: 18px;
                    color: #333;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;

                    .hd-t {
                        flex: 1;
                    }

                    .hd-icon {
                        width: 18px;
                        height: 11px;

                        &.icon-down {
                            background: url('../assets/wenti_xia.png') no-repeat;
                            background-size: 100%;
                        }

                        &.icon-up {
                            background: url('../assets/wenti_shang.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                }

                .bd {
                    font-size: 15px;
                    padding: 0 15px;
                    line-height: 1.5;



                    .b-p {
                        color: #333;
                    }
                }
            }
        }
    }
}


@media screen and (max-width: 750px) {
    .problem-wrapper .problem-box .problem-list {
        width: 96%;
    }

    .problem-wrapper .problem-box .problem-list .problem-col {
        padding: 20px 12px;

        .hd {
            font-size: 15px;
            line-height: 1.5;
             .hd-icon{
                width:12px;
                height:8px;
             }
        }

        .bd {
            font-size: 14px;
        }

        &:nth-child(1) {
            .hd {
                &:before {
                    background-size: 100%;
                    width: 42px;
                    height: 42px;
                    margin-right: 5px;
                }
            }
        }

        &:nth-child(2) {
            .hd {
                &:before {
                    background-size: 100%;
                    width: 42px;
                    height: 42px;
                    margin-right: 5px;
                }
            }
        }

        &:nth-child(3) {
            .hd {
                &:before {
                    background-size: 100%;
                    width: 42px;
                    height: 42px;
                    margin-right: 5px;
                }
            }
        }

    }
}
</style>