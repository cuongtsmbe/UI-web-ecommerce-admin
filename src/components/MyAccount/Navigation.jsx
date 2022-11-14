import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class MyAccountNavigation extends PureComponent {
  render() {
    return (
        <div className="col col-lg-2 col-sm-12" style={{padding: '2% 0 0 2%'}}>
        <div className="row ">
          <p>Tài khoản của
          </p><p>
            <strong>{localStorage.getItem('name')}</strong>
          </p></div>
        <div>
          <ul className="footer-links">
            <li><Link to='/myaccount' style={{color: '#D10024'}}><i className="fa fa-user-o" style={{color: '#D10024'}} />Tài Khoản Của Tôi</Link>
            </li>
            <li><Link to='/myorders' ><i className="fa fa-bars" style={{color: 'black'}} />Đơn Hàng Của Tôi</Link></li>
          </ul>
        </div>
      </div>
      
    )
  }
}

export default MyAccountNavigation