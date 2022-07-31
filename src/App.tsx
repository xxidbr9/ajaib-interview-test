import React from 'react';
import Form from '@components/form';
import Table from '@components/table';
import { Breadcrumb, Divider, Typography } from 'antd';
import Helmet from 'react-helmet';
import Favicon from './assets/favicon/x32.png';

const App = () => (
  <>
    <Helmet>
      <title>React Antd</title>
      <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
    </Helmet>

    <div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Example Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Typography>
          <Typography.Title>Example With Search and Filter</Typography.Title>
        </Typography>
      </div>

      <div>
        <Form />
      </div>

      <Divider />

      <div>
        <Table />
      </div>
    </div>
  </>
);

export default App;
