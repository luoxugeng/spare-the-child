<template>
    <div id="theVictim">
        <h1 class="f-subheadline lh-title teko w-90 w-60-ns mv6 center tc" style="color: red;">受害者&施虐者</h1>
        <div class="mv5">
            <p class="white georgia f3 lh-copy measure center db mv3">
               我这边获取到2019年关于强奸和猥亵的判决文书，最后有2455篇.我对文书的处理方式很简单粗暴: 一篇篇阅读,同时尝试寻找模式提高效率.下面对结果进行呈现.
            </p>
            <div ref="mapbox" style="width:100%;height:600px;float:left;"></div>
            <blockquote class="white  f3 w-100 teko-body   db mv5"  style="width:100%;height:600px;float:left;">对于受害者<br>
                <ol type="1" class="white teko-body  w-100 w-90-ns center db mv5">
                    <li>如图,各个年龄阶段都存在被侵害的可能.施虐者不会因为对方'年纪小'而放过.</li><br><br>
                    <li>有 854 个受害者不止一次收到侵害.也就是说，有34%的性侵害是带有持续性的 </li><br><br>
                    <li>在 1412 起强奸里面,最小的受害者只有3岁,有 39 起是轮奸,被轮奸的最小只有9岁 ;  </li><br><br>
                    <li>有 114 起造成女童怀孕, 比例大概是10% </li><br><br>
                    <li>有 1 个被害人自杀.(要知道,我们说的是一个不满14岁的小孩,她的人生甚至都还没开始) </li><br><br>
                    <li>有 18 起受害者是男童,男孩不吃亏这个观念还是早点抛弃为好 </li><br><br>
                </ol>
            </blockquote>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts";
    const option = {
        title: {
            text: '2019年受害者年龄-受害者数量',
            left : '10%',
            top : '10%',
            textStyle:{
                color  : 'white',
                fontStyle: 'oblique',
                fontWeight:'bolder',
                fontSize: 25
            }
        },
        color: ['#db3333'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                name: '年龄',
                nameLocation:'center',
                nameTextStyle: {fontSize : 20,color  : 'white'},
                fontSize:20,
                type: 'category',
                data: ['3岁', '4岁', '5岁', '6岁', '7岁', '8岁', '9岁', '10岁', '11岁', '12岁', '13岁', '14岁', '15岁'],
                axisLabel:{color  : 'white'},
                axisTick: {
                    alignWithLabel: true
                },
                splitLine:{
                    show:false
                },

            }
        ],
        yAxis: [
            {
                name: '受害人数',
                nameLocation:'end',
                nameTextStyle: {fontSize : 20,color  : 'white'},
                fontSize:20,
                type: 'value',
                axisLabel:{color  : 'white'},

            }
        ],
        series: [
            {
                name: '受害人数',
                type: 'bar',
                barWidth: '60%',
                data: [43,58,102,93,139,117,115,162,163,203,293,333,165],
                label: {
                    show: true,
                    position: 'inside'
                },
            }
        ]
    };


    export default {
        name: "TheVictim",
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