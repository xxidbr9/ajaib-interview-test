import React from 'react';
import { Breadcrumb, Divider, Typography } from 'antd';
import Form from '@components/form';
import Table from '@components/table';
import Head from '@components/head';

const HomePage = () => (
  <>
    {/* Header start */}
    <Head />
    {/* Header end */}

    {/* section start */}
    <section style={{ padding: '1rem 1.5rem' }}>
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
