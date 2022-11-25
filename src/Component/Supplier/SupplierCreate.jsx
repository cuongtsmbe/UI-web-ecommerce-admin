import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import suplierApi from '../../api/suplierApi'
import AlertDialog from '../UI/AlertDialog'
export class ComponentSupplierCreate extends PureComponent {
    state = {
        Ten_nha_cung_cap:undefined,
        Dia_chi:undefined,
        Phone:undefined,
        Logo_url:undefined,
        Email:undefined,
        Website:undefined,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        
    }
    handleCreate = async e => {
         e.preventDefault();
        await this.createSupplier();
    }
    async createSupplier(){
        try {
            var  response = await suplierApi.create({
                Ten_nha_cung_cap:this.state.Ten_nha_cung_cap,
                Dia_chi:this.state.Dia_chi,
                Phone:this.state.Phone,
                Logo_url:this.state.Logo_url,
                Email:this.state.Email,
                Website:this.state.Website,
            });
            
            if(response.status===200){
                this.setState({
                    Ten_nha_cung_cap:'',
                    Dia_chi:'',
                    Phone:'',
                    Logo_url:'',
                    Email:'',
                    Website:'',
                    popup:{
                        message:"Thêm thành công."
                    }
                });
            }
            
            if(response.status===500){
                this.setState({popup:{message:"Thêm nhân viên không thành công"}});
            }
           
        } catch (error) {
            this.setState({popup:{message:"Lỗi trong quá trình try vấn.Xin hãy thử lại"}});
            console.log('Fail  : '+error);
        }
    }
    //handle input ten khach hang
    handleChangeInputTenNCC=(value)=>{
        this.setState({Ten_nha_cung_cap:value});
    }
    //handle input dai chi 
    handleChangeInputDiaChi=(value)=>{
        this.setState({Dia_chi:value});
    }
    //handle input Phone
    handleChangeInputPhone=(value)=>{
        this.setState({Phone:value});
    }
    handleChangeInputLogo=(value)=>{
        this.setState({Logo_url:value});
    }
    //handle input Email
    handleChangeInputEmail=(value)=>{
        this.setState({Email:value});
    }
    handleChangeInputWebsite=(value)=>{
        this.setState({Website:value});
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }

    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm nhà cung cấp</h5>
                        <form className="row g-3">
                            <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput nameInput="Tên nhà cung cấp" name="Ten_nha_cung_cap" value={this.state.Ten_nha_cung_cap} handleChangeInput={(e)=>this.handleChangeInputTenNCC(e.target.value)}/>
                                </div>
   
                                <div className="col-6">
                                    <ItemInput nameInput="Địa chỉ" name="Dia_chi" value={this.state.Dia_chi} handleChangeInput={(e)=>this.handleChangeInputDiaChi(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Phone" name="phone" value={this.state.Phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
                                    </div>

                                    <div className="col-6">
                                        <ItemInput nameInput="Logo (url)" name="logo" value={this.state.Logo_url} handleChangeInput={(e)=>this.handleChangeInputLogo(e.target.value)}/>
                                    </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Email" name="Email" value={this.state.Email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <ItemInput nameInput="Website" name="Website" value={this.state.Website} handleChangeInput={(e)=>this.handleChangeInputWebsite(e.target.value)}/>
                                    </div>
                            </div>
                            <div className="text-center">
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'150px'}} onClick={this.handleCreate}>Thêm</button>
                            </div>
                        </form>
                        {(this.state.popup.message!=null)?<AlertDialog content={this.state.popup.message} handleRemoveMessage={this.handleRemoveMessage}/> : ""}
                    </div>
                </div>

            </div>
        )
    }
}

export default ComponentSupplierCreate;