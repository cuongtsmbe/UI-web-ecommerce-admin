import React, { PureComponent } from 'react'
import PermissionDropDown from './PermissionDropDown'
import ItemInput from './ItemInput'
import staffApi from '../../api/StaffApi'
import AlertDialog from '../UI/AlertDialog'
export class ComponentStaffCreate extends PureComponent {
    state = {
        ten_nv:undefined,
        ten_dangNhap:undefined,
        matkhau:undefined,
        email:undefined,
        phone:undefined,
        id_quyen:undefined,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        
    }
    handleCreate = async e => {
         e.preventDefault();
        await this.createStaff();
        
    }
    async createStaff(){
        try {
            var  response = await staffApi.insertStaff({
                id_quyen:this.state.id_quyen,
                ten_dangNhap:this.state.ten_dangNhap,
                matkhau:this.state.matkhau,
                email:this.state.email,
                ten_nv:this.state.ten_nv,
                phone:this.state.phone,
            });
   
            if(response.status===201){
                this.setState({
                    ten_nv:'',
                    ten_dangNhap:'',
                    matkhau:'',
                    email:'',
                    id_quyen:undefined,
                    phone:'',
                    popup:{
                        message:"Thêm thành công."
                    }
                });
            }
            if(response.status===205){
                this.setState({popup:{message:"Thiếu username hoặc password"}});
            }
            if(response.status===210){
                this.setState({popup:{message:"Thông tin chưa đủ"}});
            }
            if(response.status===211){
                this.setState({popup:{message:"Quyền không thỏa mãn"}});
            }
            if(response.status===212){
                this.setState({popup:{message:"Thêm nhân viên không thành công"}});
            }
            if(response.status===500){
                this.setState({popup:{message:"Server Error"}});
            }
            if(response.status===217){
                this.setState({popup:{message:"Email exist"}});
            }
            if(response.status===208){
                this.setState({popup:{message:"Password quá yêu."}});
            }
        } catch (error) {
            this.setState({popup:{message:"Lỗi trong quá trình try vấn.Xin hãy thử lại"}});
            console.log('Fail  : '+error);
        }
    }
    //handle input ten khach hang
    handleChangeInputTenNV=(value)=>{
        this.setState({ten_nv:value});
    }
    //handle input username 
    handleChangeInputUsernameNV=(value)=>{
        this.setState({ten_dangNhap:value});
    }
    //handle input password 
    handleChangeInputPW=(value)=>{
        this.setState({matkhau:value});
    }
    //handle input Email
    handleChangeInputEmail=(value)=>{
        this.setState({email:value});
    }

    //handle input Phone
    handleChangeInputPhone=(value)=>{
        this.setState({phone:value});
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }
    //handle dropdown select permission
    handleChangeSelectedPermission=(value)=>{
        this.setState({id_quyen:value});
      }
    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm nhân viên</h5>
                        <form className="row g-3">
                            <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput nameInput="Tên nhân viên" name="ten_kh" value={this.state.ten_nv} handleChangeInput={(e)=>this.handleChangeInputTenNV(e.target.value)}/>
                                </div>
   
                                <div className="col-6">
                                    <ItemInput nameInput="Tên đăng nhập" name="ten_danhnhap" value={this.state.ten_dangNhap} handleChangeInput={(e)=>this.handleChangeInputUsernameNV(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Password" name="mat_khau" value={this.state.matkhau} handleChangeInput={(e)=>this.handleChangeInputPW(e.target.value)}/>
                                    </div>

                                    <div className="col-6">
                                        <ItemInput nameInput="Email" name="email" value={this.state.email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                    </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Phone" name="phone" value={this.state.phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <PermissionDropDown  value={this.state.id_quyen} handleChangeSelected={(e)=>this.handleChangeSelectedPermission(e.target.value)}/>
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

export default ComponentStaffCreate;