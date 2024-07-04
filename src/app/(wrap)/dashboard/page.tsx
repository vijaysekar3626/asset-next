import React from 'react'
import { Container,Col, Row } from 'reactstrap'
import Widgets from './Widgets'

function Dashboard() {
  return (
    <Container fluid className="mobile_container">
          <Row>
            <Col>
              <div className="h-100">
                <Row>
                  <Widgets/>
                </Row>
                <Row>
                  {/* <RecentOrders/>
                  <StoreVisits /> */}
                  
                </Row>
                <Row>
                {/* <ActiveData /> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default Dashboard