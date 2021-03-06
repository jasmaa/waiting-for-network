import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import * as pluralize from 'pluralize';

import { activities } from '../../activities';

/**
 * Activity listing
 * 
 * @param {*} param0 
 */
export default function Activities({ time, goBack }) {

  return (
    <div className="pt-3 pb-5">
      <h3 style={{ color: 'gray' }}>...I could</h3>
      {activities.map(({ generator, item, rate }, i) => {
        
        // Round time for formatting
        const roundedTotalTime = Math.round(100 * rate * time) / 100;
        const roundedRate = Math.round(100000 * rate) / 100000;

        return (
          <Row key={i} className="d-flex align-items-center my-5">
            <Col>
              <h2>{generator(roundedTotalTime, item)}</h2>
            </Col>
            <Col md="3">
              <h6 style={{ color: 'gray' }}>({roundedRate} {pluralize(item, roundedRate)}/sec)</h6>
            </Col>
          </Row>
        );
      })}
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
}