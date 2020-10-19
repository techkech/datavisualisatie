<template>
<section :id="category">
  <h2 class="nikeHeader">{{ title }}</h2>
  <div>
    <pie-chart title="Favoriete merk onder ID20-studenten" />
  </div>
  <article id="stats-1">
    <p class="nikeIntro">Nice. Dan heb je dus dezelfde voorkeur als..</p>
    <div>
      <h3>13% van de studenten in Information Design!</h3>
      <p>Zou je nog meer gemeen hebben met deze studenten dan alleen jullie lievelingsmerk?</p>
      <a class="nikeButton1" @click="[showStats2 = !showStats2, reverseButton1()]" href="#" v-scroll-to="'#stats-2'">{{ button1 }}</a>
    </div>
  </article>
  <transition name="fade">
    <article id="stats-2" v-if="showStats2">
      <h3>meer stats!</h3>
      <div>
        <line-chart title="Favoriete merk onder ID20-studenten" />
      </div>
      <a class="nikeButton1" v-on:click="[showStats3 = !showStats3, reverseButton2()]" href="#" v-scroll-to="'#stats-3'">{{ button2 }}</a>
    </article>
  </transition>
  <transition name="fade">
    <article v-if="showStats3">
      <h3 id="stats-3">Verhouding kleding/space</h3>
      <div>
        <scatter-chart title="Verhouding kleding/kastruimte ID20-studenten" />
      </div>
      <a class="nikeButton1" v-on:click="[showStats4 = !showStats4, reverseButton3()]" href="#" v-scroll-to="'#stats-4'">{{ button3 }}</a>
    </article>
  </transition>
  <transition name="fade">
    <article id="stats-4" v-if="showStats4">
      <h3>nog veel meer stats!</h3>
      <div>
        <bar-chart title="Favoriete merk onder ID20-studenten" />
      </div>
    </article>
  </transition>
</section>
</template>

<script>
/*eslint 'no-console':0*/
import BarChart from './charts/bar-chart.js'
import PieChart from './charts/pie-chart.js'
import LineChart from './charts/line-chart.js'
import ScatterChart from './charts/scatterplot-chart.js'

export default {
  name: "category",
  components: {
    BarChart,
    PieChart,
    LineChart,
    ScatterChart
  },
  data() {
    return {
      showStats2: true,
      showStats3: true,
      showStats4: true,
      button1: "Let's find out!",
      button2: "meer dingen",
      button3: "nog meer dingen"
    };
  },
  methods: {
    reverseButton1() {
      if (this.button1 === "Let's find out!") {
        this.button1 = this.button1.replace(/out/i, 'less');
        return
      } else if (this.button1 === "Let's find less!") {
        this.button1 = this.button1.replace(/less/i, 'out');
        return
      }
    },
    reverseButton2() {
      if (this.button2 === "meer dingen") {
        this.button2 = this.button2.replace(/meer/i, 'minder');
        return
      } else if (this.button2 === "minder dingen") {
        this.button2 = this.button2.replace(/minder/i, 'meer');
        return
      }
    },
    reverseButton3() {
      if (this.button3 === "nog meer dingen") {
        this.button3 = this.button3.replace(/meer/i, 'minder');
        return
      } else if (this.button3 === "nog minder dingen") {
        this.button3 = this.button3.replace(/minder/i, 'meer');
        return
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
