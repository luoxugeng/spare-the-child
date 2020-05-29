import Vue from 'vue'
import App from './App.vue'
import TotalCriminalRecord from "@/TotalCriminalRecord"
import ProvinceCriminalRecord  from "@/ProvinceCriminalRecord.vue"
import ProvinceCriminalRecordNormalized from "@/ProvinceCriminalRecordNormalized.vue"
import TheVictim from "@/TheVictim.vue";
import TheMotherFucker  from "@/TheMotherFucker";
import  Commute from "@/Commute.vue";
import Scene from "@/Scene.vue";
import IceBergTip from "@/IceBergTip.vue";
import Last from "@/Last.vue";
import VueResource from 'vue-resource';
// import ECharts from 'vue-echarts'

Vue.config.productionTip = true
Vue.use(VueResource)
// Vue.component('v-chart', ECharts)
new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(TotalCriminalRecord)
}).$mount('#totalCriminalRecord')

new Vue({
  render: h => h(ProvinceCriminalRecord)
}).$mount('#provinceCriminalRecord')


new Vue({
  render: h => h(ProvinceCriminalRecordNormalized)
}).$mount('#provinceCriminalRecordNormalized')


new Vue({
  render: h => h(TheVictim)
}).$mount('#theVictim')

new Vue({
  render: h => h(TheMotherFucker)
}).$mount('#theMotherFucker')

new Vue({
  render: h => h(Commute)
}).$mount('#Commute')

//到底发生了什么
new Vue({
  render: h => h(Scene)
}).$mount('#Scene')

// 意识到这只是冰山一角
new Vue({
  render: h => h(IceBergTip)
}).$mount('#iceBergTip')

//  最后
new Vue({
  render: h => h(Last)
}).$mount('#Last')

