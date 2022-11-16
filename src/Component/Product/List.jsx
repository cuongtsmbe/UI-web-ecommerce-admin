import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../../api/productApi';
import ComponentProductItem from './Item';

export class ComponentProductList extends PureComponent {
    state = {
        products:[],
    }
    async getListProducts(){
        try {
            const response = await productApi.get();
            const products = response.data;
            this.setState({products});
        } catch (error) {
            console.log('Fail to get list products'+error);
        }
    }
    async componentDidMount(){
        await this.getListProducts();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">

          {/* <div className="filter">
            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><Link className="dropdown-item" to="#">Today</Link></li>
              <li><Link className="dropdown-item" to="#">This Month</Link></li>
              <li><Link className="dropdown-item" to="#">This Year</Link></li>
            </ul>
          </div> */}

          <div className="card-body">
            <h5 className="card-title">Tất cả sản phẩm</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã sản phẩm</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Số lượng</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.products.map(product=> <ComponentProductItem product={product}/>)
              }
                {/* <tr>
                  <th scope="row"><Link to="#">#2457</Link></th>
                  <td><Link to="#"><img src="assets/img/product-1.jpg" alt="" style={{ height: '50px' }} /></Link></td>
                  <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                  <td>$64</td>
                  <td><span className="badge bg-success">Approved</span></td>
                </tr>
                <tr>
                  <th scope="row"><Link to="#">#2147</Link></th>
                  <td>Bridie Kessler</td>
                  <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                  <td>$47</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
                <tr>
                  <th scope="row"><Link to="#">#2049</Link></th>
                  <td>Ashleigh Langosh</td>
                  <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                  <td>$147</td>
                  <td><span className="badge bg-success">Approved</span></td>
                </tr>
                <tr>
                  <th scope="row"><Link to="#">#2644</Link></th>
                  <td>Angus Grady</td>
                  <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                  <td>$67</td>
                  <td><span className="badge bg-danger">Rejected</span></td>
                </tr>
                <tr>
                  <th scope="row"><Link to="#">#2644</Link></th>
                  <td>Raheem Lehner</td>
                  <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                  <td>$165</td>
                  <td><span className="badge bg-success">Approved</span></td>
                </tr> */}
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentProductList