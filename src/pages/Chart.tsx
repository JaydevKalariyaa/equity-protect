import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import TableOne from '../components/Tables/TableOne';

const Chart: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Logs" />

      <div >
        <TableOne/>
      </div>
    </DefaultLayout>
  );
};

export default Chart;
