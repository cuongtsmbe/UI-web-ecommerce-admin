import React, { PureComponent } from 'react';


export class ComponentInfoCustomer extends PureComponent {
  render() {
    var customerDetails=this.props.customer;
      return (
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Thông tin khách hàng 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                <table className="table table-borderless datatable">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td ><span className='text-primary'>Mã Khách Hàng : </span></td>
                            <td> {customerDetails.Ma_khach_hang}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Tên khách hàng : </span></td>
                            <td> {customerDetails.Ten_khach_hang}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Email : </span></td>
                            <td> {customerDetails.Email}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Phone : </span></td>
                            <td> {customerDetails.Phone}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Địa chỉ : </span></td>
                            <td> {customerDetails.Dia_chi}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Ngày tạo hóa đơn : </span></td>
                            <td> {customerDetails.Ngay_dat}</td>
                        </tr>
                        <tr>
                            <td ><span className='text-primary'>Phương thức thanh toán : </span></td>
                            <td> {customerDetails.Phuong_thuc_thanh_toan}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>
      )
    }
  
}

export default ComponentInfoCustomer