import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import AlertDialog from '../UI/AlertDialog'
import NCCDropDown from './nhacungcapDropdown'
import NVDropDown from './nhanvienDropdown'
import SanphamDropDown from './sanphamDropDown'
export class ComponentPhieuNhapCreate extends PureComponent {
    state = {
        GiaNhap:"",
        popup:{
            message:null
        },
        idncc:null,
        idnv:null,
        soluong:"",
        idsp:null,
        dssanpham:[]
    }
    async componentDidMount() {
        
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
    render() {
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
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'150px'}} onClick={this.handleCreate}>Add</button>
                            </div>
                            <div className="text-center">
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'250px'}} onClick={this.handleCreate}>Tạo phiếu nhập</button>
                            </div>
                        </form>
                        {(this.state.popup.message!=null)?<AlertDialog content={this.state.popup.message} handleRemoveMessage={this.handleRemoveMessage}/> : ""}
                    </div>
                </div>

            </div>
            </>
        )
    }
}

export default ComponentPhieuNhapCreate;