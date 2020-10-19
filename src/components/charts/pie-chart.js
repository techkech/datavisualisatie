import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Pie
  },
  mounted() {
    this.renderPieChart()
  },
  methods: {
    renderPieChart() {
      this.renderChart(
        {
          labels: ['Nike', 'Adidas', 'Geen', 'Anders'],
          datasets: [
            {
              data: [11, 5, 5, 62],
              label: this.title,
              backgroundColor: [
                'rgba(226,20,45, 0.6)',
                'rgb(0,81,186, 0.6)',
                'rgb(232,208,30, 0.3)',
                'rgba(119,136,153, 0.3)'
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
