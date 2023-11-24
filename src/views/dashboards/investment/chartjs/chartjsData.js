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
  ReturnAssetsChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label',
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              stepSize: 0.5,
              min: -1.0,
              max: 1.0,
              fontColor: chartColors.labelColor,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
          },
        ],
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 50,
        },
      },
    },
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          data: [0, 0, 0, -0.54],
          label: 'Return on Assets Graph(%)',
          borderColor: chartColors.primaryColorShade,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.primaryColorShade,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.primaryColorShade,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
      ],
    },
  },

  EmployedChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label',
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              stepSize: 20,
              min: 0,
              max: 60,
              fontColor: chartColors.labelColor,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
          },
        ],
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 50,
        },
      },
    },
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          data: [1, 31.01, 51.67, 39.7],
          label: ' Return on Capital Employed Graph(%)',
          borderColor: chartColors.blueColor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.blueColor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
      ],
    },
  },
  InvestmentChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label',
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              stepSize: 5,
              min: 0,
              max: 15,
              fontColor: chartColors.labelColor,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
          },
        ],
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 50,
        },
      },
    },
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          data: [0.14, 9.35, 12.92, 4.14],
          label: ' Return on Investment Graph(%)',
          borderColor: chartColors.blueLightColor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.blueLightColor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueLightColor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
      ],
    },
  },

  EquityChart: {
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
              stepSize: 5,
              min: -15,
              max: 0,
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
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          label: 'Return on Equity Graph(%)',
          data: [0, 0, 0, -10.4],
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

  InvestedChart: {
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
              stepSize: 20,
              min: 0,
              max: 80,
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
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          label: 'Return on Equity Graph(%)',
          data: [1.6, 32.4, 73.67, 40.6],
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
}
