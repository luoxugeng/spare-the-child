<template>
    <div id="provinceCriminalRecord">
        <div class="mv5 center">
            <div ref="mapbox" style="width:100%;height:600px;float:left;"></div>
<!--            <div ref="mapbox" class="w-100-l h-25 w-40-ns ml-0 ml-5-ns white georgia f4 lh-copy center  dib v-top" style="height:600px;float:left;"></div>-->
            <div class=" center w-100-l h-25 w-40-ns ml-0 ml-5-ns white georgia f4 lh-copy  dib v-top" style="height:600px;float:left;">
                <p class="white georgia f3 lh-copy measure center db mv3  ">2019年的记录细分到每个省如图.按案件的 绝对数量 进行染色的.但很明显，我忽略了每个省份的人口，省份面积差距都很大.只用绝对值不合适.</p>
            </div>
        </div>

    </div>
</template>

<script>
    import 'echarts/map/js/china.js'
    import echarts from "echarts";


    const option = {
        title: {
            text: '2019年各省份-案件数量',
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
            name: '记录数',
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
            roam: false,
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
            type: 'piecewise',
            show: true,
            min: 0,
            max: 280,
            // orient :'horizontal',
            // text: [500,0],
            // calculable: true,
            inRange: {
                // 区域图标样式
                symbol: 'rect',
                color: ['lightskyblue', 'yellow', 'orangered']
            },
            textStyle:{color  : 'white'}
        }],
        tooltip: {
            // 鼠标放上去显示内容
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
                    let list = response.body.data.list.map(item => ({name: item.name, value: item.crime_total_cnt }))
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