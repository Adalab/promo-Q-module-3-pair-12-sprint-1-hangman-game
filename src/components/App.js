import '../styles/App.scss';
//import blackboard from '../images/blackboard.jpg';
//import '../styles/fonts/KgTenThousandReasons-R1ll.ttf';
import { useState } from 'react';
function App () {
  const [numberOfErrors, setNumber] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const handleButton = (ev) => {
    setNumber(numberOfErrors + 1);
    return setNumber;
  }
  const handleInput = (ev) => {

    let regex = new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1}$');

    if (regex.test(ev.currentTarget.value)) {

      setLastLetter(ev.currentTarget.value);

    } else {
      setLastLetter('');
    }

  }
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');

    const htmlLi = wordLetters.map((letterItem) => {

      return <li className="letter">[letterItem]</li>
    });


  }

  return (

    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            {renderSolutionLetters()}
            <ul className="letters">

            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInput}
            />

          </form>
          <button onClick={handleButton}>Incrementar</button>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>

  );
}

export default App;
