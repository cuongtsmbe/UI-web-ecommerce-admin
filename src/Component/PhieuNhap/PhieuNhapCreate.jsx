import React, { PureComponent } from 'react'
import phieunhapApi from '../../api/phieunhapApi'
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
            message:null
        },
        idncc:'',
        idnv:'',
        soluong:'',
        idsp:'',
        dssanpham:[],
        TongTien:0
    }
    async componentDidMount() {
        
    }
    async componentDidUpdate(prevProps, prevState){
        //2 object khác nhau thì true
        if(!_.isEqual(this.state.dssanpham, prevState.dssanpham)) {
            
        }
    }
    async createPN(){
        try{
            var response=await phieunhapApi.create
            ({
                id_ncc:this.state.idncc,
                id_nv:this.state.idnv,
                Danh_sach_san_pham:JSON.stringify(this.state.dssanpham),
                Tong_tien:this.state.TongTien,
                Trang_thai:1,
                Ghi_chu:"."
                });
            if(response.status===201){
                this.setState({GiaNhap:'',soluong:'',idncc:'',idnv:'',idsp:'',dssanpham:[],TongTien:0, popup:{
                    message:'Tạo phiếu nhập thành công.'
                }});
            }
            if(response.status===502){
                this.setState({GiaNhap:'',soluong:'',idsp:'', popup:{
                    message:'Tạo phiếu nhập thất bại do thiếu thông tin.'
                }});
            }
            if(response.status===501){
                this.setState({GiaNhap:'',soluong:'',idsp:'', popup:{
                    message:'Tạo phiếu nhập thất bại .Xem lại thông tin nhà cung cấp hoặc nhân viên tạo phiếu.'
                }});
            }
            if(response.status===404){
                this.setState({GiaNhap:'',soluong:'',idsp:'', popup:{
                    message:`Những ID sản phẩm không tồn tại trong DB : ${response.ListIDProductNoExist}`
                }});
            }
        }catch(err){
            console.log("Create phieu nhap fail: "+err)
            this.setState({popup:{
                message:"Tạo phiếu nhập thất bại. "
            }})
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
                So_luong:parseInt(this.state.soluong)
            });
            this.setState({GiaNhap:'',soluong:'',idsp:'',dssanpham:this.state.dssanpham,TongTien:this.state.TongTien+parseInt(this.state.GiaNhap)*parseInt(this.state.soluong)});
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