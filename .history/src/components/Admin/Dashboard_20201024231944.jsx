import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import AppBarComponenet from './fragments/AppBar';
import HomeFragment from './fragments/Home';
import SideBarComponent from './fragments/SidebarComponent';

    
export default function ClippedDrawer() {
  const [home, setHome] = React.useState(true);
  const handleHomeClick = () => {
    setHome(true);
  };
  const handleOtherClick = () => {
    setHome(false);
  }
  return (
    <div>
      <CssBaseline />
      <AppBarComponenet />
      {/* {home ? <HomeFragment /> : null}   */}
      <SideBarComponent onHome={handleHomeClick} onOther={handleOtherClick}/>
      
    </div>
  );
}
