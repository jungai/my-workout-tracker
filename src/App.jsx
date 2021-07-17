import React, { useState } from 'react';
import { tw } from 'twind';

function App() {
  return (
    <div className={tw`h-screen grid place-content-center`}>
      <h1 className={tw`text-4xl text-red-400 underline`}>Hello Iu</h1>
    </div>
  );
}

export default App;
