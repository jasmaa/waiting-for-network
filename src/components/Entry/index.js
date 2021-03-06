import { Button, Row } from 'reactstrap';
import * as pluralize from 'pluralize';

import style from './style.module.css';

/**
 * Epoch and epoch time entry
 * 
 * @param {*} param0 
 */
export default function Entry({ epochTime, setEpochTime, epochs, setEpochs, enter }) {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <div className="d-flex flex-row">
          <h3 className={style['header-text']}>
            While my model trains
            <input className={style['num-input']} value={epochs} onChange={e => setEpochs(e.target.value)} />
            {pluralize('epoch', parseFloat(epochs))} for
          <input className={style['num-input']} value={epochTime} onChange={e => setEpochTime(e.target.value)} />
            {pluralize('second', parseFloat(epochTime))} per epoch...
        </h3>
        </div>
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        <Button color="info" onClick={enter}>Calculate!</Button>
      </Row>
    </>
  );
}