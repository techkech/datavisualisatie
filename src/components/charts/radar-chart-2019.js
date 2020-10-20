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
        labels: ['Dataviz/ID', 'Frontend', 'Design Research', 'UX', 'Interaction Design', 'Visual Design'],
            datasets: [{
              label: 'Nike',
                data: [25, 47, 6, 33, 15, 53],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }, {      label: 'Adidas',
            data: [17, 35, 7, 38, 22, 55],
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
               suggestedMin: 50,
               suggestedMax: 100
           }
       }
      })
    }
  }
}
