import { useState } from 'react';
import { Container } from 'reactstrap';

import Entry from './components/Entry';
import Activities from './components/Activities';

function App() {
  const [epochTime, setEpochTime] = useState('400');
  const [epochs, setEpochs] = useState('10');
  const [isEntered, setIsEntered] = useState(false);
  const [animatedClass, setAnimatedClass] = useState("");

  const enter = () => {
    if (!isEntered) {
      setAnimatedClass('animate__fadeOut');
      setTimeout(() => {
        setAnimatedClass('animate__fadeIn');
        setIsEntered(true);
      }, 500);
    }
  }

  const goBack = () => {
    if (isEntered) {
      setAnimatedClass('animate__fadeOut');
      setTimeout(() => {
        setAnimatedClass('animate__fadeIn');
        setIsEntered(false);
      }, 500);
    }
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Container className="pt-5">
        <div className={`animate__animated ${animatedClass}`}>
          {!isEntered
            ? <Entry
              epochTime={epochTime}
              setEpochTime={setEpochTime}
              epochs={epochs}
              setEpochs={setEpochs}
              enter={enter}
            />
            : <Activities
              time={parseFloat(epochs) * parseFloat(epochTime)}
              goBack={goBack}
            />}
        </div>
      </Container>
    </div>
  );
}

export default App;
