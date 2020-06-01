<template>
    <div id="Commute">
        <h2 class="f-subheadline lh-title teko w-90 w-60-ns mv6 center tc" style="color: red;">施虐者减刑</h2>
        <div class="mv5">
            <div ref="mapbox" style="width:100%;height:600px;float:left;"></div>
            <blockquote class="white  f3 w-100 teko-body  center db mv5" style="width:100%;height:600px;float:left;">要强调的是,法律上有减刑的存在.但我之前一直不说. 在文书网使用关键字 "未成年人 儿童 幼女 猥亵 强奸" 组合搜索,2019年能得到的文书数量实际是 <strong> 4818 </strong>篇,前文说的 2455 只是有效判决.剩下的 2363 篇其实是关于减刑的.
                <ol type="1" class="white teko-body  w-100 w-90-ns  db mv5">
                    <li>只从数字来看，入狱后不惹事，减刑6个月似乎是一件大概率的事情</li>
                    <li>减刑的理由一般是: <i> 能认罪悔罪，遵守监规纪律，积极劳动 </i> </li>
                </ol>
            </blockquote>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts";
    const option = {
        title: {
            text: '2019年-减刑-时长分布',
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
            name: '减刑时长/月',
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
            name: '减刑人数',
            nameTextStyle: {color  : 'white',fontSize : 20},
            fontSize: 20,
            scale: true,
            axisLabel:{color  : 'white',fontSize: 20},
            splitLine:{
                show:true
            }
        },
        series: [{
            name: '减刑人数',
            type: 'bar',
            symbolSize: 20,
            data: [
                [6,402],[8,375],[7,331],[9,277],[5,216],[4,124],[3,102],[2,70],[1,41],[11,10],[12,10],[10,6],[18,6],[16,5],[15,3],[23,3],[58,2],[64,2],[14,1],[19,1],[20,1],[21,1],[28,1],[32,1],
            ],
        }]
    };



    export default {
        name: "Commute",
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