<template>
    <div id="theMotherFucker">
        <h1 class="f-subheadline lh-title teko w-90 w-60-ns mv6 center tc" style="color: red;">施虐者量刑时长</h1>
        <div class="mv5">
            <p class="white georgia f3 lh-copy measure center db mv3">
                下面是被告者最后判决的入狱时长.
            </p>
            <div ref="mapbox" style="width:100%;height:600px;float:left;"></div>
            <blockquote class="white  f3 w-40 teko-body  center db mv5" style="width:100%;height:600px;float:left;">
                <ol type="1" class="white teko-body f3 w-100 w-90-ns center db mv5">
                    <li>总体来看，有45%的人量刑是小于3年</li><br><br>
                    <li>判决了3年(36个月)人最多，有202个人.</li><br><br>
                    <li>为什么是3年,我的一个解释是: 这是强奸罪的最低量刑. </li><br><br>
                    <li>同时，猥亵儿童罪量刑不超过5年,量刑一般到2年或者3年.</li><br><br>
                    <li> 强奸最高到无期徒刑，我这边阅读到的2019记录数是13起. 判这么重基本是数罪并罚，如暴力,拐卖人口，强迫卖淫, 怀孕</li><br><br>
                </ol>
            </blockquote>
        </div>
    </div>
</template>

<script>

    import echarts from "echarts";
    const option = {
        title: {
            text: '2019年-被告人-入狱时长分布',
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
        xAxis: {
            name: '入狱时长/月',
            nameLocation:'center',
            fontSize:20,
            nameTextStyle: {color  : 'white',fontSize : 20},
            scale: true,
            axisLabel:{color  : 'white',fontSize: 20},
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        },
        yAxis: {
            name: '入狱人数',
            nameTextStyle: {color  : 'white',fontSize : 20},
            fontSize: 20,
            scale: true,
            axisLabel:{color  : 'white',fontSize: 20},
            splitLine:{
                show:true
            }
        },
        series: [{
            name: '入狱人数',
            type: 'bar',
            symbolSize: 20,
            data: [
                [2,1],[3,1],[4,3],[5,1],
                [6,33],[7,18],[8,40],
                [9,24],[10,32],[11,2],
                [12,117],[13,3],[14,41],
                [15,27],[16,16],[17,4],
                [18,115],[19,5],[20,21],
                [21,10],[22,23],[24,124],
                [25,1],[26,4],[27,10],
                [28,6],[29,3],[30,101],
                [32,11],[33,8],[34,11],
                [35,1],[36,202],[37,1],
                [38,9],[39,20],[40,3],
                [41,3],[42,77],[43,6],
                [44,8],[45,4],[46,4],
                [48,139],[50,11],[51,7],
                [52,2],[53,2],[54,102],
                [55,1],[56,6],[57,1],
                [58,9],[59,1],[60,119],
                [62,7],[63,4],[64,4],
                [65,4],[66,63],[68,3],
                [70,5],[72,94],[75,3],
                [76,3],[77,2],[78,46],
                [79,2],[80,2],[81,1],
                [82,5],[83,2],[84,66],
                [86,4],[87,1],[90,8],
                [92,3],[93,1],[94,4],
                [96,68],[102,9],[105,2],
                [106,1],[108,30],[114,7],
                [116,1],[120,42],[125,2],
                [126,10],[132,24],[135,2],
                [138,3],[140,1],[142,1],
                [144,20],[150,5],[156,36],
                [160,1],[162,2],[168,20],
                [174,1],[180,14],[192,3],
                [204,3],[216,6],[228,3],
                [240,9]
            ],
        }]
    };



    export default {
        name: "TheMotherFucker",
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