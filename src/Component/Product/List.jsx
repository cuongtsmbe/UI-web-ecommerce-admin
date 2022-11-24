import React, { PureComponent } from 'react';
import productApi from '../../api/productApi';
import ComponentProductItem from './Item';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export class ComponentProductList extends PureComponent {
  state = {
    products: [],
    search: undefined
  }
  async getListProducts() {
    try {
      const response = await productApi.get({ search: this.state.search });
      const products = response.data;
      this.setState({ products });
    } catch (error) {
      console.log('Fail to get list products' + error);
    }
  }
  async componentDidMount() {
    await this.getListProducts();
  }
  handleSearch = async e => {
    this.setState({ [e.target.name]: e.target.value })
    await this.getListProducts();
  }
  async handleDeleteProduct(id) {
    swal('Sản phẩm sẻ bị xóa khỏi danh sách!', {
      buttons: {
        cancel: 'Đóng',
        catch: { text: 'Xóa', value: 'catch' }
      },
    }).then(async (value) => {
      switch (value) {
        case 'catch':
          try {
            await productApi.deleteById(id);
          } catch (error) {
            console.log('Fail to remove item ' + id + 'in cart.' + error);
          }
          await this.getListProducts();
          this.forceUpdate();
          break;
        default:
          break;
      }
    })

  }
  goToCreateProductPage = () => {
    window.location.href = '/products/create';
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
            <div className='dataTable-top'>
              <div className="dataTable-dropdown">
                <label>Trang
                  <select className="dataTable-selector">
                    <option value="5">5</option>
                    <option value="10" selected="">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </label>
              </div>
              <div className="dataTable-search">
                <input className="dataTable-input" placeholder="Search..." type="text" name='search' value={this.state.search} onChange={this.handleSearch} />
              </div>

            </div>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'center' }}>Mã sản phẩm</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Tên sản phẩm</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Đơn giá</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Số lượng</th>
                  <th scope='col' style={{ textAlign: 'center' }}><button className="btn btn-primary" onClick={this.goToCreateProductPage}>Tạo mới +</button></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.products.map(product => <ComponentProductItem product={product} handleDeleteProduct={(id) => this.handleDeleteProduct(id)} />)
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