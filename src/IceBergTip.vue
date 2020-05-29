<template>
    <div id="iceBergTip">
        <h1 class="f-subheadline lh-title teko w-90 w-60-ns mv6 center tc" style="color: red;"> 其实上面的都只是冰山一角</h1>
        <div class="mv5">
            <p class="white georgia f2 lh-copy measure center db mv4">2019年有效判决的文书数量是2455,检察院过去11个月的数量是20,000.我们看到的都真的是冰山一角.那实际上是多少呢？当我已经找不到进一步的事实数据时，我会尝试类比，演绎.</p>
            <p class="rtecenter" style="line-height: 20.8px;">
                <img alt="Graphic demonstrating that out of 1000 sexual assaults, 995 perpetrators will walk free. Out of every 1,000 rapes, 310 are reported to the police, 57 reports lead to arrest, 13 cases get referred to prosecutors, 7 cases will lead to a felony conviction, 6 rapists will be incarcerated."
                     height="1185" src="https://nemolaw.s3.amazonaws.com/blog/Out_Of_1000_SexualAssaults_053019.png" style="width: 600px; height: 494px; background-color: white;" align="middle"  width="1200" />
            </p>
            <p class="white teko-body f3 w-100    db mv5" > 这是来自美国<a href="https://www.rainn.org/statistics/criminal-justice-system" style="color: aqua">司法系统</a>的统计数据:
                每<a style="color: red">1000个</a>宗性侵受害者里,只有<a style="color: red">230</a>会报案,<a style="color: red">46</a>个人被捕,<a style="color: red">9人</a>被起诉,<a style="color: red">5人</a>被判刑,<a style="color: red">4.6人</a>进监狱.<br><br>
               <a>也就是说，从侵害到选择报案，已经有75%沉入黑暗. <a style="color: red">社会需要对受害者包容，让她们更有勇气</a></a><br>
                <a href="https://zhuanlan.zhihu.com/p/41232930" style="color: aqua"> 儿童保护制度建设研究：目标、策略与路径:书中根据中国数次局部综合分析，认为中国受到多种形式性侵犯的未成年人在10%以上,其中插入式性侵犯约为1%，与世界平均水平持平。</a><br>
                <a href="https://m.chinanews.com/wap/detail/zw/gn/2020/04-16/9158342.shtml" style="color: aqua">2020年4月16日,最高检：今年前三月起诉性侵未成年人犯罪4151人</a><br><br>
                <a style="color: red"> 即使报案了,走到判决结果下来，也可能也是个漫长的过程.</a>在我这个项目进行时,再次出现了<a href="" style="color: aqua">大头奶粉</a>事件，我尝试搜索一下当年<a href="https://zh.wikipedia.org/wiki/2008%E5%B9%B4%E4%B8%AD%E5%9B%BD%E5%A5%B6%E5%88%B6%E5%93%81%E6%B1%A1%E6%9F%93%E4%BA%8B%E4%BB%B6"  style="color: aqua"> 三聚氰胺毒奶粉 </a>事件.<br>
                三聚氰胺毒奶粉受害入院的儿童有40,000+,这还只是官方的数据.这么大的案件，诉讼照理都会公开，文书上以个人名义起诉的,我没看到.网上能搜到的是 <a href="https://zh.wikipedia.org/wiki/%E9%83%AD%E5%88%A9" style="color: aqua" >郭利案</a>.郭利的维权打了9年，搭进去自己5年牢狱生活后改判无罪.
            </p>
            <p class="f-subheadline lh-title teko w-90 w-60-ns mv3 center tc"  style="color: red"> 社会需要对受害者关怀，而不是二次伤害,这样她们或许才更有勇气站出来 </p>
            <p class="f-subheadline lh-title teko w-90 w-60-ns mv3 center tc"  style="color: red"> 正义要得到伸张，法律上应该要更有所作为 </p>
        </div>
        <div ref="mapbox" style="width:100%;height:600px;float:left;"></div>
    </div>
</template>

<script>
    import echarts from "echarts";

    const  option = {
        title: {
            text: '模拟案件到判决遇到的困难',
            textStyle:{
                color  : 'white',
                fontStyle: 'oblique',
                fontWeight:'bolder',
                fontSize: 25
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: [],
                links: [],
                // focusNodeAdjacency: true,
                levels: [{
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 2,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 3,
                    itemStyle: {
                        color: '#decbe4'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }],
                lineStyle: {
                    curveness: 0.5,
                    color: 'source',
                    opacity: 0.6
                }
            }
        ]
    };
    export default {
        name: "IceBergTip",
        mounted () {
            this.getData()
            this.mycharts = echarts.init(this.$refs.mapbox)
            this.mycharts.setOption(option)
        },
        methods: {
            getData () {
                this.$http.get('static/maybe.json').then(function(response){
                    option.series[0].data = response.body.nodes
                    option.series[0].links = response.body.links
                    this.mycharts.setOption(option)
                }).catch(function(response){
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>