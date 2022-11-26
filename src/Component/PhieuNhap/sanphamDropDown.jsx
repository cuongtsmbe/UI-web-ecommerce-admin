import React, { PureComponent } from 'react';
import productApi from '../../api/productApi';
export default class SanphamDropDown extends PureComponent {
    state = {
        products: [],
        search: '',
    }
    async getListProducts() {
    try {
        const response = await productApi.get({ search: this.state.search });
        const products = response.data;
        this.setState({ products: products });
    } catch (error) {
        console.log('Fail to get list products' + error);
    }
    }
    async componentDidMount() {
    await this.getListProducts();
    }

    
  render(){

    return (
    <>
    <div className="row col-12">
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" value={this.props.valueSelected} onChange={(e)=>this.props.handleChangeSelected(e.target.value)}>
        <option  value="-1" >Chọn sản phẩm: </option>
        { 
                    this.state.products.length!==0 ?
                    this.state.products.map(Item=>   <option  value={Item.id} key={Item.id} className='text-primary'>{Item.ten_sp}</option> ):  <tr className="row m-3"><td>Danh sách trống.</td></tr>      
        }
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
