import {
  Radar
} from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Radar
  },
  mounted() {
    this.renderRadarChart()
  },
  methods: {
    /*eslint 'no-console':0*/
    renderRadarChart() {
      this.renderChart({
        labels: ['Nike', 'Adidas', 'Geen', 'Anders'],
            datasets: [{
              label: '2020',
                data: [11, 5, 5, 62],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }, {      label: '2019',
            data: [10, 9, 3, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]

     },
      {
        responsive: true,
        title: {
          display: true,
          text: this.title
        },
        maintainAspectRatio: false,
        scale: {
           angleLines: {
               display: false
           },
           ticks: {
               suggestedMin: 0,
               max: 10,
               stepSize: 2
           }
       }
      })
    }
  }
}
