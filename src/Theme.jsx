import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const themes = [
  { background: 'red', text: 'green' },
  { background: 'orange', text: 'white' },
  { background: 'green', text: 'red' },
];

const App = () => {
  return (
      <ThemeSwitcher themes={themes} />
  );
};

export default App;