import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import customerApi from '../../api/customerApi'
import AlertDialog from '../UI/AlertDialog'
export class ComponentCustomerCreate extends PureComponent {
    state = {
        ten_kh:null,
        ten_dangnhap:null,
        mat_khau:null,
        email:null,
        dia_chi:null,
        phone:null,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        
    }
    handleCreate = async e => {
         e.preventDefault();
        await this.createCustomer();
        
    }
    async createCustomer(){
        try {
            var  response = await customerApi.insertCustomer({query:{
                ten_kh:this.state.ten_kh,
                ten_dangnhap:this.state.ten_dangnhap,
                mat_khau:this.state.mat_khau,
                email:this.state.email,
                dia_chi:this.state.dia_chi,
                phone:this.state.phone,
            }});
            console.log(response);
            if(response.status===150){
                this.setState({popup:{message:"Email exist."}});
            }
            if(response.status===121){
                this.setState({popup:{message:"Username exist."}});
            }
            if(response.status===200){
                
                this.setState({
                    ten_kh:'',
                    ten_dangnhap:'',
                    mat_khau:'',
                    email:'',
                    dia_chi:'',
                    phone:'',
                    popup:{
                        message:"Success."
                    }
                });
            }
            if(response.status===500){
                this.setState({popup:{message:"Fail.Try again"}});
            }
            if(response.status===201){
                this.setState({popup:{message:response.message}});
            }
        } catch (error) {
            console.log('Fail to get list order : '+error);
        }
    }
    //handle input ten khach hang
    handleChangeInputTenKH=(value)=>{
        this.setState({ten_kh:value});
    }
    //handle input username 
    handleChangeInputUsernameKH=(value)=>{
        this.setState({ten_dangnhap:value});
    }
    //handle input password 
    handleChangeInputPW=(value)=>{
        this.setState({mat_khau:value});
    }
    //handle input Email
    handleChangeInputEmail=(value)=>{
        this.setState({email:value});
    }
    //handle input Address
    handleChangeInputAddress=(value)=>{
        this.setState({dia_chi:value});
    }
    //handle input Phone
    handleChangeInputPhone=(value)=>{
        this.setState({phone:value});
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm khách hàng</h5>
                        <form className="row g-3">
                            <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput nameInput="Tên khách hàng" name="ten_kh" value={this.state.ten_kh} handleChangeInput={(e)=>this.handleChangeInputTenKH(e.target.value)}/>
                                </div>
   
                                <div className="col-6">
                                    <ItemInput nameInput="Tên đăng nhập" name="ten_danhnhap" value={this.state.ten_dangnhap} handleChangeInput={(e)=>this.handleChangeInputUsernameKH(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Password" name="mat_khau" value={this.state.mat_khau} handleChangeInput={(e)=>this.handleChangeInputPW(e.target.value)}/>
                                    </div>

                                    <div className="col-6">
                                        <ItemInput nameInput="Email" name="email" value={this.state.email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                    </div>
                            </div>
                            <div className='col-12 row'>
                            <div className="col-6">
                                        <ItemInput nameInput="Địa chỉ" name="dia_chi" value={this.state.dia_chi} handleChangeInput={(e)=>this.handleChangeInputAddress(e.target.value)}/>
                                    </div>
                                    
                                    <div className="col-6">
                                        <ItemInput nameInput="Phone" name="phone" value={this.state.phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
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

export default ComponentCustomerCreate;