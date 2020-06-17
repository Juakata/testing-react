import React from 'react';

import Header from './components/header';
import Headerline from './components/headline';
import './app.scss';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headerline header="Posts" desc="Click the button to render posts!" />
      </section>
    </div>
  );
}

export default App;
