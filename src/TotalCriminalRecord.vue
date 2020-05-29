<template>
    <div id="totalCriminalRecord">
        <h1 class="f-subheadline lh-title teko w-90 w-60-ns mv6 center tc" style="color: red;">记录数</h1>
        <div class="mv5">
            <div ref="mapbox" style="width:50%;height:600px;float:left;"></div>
            <div class="w-100 w-40-ns ml-0 ml-5-ns white georgia f4 lh-copy   dib v-top" style="width:50%;height:600px;float:left;">
                <p class="measure">如图是文书网,获取到过去五年的 强奸儿童和猥亵儿童各自的记录数量.一年数据量级是2000~3000,但是,按我前面说的，当事人可以以隐私为由,申请文书不公开.案件总体数量是偏少的.
                </p>
                <p class="measure">问题是,少了多少呢？我在这里引用另一个数据，也是来自政府网站2020年5月的数据:
                    <a href="https://www.spp.gov.cn/spp/zdgz/202005/t20200514_460970.shtml" style="color: aqua;">最高检：去年前11个月起诉性侵害未成年人犯罪约2万人</a>
                </p>
                <p class="measure" >也就是说，2019年前11个月，最高检报道因性侵害未成年人而被起诉的人有两万，但一整年下来，最后判决强奸的数量只有1298. 两边都是政府官网提供的数据,却相差一个数量级.两个数据之间的缺口,意味着什么？ </p>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts";

    const option = {
        title: {
            text: '强奸/猥亵裁决书数量',
            left : '10%',
            top : '10%',
            textStyle:{
                color  : 'white',
                fontStyle: 'oblique',
                fontWeight:'bolder',
                fontSize: 25
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [ '强奸', '猥亵'],
            textStyle:{color  : 'white'}
        },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        xAxis: [
            {
                type: 'category',
                data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
                axisLabel:{color  : 'white'}
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{color  : 'white'}
            }
        ],
        series: [
            {
                name: '强奸',
                type: 'bar',
                barWidth: "35%",
                stack: '案件',
                data: [779, 945, 1160, 1192, 1298],
                label: {
                    show: true,
                    position: 'inside'
                },
            },
            {
                name: '猥亵',
                type: 'bar',
                stack: '案件',
                data: [809, 951, 1078, 1357, 1471],
                label: {
                    show: true,
                    position: 'inside'
                },
            }
        ]
    };

    export default {
        name: "TotalCriminalRecord",
        mounted() {
            this.mycharts = echarts.init(this.$refs.mapbox)
            this.mycharts.setOption(option)
        },
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>