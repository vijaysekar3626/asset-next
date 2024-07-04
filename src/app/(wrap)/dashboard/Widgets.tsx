"use client";
import { dashboardWidgets } from "@/context/datajson";
import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col } from "reactstrap";

function Widgets() {
  return (
    <>
      {dashboardWidgets.map((item, key) => (
        <Col xl={3} md={6} key={key}>
          <Card className="card-animate border_15 dash-card">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 overflow-hidden">
                  <p className="text-uppercase fw-medium text-muted text-truncate mb-0 card-label">
                    {item.label}
                  </p>
                </div>
                {/* <div className="flex-shrink-0">
                                    <h5 className={"fs-14 mb-0 text-" + item.badgeClass}>
                                        {item.badge ? <i className={"fs-13 align-middle " + item.badge}></i> : null} {item.percentage} %
                                    </h5>
                                </div> */}
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <h4 className="fs-22 fw-semibold ff-secondary mb-4 counter-label">
                    <span className="counter-value" data-target="559.25">
                      <CountUp
                        start={0}
                        // prefix={item.prefix}
                        // suffix={item.suffix}
                        // separator={item.separator}
                        end={item.counter}
                        // decimals={item.decimals}
                        duration={4}
                      />
                    </span>
                  </h4>
                  {/* <Link to="#" className="text-decoration-underline">{item.link}</Link>    */}
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span
                    className={
                      "avatar-title rounded fs-3 bg-" + item.bgcolor + "-subtle"
                    }
                  >
                    <i className={`text-${item.bgcolor} ${item.icon}`}></i>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Widgets;
