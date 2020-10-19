import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Line
  },
  mounted() {
    this.renderLineChart()
  },
  methods: {
    renderLineChart() {
      this.renderChart(
        {
          labels: ['Nike', 'Adidas', 'Geen', 'Anders'],
          datasets: [
            {
              data: [11, 5, 5, 62],
              label: this.title,
              backgroundColor: [
                'rgba(226,20,45, 0.5)',
                'rgba(55,23,119, 0.5)',
                'rgba(211,211,211, 0.5)',
                'rgba(119,136,153, 0.4)'
              ],
              borderColor: [
                'rgba(226,20,45, 1)',
                'rgba(55,23,119, 1)',
                'rgba(211,211,211, 1)',
                'rgba(119,136,153, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        {
          responsive: true,
          title: {
            display: true,
            text: this.title
          },
          maintainAspectRatio: true
        }
      )
    }
  }
}
