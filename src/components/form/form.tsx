import './form.style.less';

import React from 'react';
import {
  Button, Col, Form as AntdForm, Input, Row, Select, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@utils/hooks';
import { rdxUserActions } from '@rdx/features/user-store';

const optionValues = ['All', 'Female', 'Male'];

/*
TODO

- [X] handle search debounce
- [X] handle search instant
- [X] handle gender change
- [X] handle reset

*/
const Form = () => {
  const [form] = AntdForm.useForm();
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) dispatch(rdxUserActions.setSearchDebounce(value));
    if (value === '') dispatch(rdxUserActions.setSearchKeyword(value));
  };

  const handleSearch = (value: string) => {
    dispatch(rdxUserActions.setSearchKeyword(value));
  };

  const handleGenderChange = (value: string) => {
    dispatch(rdxUserActions.setGender(value));
  };

  const handleReset = () => {
    form.resetFields();
    dispatch(rdxUserActions.resetFilter());
  };

  return (
    <AntdForm form={form} layout="vertical">
      <Input.Group>
        <Row gutter={12}>
          <Col span={4}>
            <AntdForm.Item
              name="search"
              label="Search"
              labelCol={{ className: 'label' }}
            >
              <Input.Search
                name="search"
                placeholder="Search ..."
                enterButton={<SearchOutlined />}
                size="large"
                onChange={handleSearchChange}
                onSearch={handleSearch}
              />
            </AntdForm.Item>
          </Col>

          <Col span={8}>
            <AntdForm.Item
              name="gender"
              label="Gender"
              labelCol={{ className: 'label' }}
            >
              <Space>
                <Select
                  style={{ width: '300px' }}
                  size="large"
                  defaultValue="all"
                  allowClear
                  onChange={handleGenderChange}
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
                  data-testid="reset-btn"
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
