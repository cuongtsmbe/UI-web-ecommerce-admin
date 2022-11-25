import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import staffApi from '../../api/StaffApi'
import AlertDialog from '../UI/AlertDialog'
export class ComponentCustomerUpdate extends PureComponent {
    state = {
        id:this.props.idStaff,
        ten_nv:null,
        email:null,
        phone:null,
        ten_dangnhap:null,
        id_quyen:null,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        try {
            var  response = await staffApi.GetDetailStaff({id:this.state.id});
            var  staffDetails = response.data[0];

            this.setState({
                ten_nv:staffDetails.ten_nv,
                ten_dangnhap:staffDetails.ten_dangnhap,
                email:staffDetails.email,
                phone:staffDetails.phone,
                id_quyen:staffDetails.id_quyen
            });
        } catch (error) {
            console.log('Fail to get detail staff : '+error);
        }
    }
    handleCreate = async e => {
        e.preventDefault();
        await this.updateStaff();
        
    }
    async updateStaff(){
        try {
            var  response = await staffApi.updateStaff({query:{
                id:this.state.id,
                ten_nv:this.state.ten_nv,
                email:this.state.email,
                phone:this.state.phone,
                id_quyen:this.state.id_quyen
             
            }},this.state.id);
            console.log(response);
            if(response.status===203){
                this.setState({popup:{message:"Tài khoản Email đã được sử dụng."}});
            }
            if(response.status===201){
                this.setState({popup:{message:"Update thất bại. Cần xem nhập đầy đủ thông tin."}});
            }
            if(response.status===200){
                this.setState({
                    popup:{
                        message:"Success."
                    }
                });
                //chuyen ve trang danh sach nhan vien
                window.location.href=`/staff`;

            }

        } catch (error) {
            this.setState({popup:{message:"Update thất bại.Vui lòng thử lại sau."}});
            console.log('Fail to update staff : '+error);
        }
    }
    //handle input ten nhan vien
    handleChangeInputTenNV=(value)=>{
        this.setState({ten_nv:value});
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

    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Cập nhật thông tin nhân viên</h5>
                        <form className="row g-3">
                            <div className='col-12 row'>
                                <div className="col-6">
                                    <ItemInput type="edit" nameInput="Tên nhân vien" name="ten_kh" value={this.state.ten_nv} handleChangeInput={(e)=>this.handleChangeInputTenNV(e.target.value)}/>
                                </div>
   
                                <div className="col-6">
                                    <ItemInput type="readonly" nameInput="Tên đăng nhập" name="ten_danhnhap" value={this.state.ten_dangnhap} />
                                </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput type="edit" nameInput="Phone" name="phone" value={this.state.phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
                                    </div>

                                    <div className="col-6">
                                        <ItemInput type="edit" nameInput="Email" name="email" value={this.state.email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                    </div>
                            </div>
                        
                            <div className="text-center">
                                <button type="button" className="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'150px'}} onClick={this.handleCreate}>Update</button>
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