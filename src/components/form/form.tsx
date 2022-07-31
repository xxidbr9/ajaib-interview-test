import './form.style.less';

import React from 'react';
import {
  Button, Col, Form as AntdForm, Input, Row, Select, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const optionValues = ['All', 'Female', 'Male'];

const Form = () => {
  const [form] = AntdForm.useForm();

  const handleReset = () => {
    console.log('hello');
  };

  return (
    <AntdForm form={form} layout="vertical">
      <Input.Group size="default">
        <Row gutter={12}>
          <Col span={4}>
            <AntdForm.Item label="Search" labelCol={{ className: 'label' }}>
              <Input.Search
                name="search"
                placeholder="Search ..."
                enterButton={<SearchOutlined />}
                size="large"
              />
            </AntdForm.Item>
          </Col>

          <Col span={8}>
            <AntdForm.Item label="Gender" labelCol={{ className: 'label' }}>
              <Space>
                <Select
                  style={{ width: '300px' }}
                  size="large"
                  defaultValue="all"
                >
                  {optionValues.map((value) => (
                    <Select.Option
                      key={`select_${value}`}
                      value={value.toLowerCase()}
                    >
                      {value}
                    </Select.Option>
                  ))}
                </Select>
                <Button
                  size="large"
                  onClick={handleReset}
                  data-test="reset-btn"
                >
                  Reset Filter
                </Button>
              </Space>
            </AntdForm.Item>
          </Col>
        </Row>
      </Input.Group>
    </AntdForm>
  );
};

export default Form;
