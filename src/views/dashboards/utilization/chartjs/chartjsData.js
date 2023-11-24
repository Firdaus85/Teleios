import themeConfig from '@themeConfig'

const $themeColors = themeConfig.themes.light

// colors
const chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)',
}

export default {
  lineAreaChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 0.2,
              min: 0.2,
              max: 1.0,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Asset Depretiation Ratio Graph(%)',
          data: [1, 0.36, 0.61, 1],
          lineTension: 0,
          backgroundColor: chartColors.blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
        },
      ],
    },
  },
  ProductiveAssetChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 5000,
              min: 0,
              max: 15000,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Productive Asset Investment Ratio(%)',
          data: [0.25, 0.2, 10126.84, 0.25],
          lineTension: 0,
          backgroundColor: chartColors.greyColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.greyColor,
        },
      ],
    },
  },

  CapexChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 2000,
              min: 0,
              max: 6000,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Capex Ratio Graph(%)',
          data: [0.14, 0.2, 5582.74, 0.14],
          lineTension: 0,
          backgroundColor: chartColors.successColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.successColorShade,
        },
      ],
    },
  },

  NonCurrentChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 0.1,
              min: 0.3,
              max: 0.8,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Capex Ratio Graph(%)',
          data: [0.72, 0.31, 0.38, 0.74],
          lineTension: 0,
          backgroundColor: chartColors.successColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.successColorShade,
        },
      ],
    },
  },
}
