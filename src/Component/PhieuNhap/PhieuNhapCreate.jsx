import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import AlertDialog from '../UI/AlertDialog'
import NCCDropDown from './nhacungcapDropdown'
import NVDropDown from './nhanvienDropdown'
import SanphamDropDown from './sanphamDropDown'
import ComponentItemProductPN from './ItemProductPN'
import _ from 'lodash';
export class ComponentPhieuNhapCreate extends PureComponent {
    state = {
        GiaNhap:'',
        popup:{
            message:''
        },
        idncc:'',
        idnv:'',
        soluong:'',
        idsp:'',
        dssanpham:[]
    }
    async componentDidMount() {
        
    }
    async componentDidUpdate(prevProps, prevState){
        //2 object khác nhau thì true
        if(!_.isEqual(this.state.dssanpham, prevState.dssanpham)) {
            
        }
    }
    handleCreate = async e => {
         e.preventDefault();
        await this.createPN();
    }
    handleChangeInputPricePN=(value)=>{
        this.setState({GiaNhap:value});
    }
    handleChangeInputSL=(value)=>{
        this.setState({soluong:value});
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }
    handleChangeSelectedIDNCC=(value)=>{
        this.setState({idncc:value});
    }
    handleChangeSelectedIDNV=(value)=>{
        this.setState({idnv:value});
    }
    handleChangeSelectedIDSP=(value)=>{
        this.setState({idsp:value});
    }
    handleThemSP=()=>{
        if(this.state.GiaNhap==='' || this.state.idsp==='' || this.state.soluong===''){
            this.setState({popup:{
                message:"Nhập thiếu thông tin sản phẩm. "
            }})
        }else{
            this.state.dssanpham.push({
                id_san_pham:this.state.idsp,
                Price:this.state.GiaNhap,
                So_luong:this.state.soluong
            });
            
            this.setState({GiaNhap:'',soluong:'',idncc:'',idnv:'',idsp:'',dssanpham:this.state.dssanpham});
        }
    }
    render() {
        console.log("render");
        return (
            <>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm nhà cung cấp</h5>
                        <form className="row g-3">
                            <div className='col-12 row m-2'>
                                <div className="col-6">
                                   <NCCDropDown valueSelected={this.state.idncc} handleChangeSelected={this.handleChangeSelectedIDNCC}/>
                                </div>
   
                                <div className="col-6">
                                    <NVDropDown valueSelected={this.state.idnv} handleChangeSelected={this.handleChangeSelectedIDNV}/>    
                                </div>
                            </div>
                            <div className='col-12 row m-2'>
                                    <div className="col-6">
                                    <label for="inputName5" className="form-label">Sản phẩm</label>
                                        <SanphamDropDown valueSelected={this.state.idsp} handleChangeSelected={this.handleChangeSelectedIDSP}/>    
                                    </div>
                                    
                                    <div className="col-4">
                                            <ItemInput nameInput="Giá nhập" name="Giá nhập" value={this.state.GiaNhap} handleChangeInput={(e)=>this.handleChangeInputPricePN(e.target.value)}/>
                                    </div>
                                    <div className="col-2">
                                        <ItemInput nameInput="Số lượng" name="SL" value={this.state.soluong} handleChangeInput={(e)=>this.handleChangeInputSL(e.target.value)}/>
                                    </div>
                                
                            </div>
                           
                            <div className="text-center">
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'200px'}} onClick={this.handleThemSP}>Add product</button>
                            </div>
                            <div className="text-center">
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'250px'}} onClick={this.handleCreate}>Tạo phiếu nhập</button>
                            </div>
                        </form>
                        {(this.state.popup.message!=null)?<AlertDialog content={this.state.popup.message} handleRemoveMessage={this.handleRemoveMessage}/> : ""}
                    </div>
               


                <div className="card-body">
            <h5 className="card-title"> Danh sách sản phẩm</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã sản phẩm  </th>
                  <th scope="col">Giá nhập</th>
                  <th scope="col">Số lượng</th>
                 
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.dssanpham.length!==0 ?
                    this.state.dssanpham.map(Item=> <ComponentItemProductPN key={Item.id}  Item={Item}/>) :  <tr className="row m-3"><td>Danh sách trống.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
        </div>
            </>
        )
    }
}

export default ComponentPhieuNhapCreate;