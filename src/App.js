import './App.css';
import React, { PureComponent } from 'react';
import UIHeaderNavigation from './components/UI/Header/Navigation';
import UIHeaderTop from './components/UI/Header/Top';
import UIHeaderMain from './components/UI/Header/Main';
import ScreensRoot from './screens/Root';
import UIFooter from './components/UI/Footer/Footer';
// window.addEventListener("beforeunload",()=>localStorage.clear())
class App extends PureComponent {
  
  render() {
    return (
      <div id="wapper">
        <div id="header">
          <UIHeaderTop />
          <UIHeaderMain />
          <UIHeaderNavigation />
        </div>
        <div id="content">
          <ScreensRoot/>
        </div>
        <div id="footer">
          <UIFooter/>
        </div>
      </div>
    );
  }
}

export default App;

