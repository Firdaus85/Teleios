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
  OperatingChart: {
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
              stepSize: 0.2,
              min: 0,
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
          data: [0.1, 0.84, 0.62, 0.33],
          label: ' Operating Margin Graph(%)',
          borderColor: chartColors.blueColor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.blueColor,
          fill: false,
          pointRadius: 5,
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
  latestBarChart: {
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          data: [0.1, 0.84, 0.62, 0.33],
          backgroundColor: '#ffcf5c',
          borderColor: 'transparent',
          barThickness: 205,
        },
      ],
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 0,
          borderSkipped: 'bottom',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
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
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: false,
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
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 0.2,
              min: 0,
              max: 1.0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },
  RevenueChart: {
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
              stepSize: 0.1,
              min: 1.0,
              max: 1.02,
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
          data: [1.02, 1, 1, 1],
          label: ' Revenue Growth Graph(%)',
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

  NetChart: {
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
              stepSize: 0.01,
              min: -0.04,
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
          label: 'Net Margin Graph(%)',
          data: [0, 0, 0, -0.04],
          lineTension: 0,
          backgroundColor: chartColors.primaryColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.primaryColorShade,
        },
      ],
    },
  },

  net: {
    data: {
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          data: [0, 0, 0, -0.04],
          backgroundColor: chartColors.primaryColorShade,
          borderColor: 'transparent',
          barThickness: 15,
        },
      ],
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
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
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: false,
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
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 0.01,
              min: -0.04,
              max: 0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },

  EarningsChart: {
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
              min: 0,
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
      labels: [2015, 2016, 2017, 2018],
      datasets: [
        {
          label: 'Earnings Growth Graph(%)',
          data: [0, 0, 0, 0.98],
          lineTension: 0,
          backgroundColor: chartColors.successColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 2.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.successColorShade,
        },
      ],
    },
  },

  GrossChart: {
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
              min: 0,
              max: 0.6,
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
          data: [0, 0, 0.6, 0.51],
          lineTension: 0,
          backgroundColor: chartColors.greyColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 3,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.greyColor,
        },
      ],
    },
  },
}
