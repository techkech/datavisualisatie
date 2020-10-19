import {
  HorizontalBar
} from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    HorizontalBar
  },
  mounted() {
    this.renderBarChart()
  },
  methods: {
    /*eslint 'no-console':0*/
    renderBarChart() {
      this.renderChart({
        labels: ['Nike', 'Adidas', 'Geen', 'Anders'],
        datasets: [{
          data: ['7.636363636', '5.8', '7.274193548', '7.6'],
          // label: this.label,
          backgroundColor: [
            'rgba(226,20,45,0.55)',
            'rgba(0,81,186,0.55)',
            'rgba(232,208,30,0.55)',
            'rgba(119,136,153,0.55)'
          ],
          borderColor: [
            'rgba(226,20,45,1)',
            'rgba(0,81,186,1)',
            'rgba(232,208,30,1)',
            'rgba(119,136,153,1)'
          ],
          borderWidth: 1
        }]
      }, {
        responsive: true,
        title: {
          display: true,
          text: this.title
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Lievelingsmerk",
              fontSize: 15,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              stepSize: 1,
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Hoe tevreden ben je met je leven?',
              fontSize: 15,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              stepSize: 1
            }
          }]
        },
        legend: {
          display: false

        }
      })
    }
  }
}
