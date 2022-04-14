import { useEffect, useState } from 'react';
import { Div, H1, Span } from './style/GlobalStyle';

function App() {
  const [secondsAmount, setSecondsAmount] = useState(25 * 60); // passando minutesTotal para segundos

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('Cronometro encerrado.');
      return;
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1);
    }, 1000);
  }, [secondsAmount]);

  return (
    <Div type="cont" className={darkTheme}>
      <H1>Timer</H1>
      <Div type="timer">
        <Span>{minutes.toString().padStart(2, '0')}</Span>
        <Span>:</Span>
        <Span>{seconds.toString().padStart(2, '0')}</Span>
      </Div>
    </Div>
  );
}

export default App;
