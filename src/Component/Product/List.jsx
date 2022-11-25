import React, { PureComponent } from 'react';
import productApi from '../../api/productApi';
import ComponentProductItem from './Item';
import swal from 'sweetalert';

export class ComponentProductList extends PureComponent {
  state = {
    products: [],
    search: undefined,
    totalPage: undefined,
    currentPage: undefined
  }
  async getListProducts() {
    try {
      const response = await productApi.get({ search: this.state.search, page: this.state.currentPage });
      const products = response.data;
      const page = response.TotalPage;
      this.setState({ products: products, totalPage: page });
    } catch (error) {
      console.log('Fail to get list products' + error);
    }
  }
  async componentDidMount() {
    await this.getListProducts();
  }
  handleSearch = async e => {
    this.setState({ [e.target.name]: e.target.value, currentPage: 1 })
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
  handlePaging = async e => {
    const currentPage = e.target.value;
    await this.setState({ currentPage });
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
            
            <div className='dataTable-top'>
              <div className="dataTable-dropdown">
                <label><div class="badge bg-primary text-wrap" >Trang hiện tại: </div>
                  <select className="btn-group btn  dropdown-toggle dataTable-selector  m-2" onChange={this.handlePaging}>
                    {Array.from({ length: this.state.totalPage }, (v, i) => i + 1).map((page) => {
                      if (page === this.state.currentPage) return (<option value={page} selected >{ page }</option>)
                      else return (<option value={page}>{ page }</option>)
                    })}
                  </select>
                </label>
              </div>
              <div className="dataTable-search">
                <input className="dataTable-input form-control" placeholder="Search..." type="text" name='search' value={this.state.search} onChange={this.handleSearch} />
              </div>

            </div>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'center', verticalAlign:'middle' }}>Mã sản phẩm</th>
                  <th scope="col" style={{verticalAlign:'middle'}}>Hình ảnh</th>
                  <th scope="col" style={{ textAlign: 'center', verticalAlign:'middle' }}>Tên sản phẩm</th>
                  <th scope="col" style={{ textAlign: 'center', verticalAlign:'middle' }}>Đơn giá</th>
                  <th scope="col" style={{ textAlign: 'center', verticalAlign:'middle' }}>Số lượng</th>
                  <th scope='col' style={{ textAlign: 'center', verticalAlign:'middle' }}><button className="btn btn-primary" onClick={this.goToCreateProductPage}>Tạo mới +</button></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.products.map(product => <ComponentProductItem product={product} handleDeleteProduct={(id) => this.handleDeleteProduct(id)} />)
                }
              </tbody>
            </table>

          </div>

        </div>
      </div>
    )
  }
}

export default ComponentProductList