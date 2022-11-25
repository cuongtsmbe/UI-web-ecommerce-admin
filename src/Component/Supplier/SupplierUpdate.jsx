import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import SupplierApi from '../../api/suplierApi';
import AlertDialog from '../UI/AlertDialog'
export class ComponentCustomerUpdate extends PureComponent {
    state = {
        id:this.props.idNCC,
        ten_ncc:null,
        email:null,
        phone:null,
        diachi:null,
        website:null,
        logo:null,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        try {
            var  response = await SupplierApi.getOne({id:this.state.id});
            var  details = response.data[0];
            
            this.setState({
                ten_ncc:details.ten_ncc,
                email:details.email,
                phone:details.phone,
                diachi:details.diachi,
                website:details.website,
                logo:details.logo
            });
        } catch (error) {
            console.log('Fail to get detail supplier : '+error);
        }
    }
    handleCreate = async e => {
        e.preventDefault();
        await this.updateSupplier();
        
    }
    handleDelete= async e=>{
        e.preventDefault();
        try{
            var  response = await SupplierApi.delete(this.state.id);
            if(response.status===500){
                this.setState({popup:{message:"Delete không thành công."}});
            }
         
            if(response.status===200){
                this.setState({
                    popup:{
                        message:"Success."
                    }
                });
                //chuyen ve trang danh sach nhan vien
                window.location.href=`/supplier`;

            }
        }catch(err){
            console.log("delete supplier fail: "+err);
            this.setState({popup:{message:"Delete thất bại.Vui lòng thử lại sau."}});
           
        }
    } 
    async updateSupplier(){
        try {
            var  response = await SupplierApi.update({
                Ten_nha_cung_cap:this.state.ten_ncc,
                Dia_chi:this.state.diachi,
                Phone:this.state.phone,
                Logo_url:this.state.logo,
                Email:this.state.email,
                Website:this.state.website
             
            },this.state.id);
            console.log(response);
            if(response.status===500){
                this.setState({popup:{message:"Update không thành công."}});
            }
         
            if(response.status===200){
                this.setState({
                    popup:{
                        message:"Success."
                    }
                });
                //chuyen ve trang danh sach nhan vien
                window.location.href=`/supplier`;

            }

        } catch (error) {
            this.setState({popup:{message:"Update thất bại.Vui lòng thử lại sau."}});
            console.log('Fail to update supplier : '+error);
        }
    }
    //handle input ten khach hang
    handleChangeInputTenNCC=(value)=>{
        this.setState({ten_ncc:value});
    }
    //handle input dai chi 
    handleChangeInputDiaChi=(value)=>{
        this.setState({diachi:value});
    }
    //handle input Phone
    handleChangeInputPhone=(value)=>{
        this.setState({phone:value});
    }
    handleChangeInputLogo=(value)=>{
        this.setState({logo:value});
    }
    //handle input Email
    handleChangeInputEmail=(value)=>{
        this.setState({email:value});
    }
    handleChangeInputWebsite=(value)=>{
        this.setState({website:value});
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }
    render() {
        console.log("render update");
        return (
            <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Thêm nhà cung cấp</h5>
                    <form className="row g-3">
                        <div className='col-12 row'>
                            <div className="col-6">
                                <ItemInput nameInput="Tên nhà cung cấp" name="Ten_nha_cung_cap" value={this.state.ten_ncc} handleChangeInput={(e)=>this.handleChangeInputTenNCC(e.target.value)}/>
                            </div>

                            <div className="col-6">
                                <ItemInput nameInput="Địa chỉ" name="Dia_chi" value={this.state.diachi} handleChangeInput={(e)=>this.handleChangeInputDiaChi(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput nameInput="Phone" name="phone" value={this.state.phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
                                </div>

                                <div className="col-6">
                                    <ItemInput nameInput="Logo (url)" name="logo" value={this.state.logo} handleChangeInput={(e)=>this.handleChangeInputLogo(e.target.value)}/>
                                </div>
                        </div>
                        <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput nameInput="Email" name="Email" value={this.state.email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <ItemInput nameInput="Website" name="Website" value={this.state.website} handleChangeInput={(e)=>this.handleChangeInputWebsite(e.target.value)}/>
                                </div>
                        </div>
                       
                                <div className="text-center">
                                    <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'150px'}} onClick={this.handleCreate}>Update</button>
                                </div>
                  
                                <div className="text-center">
                                    <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-danger"  style={{ height: '40px',width:'150px'}} onClick={this.handleDelete}>Delete</button>
                                </div>
                        
                    </form>
                    {(this.state.popup.message!=null)?<AlertDialog content={this.state.popup.message} handleRemoveMessage={this.handleRemoveMessage}/> : ""}
                </div>
            </div>

        </div>
        )
    }
}

export default ComponentCustomerUpdate;