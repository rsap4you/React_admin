import React, { useState } from "react";
import { Row, Col, Card, Space } from 'antd';
import { BsFillBagHeartFill } from "react-icons/bs";
import { AnnualStatisticData } from './DefaultDashboardData';
import { Link } from 'react-router-dom'; 

const DefaultDashboard = () => {
  const [annualStatisticData] = useState(AnnualStatisticData);

  return (
    <>
      <Row gutter={16}>
        {annualStatisticData.map((elm, i) => (
          <Col xs={24} sm={12} md={12} lg={12} xl={6} key={i}>
            <Link to="/auth/userlist">
              <Card style={{ cursor: 'pointer' }}>
                <div className="card-body">
                  <Row gutter={16}>
                    <Col span={6}>
                      <p style={{ marginTop: '50%' }}><BsFillBagHeartFill style={{ fontSize: '48px', color: "blue" }} /></p>
                    </Col>
                    <Col span={18}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <h5 className="card-title" style={{ textAlign: 'end', fontSize: '18px' }}>{elm.title}</h5>
                        <br></br>
                        <p className="card-text" style={{ textAlign: 'end', fontStyle: '18px' }}>{elm.value}</p>
                      </Space>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DefaultDashboard;
