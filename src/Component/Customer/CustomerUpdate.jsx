import React, { PureComponent } from 'react'
import ItemInput from './ItemInput'
import customerApi from '../../api/customerApi'
import AlertDialog from '../UI/AlertDialog'
export class ComponentCustomerUpdate extends PureComponent {
    state = {
        id:this.props.idCustomer,
        ten_kh:null,
        ten_dangnhap:null,
        email:null,
        dia_chi:null,
        phone:null,
        trangthai:null,
        popup:{
            message:null
        }
    }
    async componentDidMount() {
        try {
            var  response = await customerApi.GetDetailCustomer({id:this.state.id});
            var  customerDetails = response.data[0];

            this.setState({
                ten_kh:customerDetails.ten_kh,
                ten_dangnhap:customerDetails.ten_dangnhap,
                email:customerDetails.email,
                dia_chi:customerDetails.dia_chi,
                phone:customerDetails.phone,
                trangthai:customerDetails.trangthai
            });
        } catch (error) {
            console.log('Fail to get detail customer : '+error);
        }
    }
    handleCreate = async e => {
        e.preventDefault();
        await this.updateCustomer();
        
    }
    async updateCustomer(){
        try {
            var  response = await customerApi.updateCustomer({query:{
                ten_kh:this.state.ten_kh,
                ten_dangnhap:this.state.ten_dangnhap,
                email:this.state.email,
                dia_chi:this.state.dia_chi,
                phone:this.state.phone,
                trangthai:this.state.trangthai
            }},this.state.id);
            console.log(response);
            if(response.status==204){
                this.setState({popup:{message:"SDT đã  được sử dụng."}});
            }
            if(response.status==203){
                this.setState({popup:{message:"Tài khoản Email đã được sử dụng."}});
            }
            if(response.status==201){
                this.setState({popup:{message:"Update thất bại. Cần xem nhập đầy đủ thông tin."}});
            }
            if(response.status==200){
                this.setState({
                    popup:{
                        message:"Success."
                    }
                });
                //chuyen ve trang danh sach khach hang
                window.location.href=`/customer`;

            }

        } catch (error) {
            console.log('Fail to update customer : '+error);
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
    handleChangeSelected=(value=>{
        this.setState({trangthai:value});
    })
    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Cập nhật thông tin khách hàng</h5>
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
                                        <ItemInput nameInput="Phone" name="phone" value={this.state.phone} handleChangeInput={(e)=>this.handleChangeInputPhone(e.target.value)}/>
                                    </div>

                                    <div className="col-6">
                                        <ItemInput nameInput="Email" name="email" value={this.state.email} handleChangeInput={(e)=>this.handleChangeInputEmail(e.target.value)}/>
                                    </div>
                            </div>
                            <div className='col-12 row'>
                                    <div className="col-6">
                                        <ItemInput nameInput="Địa chỉ" name="dia_chi" value={this.state.dia_chi} handleChangeInput={(e)=>this.handleChangeInputAddress(e.target.value)}/>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="col-md-12">
                                            <label for="inputName5" className="form-label">Trang thái</label>
                                                <select className="form-select " aria-label="Default select example" value={this.state.trangthai} onChange={(e)=>this.handleChangeSelected(e.target.value)}>
                                                    <option  value="1" className='text-primary'>Bình thường</option>
                                                    <option  value="-1" className='text-danger'>Block</option>
                                                </select>
                                        </div>
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