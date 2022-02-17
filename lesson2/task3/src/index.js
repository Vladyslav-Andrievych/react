import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const renderTime = (time) => {
  const rootElem = document.querySelector('#root');

  const styles =
    new Date(time).getSeconds() % 2 === 0
      ? { backgroundColor: '#fff', color: '#000' }
      : { backgroundColor: '#000', color: '#fff' };

  const element = (
    <div className="seconds" style={styles}>
      Now is {new Date(time).getSeconds()}
    </div>
  );

  ReactDOM.render(element, rootElem);
};

setInterval(() => renderTime(new Date()), 1000);
