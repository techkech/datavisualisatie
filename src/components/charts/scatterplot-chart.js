// source: https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/ScatterExample.js
import {
  Scatter
} from "vue-chartjs"

/*eslint 'no-console':0*/

export default {
  extends: Scatter,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Scatter
  },
  mounted() {
    const adidasData = [{
        "Persoon": 1,
        "lievelingsmerk": "Adidas",
        data: {
          y: 11,
          x: 78
        }
      },
      {
        "Persoon": 2,
        "lievelingsmerk": "Adidas",
        data: {
          y: 16,
          x: 20
        }
      },
      {
        "Persoon": 3,
        "lievelingsmerk": "Adidas",
        data: {
          y: 22,
          x: 80
        }
      },
      {
        "Persoon": 4,
        "lievelingsmerk": "Adidas",
        data: {
          y: 24,
          x: 50
        }
      },
      {
        "Persoon": 5,
        "lievelingsmerk": "Adidas",
        data: {
          y: 28,
          x: 25
        }
      }
    ]

    const andersData = [{
        "Persoon": 6,
        "lievelingsmerk": "Anders",
        data: {
          y: 7,
          x: 40
        }
      },
      {
        "Persoon": 7,
        "lievelingsmerk": "Anders",
        data: {
          y: 7,
          x: 40
        }
      },
      {
        "Persoon": 8,
        "lievelingsmerk": "Anders",
        data: {
          y: 8,
          x: 25
        }
      },
      {
        "Persoon": 9,
        "lievelingsmerk": "Anders",
        data: {
          y: 9,
          x: 20
        }
      },
      {
        "Persoon": 10,
        "lievelingsmerk": "Anders",
        data: {
          y: 10,
          x: 60
        }
      },
      {
        "Persoon": 12,
        "lievelingsmerk": "Anders",
        data: {
          y: 10,
          x: 80
        }
      },
      {
        "Persoon": 13,
        "lievelingsmerk": "Anders",
        data: {
          y: 10,
          x: 130
        }
      },
      {
        "Persoon": 14,
        "lievelingsmerk": "Anders",
        data: {
          y: 10,
          x: 40
        }
      },
      {
        "Persoon": 15,
        "lievelingsmerk": "Anders",
        data: {
          y: 11.5,
          x: 80
        }
      },
      {
        "Persoon": 16,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 40
        }
      },
      {
        "Persoon": 17,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 70
        }
      },
      {
        "Persoon": 18,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 100
        }
      },
      {
        "Persoon": 19,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 20
        }
      },
      {
        "Persoon": 20,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 25
        }
      },
      {
        "Persoon": 21,
        "lievelingsmerk": "Anders",
        data: {
          y: 12,
          x: 60
        }
      },
      {
        "Persoon": 22,
        "lievelingsmerk": "Anders",
        data: {
          y: 13,
          x: 125
        }
      },
      {
        "Persoon": 23,
        "lievelingsmerk": "Anders",
        data: {
          y: 14,
          x: 45
        }
      },
      {
        "Persoon": 24,
        "lievelingsmerk": "Anders",
        data: {
          y: 14,
          x: 200
        }
      },
      {
        "Persoon": 25,
        "lievelingsmerk": "Anders",
        data: {
          y: 14,
          x: 120
        }
      },
      {
        "Persoon": 26,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 120
        }
      },
      {
        "Persoon": 27,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 40
        }
      },
      {
        "Persoon": 28,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 45
        }
      },
      {
        "Persoon": 29,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 200
        }
      },
      {
        "Persoon": 30,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 150
        }
      },
      {
        "Persoon": 31,
        "lievelingsmerk": "Anders",
        data: {
          y: 15,
          x: 75
        }
      },
      {
        "Persoon": 32,
        "lievelingsmerk": "Anders",
        data: {
          y: 15.6,
          x: 70
        }
      },
      {
        "Persoon": 33,
        "lievelingsmerk": "Anders",
        data: {
          y: 16,
          x: 30
        }
      },
      {
        "Persoon": 34,
        "lievelingsmerk": "Anders",
        data: {
          y: 16,
          x: 40
        }
      },
      {
        "Persoon": 35,
        "lievelingsmerk": "Anders",
        data: {
          y: 16,
          x: 100
        }
      },
      {
        "Persoon": 36,
        "lievelingsmerk": "Anders",
        data: {
          y: 17,
          x: 100
        }
      },
      {
        "Persoon": 37,
        "lievelingsmerk": "Anders",
        data: {
          y: 17.5,
          x: 275
        }
      },
      {
        "Persoon": 38,
        "lievelingsmerk": "Anders",
        data: {
          y: 17.6,
          x: 25
        }
      },
      {
        "Persoon": 39,
        "lievelingsmerk": "Anders",
        data: {
          y: 18,
          x: 20
        }
      },
      {
        "Persoon": 40,
        "lievelingsmerk": "Anders",
        data: {
          y: 18,
          x: 200
        }
      },
      {
        "Persoon": 41,
        "lievelingsmerk": "Anders",
        data: {
          y: 18,
          x: 80
        }
      },
      {
        "Persoon": 42,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 150
        }
      },
      {
        "Persoon": 43,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 10
        }
      },
      {
        "Persoon": 44,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 30
        }
      },
      {
        "Persoon": 45,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 60
        }
      },
      {
        "Persoon": 46,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 60
        }
      },
      {
        "Persoon": 47,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 200
        }
      },
      {
        "Persoon": 48,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 100
        }
      },
      {
        "Persoon": 49,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 80
        }
      },
      {
        "Persoon": 50,
        "lievelingsmerk": "Anders",
        data: {
          y: 20,
          x: 90
        }
      },
      {
        "Persoon": 51,
        "lievelingsmerk": "Anders",
        data: {
          y: 22,
          x: 200
        }
      },
      {
        "Persoon": 52,
        "lievelingsmerk": "Anders",
        data: {
          y: 22,
          x: 100
        }
      },
      {
        "Persoon": 53,
        "lievelingsmerk": "Anders",
        data: {
          y: 22.5,
          x: 70
        }
      },
      {
        "Persoon": 54,
        "lievelingsmerk": "Anders",
        data: {
          y: 22.5,
          x: 89
        }
      },
      {
        "Persoon": 55,
        "lievelingsmerk": "Anders",
        data: {
          y: 24,
          x: 100
        }
      },
      {
        "Persoon": 56,
        "lievelingsmerk": "Anders",
        data: {
          y: 24,
          x: 40
        }
      },
      {
        "Persoon": 57,
        "lievelingsmerk": "Anders",
        data: {
          y: 24,
          x: 100
        }
      },
      {
        "Persoon": 59,
        "lievelingsmerk": "Anders",
        data: {
          y: 25,
          x: 140
        }
      },
      {
        "Persoon": 60,
        "lievelingsmerk": "Anders",
        data: {
          y: 25,
          x: 150
        }
      },
      {
        "Persoon": 61,
        "lievelingsmerk": "Anders",
        data: {
          y: 25,
          x: 60
        }
      },
      {
        "Persoon": 62,
        "lievelingsmerk": "Anders",
        data: {
          y: 26,
          x: 30
        }
      },
      {
        "Persoon": 63,
        "lievelingsmerk": "Anders",
        data: {
          y: 32,
          x: 300
        }
      },
      {
        "Persoon": 64,
        "lievelingsmerk": "Anders",
        data: {
          y: 35,
          x: 70
        }
      },
      {
        "Persoon": 65,
        "lievelingsmerk": "Anders",
        data: {
          y: 36,
          x: 60
        }
      },
      {
        "Persoon": 66,
        "lievelingsmerk": "Anders",
        data: {
          y: 50,
          x: 200
        }
      },
      {
        "Persoon": 68,
        "lievelingsmerk": "Anders",
        data: {
          y: 52,
          x: 60
        }
      },
      {
        "Persoon": 69,
        "lievelingsmerk": "Anders",
        data: {
          y: 56,
          x: 300
        }
      }
    ]

    const geenData = [{
        "Persoon": 70,
        "lievelingsmerk": "Geen",
        data: {
          y: 7.4,
          x: 60
        }
      },
      {
        "Persoon": 71,
        "lievelingsmerk": "Geen",
        data: {
          y: 10,
          x: 50
        }
      },
      {
        "Persoon": 72,
        "lievelingsmerk": "Geen",
        data: {
          y: 19,
          x: 100
        }
      },
      {
        "Persoon": 73,
        "lievelingsmerk": "Geen",
        data: {
          y: 20,
          x: 90
        }
      },
      {
        "Persoon": 74,
        "lievelingsmerk": "Geen",
        data: {
          y: 40,
          x: 100
        }
      }
    ]
    const nikeData = [{
        "Persoon": 75,
        "lievelingsmerk": "Nike",
        data: {
          y: 8,
          x: 100
        }
      },
      {
        "Persoon": 76,
        "lievelingsmerk": "Nike",
        data: {
          y: 19,
          x: 200
        }
      },
      {
        "Persoon": 77,
        "lievelingsmerk": "Nike",
        data: {
          y: 20,
          x: 40
        }
      },
      {
        "Persoon": 78,
        "lievelingsmerk": "Nike",
        data: {
          y: 20,
          x: 50
        }
      },
      {
        "Persoon": 79,
        "lievelingsmerk": "Nike",
        data: {
          y: 20,
          x: 50
        }
      },
      {
        "Persoon": 80,
        "lievelingsmerk": "Nike",
        data: {
          y: 23,
          x: 40
        }
      },
      {
        "Persoon": 81,
        "lievelingsmerk": "Nike",
        data: {
          y: 24,
          x: 20
        }
      },
      {
        "Persoon": 82,
        "lievelingsmerk": "Nike",
        data: {
          y: 32,
          x: 80
        }
      },
      {
        "Persoon": 83,
        "lievelingsmerk": "Nike",
        data: {
          y: 48,
          x: 100
        }
      },
      {
        "Persoon": 84,
        "lievelingsmerk": "Nike",
        data: {
          y: 21,
          x: 30
        }
      },
      {
        "Persoon": 85,
        "lievelingsmerk": "Nike",
        data: {
          y: 25,
          x: 60
        }
      }
    ]

    this.renderChart({
      datasets: [{
          label: 'Nike',
          fill: false,
          borderColor: 'rgba(226,20,45,1)',
          backgroundColor: 'rgba(226,20,45,0.7)',
          labels: nikeData.map(function(persoon) {
            return persoon.Persoon
          }),
          data: nikeData.map(function(persoon) {
            return persoon.data
          })
        },
        {
          label: 'Adidas',
          fill: false,
          borderColor: 'rgba(0,81,186,1)',
          backgroundColor: 'rgba(0,81,186,0.7)',
          labels: adidasData.map(function(persoon) {
            return persoon.Persoon
          }),
          data: adidasData.map(function(persoon) {
            return persoon.data
          })
        },
        {
          label: 'Geen',
          fill: false,
          borderColor: 'rgba(232,208,30,1)',
          backgroundColor: 'rgba(232,208,30,0.6)',
          labels: geenData.map(function(persoon) {
            return persoon.Persoon
          }),
          data: geenData.map(function(persoon) {
            return persoon.data
          })
        },
        {
          label: 'Anders',
          fill: false,
          borderColor: 'rgba(119,136,153,1)',
          backgroundColor: 'rgba(119,136,153,0.6)',
          labels: andersData.map(function(persoon) {
            return persoon.Persoon
          }),
          data: andersData.map(function(persoon) {
            return persoon.data
          })
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: this.title
      },
      // radius: 10,
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'Grootte van de slaapkamer',
            fontSize: 15,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 60,
            stepSize: 10,
            // Include m²-sign in the ticks
            callback: function(value) {
              return value + 'm²'
            }
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hoeveelheid kledingstukken in bezit',
            fontSize: 15,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 300,
            stepSize: 25
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index]

            if (label) {
              label += ': '
            }
            let tooltipLabel = "Persoon/ID " + label +  ": " + tooltipItem.yLabel + 'm² kamerruimte' + ', voor ' + tooltipItem.xLabel + ' kledingstukken'
            return tooltipLabel
          }
        }
      }

    })
  }

}
