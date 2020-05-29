<template>
    <div id="provinceCriminalRecordNormalized">
        <div class="mv5 center" >
            <div ref="mapbox" class="w-100-l h-25 w-40-ns ml-0 ml-5-ns white georgia f4 lh-copy center dib v-top" style="height:600px;float:left;"></div>
            <div class="w-100-l h-25 w-40-ns ml-0 ml-5-ns white georgia f4 lh-copy  center dib v-top" style="height:600px;float:left;">
                <p class="white georgia f3 lh-copy measure center db mv3">
                    当我们考虑了人口密度, 使用<a href="https://zh.wikipedia.org/wiki/%E7%8A%AF%E7%BD%AA%E7%8E%87" style="color: aqua;">犯罪率(每十万人潜在受害者数)</a>的口径计算, 分布如图.
                    我一直强调，这个数据只能是我们调查当前状况的冰山一角,不是现实.因为有很多案件不会走到法院裁决,甚至大多数人是习惯性沉默.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    import 'echarts/map/js/china.js'
    import echarts from "echarts";


    const option = {
        title: {
            text: '2019年各省份-犯罪率',
            left : '10%',
            top : '10%',
            textStyle:{
                color  : 'white',
                fontStyle: 'oblique',
                fontWeight:'bolder',
                fontSize: 25
            }
        },
        series: [{
            name: '犯罪率',
            type: 'map',
            map: 'china',
            label: {
                show: true,
                color: '#333',
                fontSize: 10,
            },
            itemStyle: {
                // 地图区域样式
                areaColor: '#eee'
            },
            // 鼠标滚轮效果
            roam: false,
            // 地图放大缩小
            zoom: 1.2,
            emphasis: {
                // 鼠标经过地图和字体样式
                label: {
                    color: '#fff',
                    fontSize: 12
                },
                itemStyle: {
                    areaColor: '#ccc'
                }
            },
            data: []
        }],
        visualMap: [{
            // 区域显示颜色
            type: 'piecewise',
            show: true,
            min:0.00,
            max:4.7,
            // orient :'horizontal',
            // text: ['High', 'Low'],
            calculable: true,
            inRange: {
                // 区域图标样式
                symbol: 'rect',
                color: ['lightskyblue', 'yellow', 'orangered']
            },
            textStyle:{color  : 'white'}
        }],
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            show: false
        }
    }
    export default {
        name: "ProvinceCriminalRecord",
        mounted () {
            this.getData()
            this.mycharts = echarts.init(this.$refs.mapbox)
            this.mycharts.setOption(option)
        },
        methods: {
            getData () {
                this.$http.get('static/case_distribution.json').then(function(response){
                    let list = response.body.data.list.map(item => ({name: item.name, value: item.crime_rate }))
                    option.series[0].data = list
                    this.mycharts.setOption(option)
                }).catch(function(response){
                    console.log(response)
                })
            }
        }
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