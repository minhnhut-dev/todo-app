import React from 'react';

function FirstLayout({children}) {
  return (
    <>
    <p>Đây là layout 1 nhe</p>
      {children}
    </>
  );
}

export default FirstLayout;