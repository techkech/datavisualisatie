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
        label: ['Nike', 'Adidas', 'Geen', 'Anders'],
        datasets: [{
            label: 'Nike',
            data: [7.636363636],
            backgroundColor: 'rgba(226,20,45,0.55)',
            borderColor: 'rgba(226,20,45,1)',
            borderWidth: 1
          },
          {
            label: 'Adidas',
            data: [5.8],
            backgroundColor: 'rgba(0,81,186,0.55)',
            borderColor: 'rgba(0,81,186,1)',
            borderWidth: 1
          },
          {
            label: 'Geen',
            data: [7.274193548],
            backgroundColor: 'rgba(232,208,30,0.55)',
            borderColor: 'rgba(232,208,30,1)',
            borderWidth: 1
          },
          {
            label: 'Anders',
            data: [7.6],
            backgroundColor: 'rgba(119,136,153,0.55)',
            borderColor: 'rgba(119,136,153,1)',
            borderWidth: 1
          }
        ]
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
        labels: {
          display: true
        }
      })
    }
  }
}
