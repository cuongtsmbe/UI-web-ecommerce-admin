import './App.css';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ComponentUIFooter from './Component/UI/Footer';
import ComponentUIHeader from './Component/UI/Header';
import ComponentUISideBar from './Component/UI/SideBar';
import ScreenRoot from './Screen/Root';

// window.addEventListener("beforeunload",()=>localStorage.clear())
class App extends PureComponent {
  
  render() {
    return (
      <>
        {localStorage.getItem('isAuthenticated') === "true" ? <ComponentUIHeader /> : undefined}
        {localStorage.getItem('isAuthenticated') === "true" ? <ComponentUISideBar /> : undefined}
        <ScreenRoot />
        {localStorage.getItem('isAuthenticated') === "true" ? <ComponentUIFooter /> : undefined}
        <Link className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      </>
    );
  }
}

export default App;

