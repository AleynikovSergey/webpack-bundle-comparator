import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    datasets: [
      {
        label: 'Bar 01',
        data: [4, 7, 2, 4, 1, 6, 4],
        borderColor: 'rgba(0, 0, 0,0.0)',
        backgroundColor: '#ff3366',
        pointRadius: 0,
      },
      {
        label: 'Bar 02',
        data: [4, 10, 8, 3, 10, 3, 7],
        borderColor: 'rgba(0, 0, 0,0.0)',
        backgroundColor: '#f1c444',
        pointRadius: 0,
      },
      {
        label: 'Bar 03',
        data: [6, 12, 6, 10, 8, 4, 6],
        borderColor: 'rgba(0, 0, 0,0.0)',
        backgroundColor: ' #76C80E',
        pointRadius: 0,
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: true,
      backgroundColor: '#fff',
      bodyFontColor: '#000',
      intersect: false,
    },
    legend: {
      labels: {
        boxWidth: 14,
        usePointStyle: true,
      },
    },
    elements: {
      line: {
        fill: true,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            min: 0,
            max: 12,
            stepSize: 2,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} height={150} options={options} />
    </div>
  );
};

export default Graph;
