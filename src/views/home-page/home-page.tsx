import React from 'react';
import { Breadcrumb, Divider, Typography } from 'antd';
import Helmet from 'react-helmet';
import Form from '@components/form';
import Table from '@components/table';
import Favicon from '@assets/favicon/x32.png';

const HomePage = () => (
  <>
    {/* Header start */}
    <Helmet>
      <title>React Antd</title>
      <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
    </Helmet>
    {/* Header end */}

    {/* section start */}
    <section>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Example Page</Breadcrumb.Item>
      </Breadcrumb>

      <Typography>
        <Typography.Title>Example With Search and Filter</Typography.Title>
      </Typography>

      <Form />

      <Divider />

      <Table />
    </section>
  </>
);

export default HomePage;
