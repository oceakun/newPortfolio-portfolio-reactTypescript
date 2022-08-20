import React from 'react';
export interface ILayoutPageProps {}

const Layout: React.FunctionComponent<ILayoutPageProps> = (props) => {
  return (
    <div>
      <p style={{color:"white"}}>This is the Layout page</p>
      </div>
    );
};

export default Layout;