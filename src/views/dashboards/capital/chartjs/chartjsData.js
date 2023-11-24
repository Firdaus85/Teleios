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
  InventoryChart: {
    data: {
      labels: ['2015', '2015', '2015', '2015'],
      datasets: [
        {
          label: 'Inventory Days Graph(%)',
          data: [-0.2, -0.22, -0.02, -0.01],
          backgroundColor: '#ffcf5c',
          borderColor: 'transparent',
          barThickness: 90,
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
              stepSize: 1,
              min: -0.3,
              max: 0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },
  PayableChart: {
    data: {
      labels: ['2015', '2015', '2015', '2015'],
      datasets: [
        {
          label: 'Payable Days Graph(%)',
          data: [-72, -32.99, -5.4, -3.04],
          backgroundColor: chartColors.blueLightColor,
          borderColor: 'transparent',
          barThickness: 90,
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
              stepSize: 20,
              min: -80,
              max: 0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },
  ReceivableChart: {
    data: {
      labels: ['2015', '2015', '2015', '2015'],
      datasets: [
        {
          label: 'Receivable Days Graph(%)',
          data: [14.4, 1.34, 2.16, 1.49],
          backgroundColor: chartColors.blueColor,
          borderColor: 'transparent',
          barThickness: 90,
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
              stepSize: 5,
              min: 0,
              max: 15,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },

  OperatingChart: {
    data: {
      labels: ['2015', '2015', '2015', '2015'],
      datasets: [
        {
          label: 'Operating Cycle Graph(%)',
          data: [14.2, 1.12, 2.15, 1.49],
          backgroundColor: chartColors.successColorShade,
          borderColor: 'transparent',
          barThickness: 90,
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
              stepSize: 5,
              min: 0,
              max: 15,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },

  ConversionChart: {
    data: {
      labels: ['2015', '2015', '2015', '2015'],
      datasets: [
        {
          label: 'Cash Conversion Cycle Graph(%)',
          data: [86.2, 34.11, 7.55, 4.52],
          backgroundColor: chartColors.greyColor,
          borderColor: 'transparent',
          barThickness: 90,
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
              stepSize: 20,
              min: 0,
              max: 100,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },
}
