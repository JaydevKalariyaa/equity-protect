import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: 'Revenue',
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white text-center">
            Value Index
          </h4>
        </div>
        <br />
        <div>
          <h1 className="text-xl font-semibold text-black dark:text-white text-center">
            $600,000.00
          </h1>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <div>
        <h1 className="text-xl font-semibold text-black dark:text-white text-center">
          {' '}
          TERMINATED
        </h1>
        <br />
        <br />
        <p>
          31033 Calle Aragon, Temecula Subscription : Jan 24, 2024- Jan 24, 2025
          Cancelled at: 2024-01-24
        </p>
      </div>
      <br />
      <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        view details
      </button>
      <br />
      <button className="flex w-full justify-center rounded bg-success p-3 font-medium text-gray hover:bg-opacity-90">
        add subscription
      </button>
    </div>
  );
};

export default ChartTwo;
