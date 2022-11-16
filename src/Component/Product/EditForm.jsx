import React, { PureComponent } from 'react'
import productApi from '../../api/productApi';
import { formatVND } from '../../utils/currencyVND';
import categoryApi from '../../api/categoryApi';
import branchApi from '../../api/branchApi';

export class ComponentProductEditForm extends PureComponent {
    state = {
        ten_sp: undefined,
        don_gia: undefined,
        hinh_anh: undefined,
        noi_dung: undefined,
        manHinh: undefined,
        id_thuong_hieu:undefined,
        cpu: undefined,
        ram: undefined,
        card: undefined,
        oCung: undefined,
        pin: undefined,
        id_the_loai: undefined,
        id_nha_cc: undefined,
        so_luong: undefined,
        sl_da_ban: undefined,
        trangthai: undefined,
        product: {},
        categories: [],
        branchs: [],
        manHinh: ['13.3', '13.4', '13.5', '14', '15.6', '16', '16.1', '17', '17.3'],
        cpu: ['Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3', 'Intel Celeron/Pentium', 'AMD'],
        ram: ['32 GB', '16 GB', '8 GB', '4 GB'],
        card: ['GeForce GTX', 'GeForce RTX', 'GeForce MX', 'GeForce Quadro', 'Radeon RX'],
        oCung: ['SSD 2 TB', 'SSD 1 TB', 'SSD 512 GB', 'SSD 256 GB', 'HDD 1 TB trở lên'],
        doPhanGiai: ['4K', '2K', 'Retina', 'Full HD', 'HD'],
        tanSo: ['120 Hz', '144 Hz', '165 Hz', '240 Hz', '300 Hz', '360 Hz']
    }
    async componentDidMount() {
        await this.getCategory();
        // await this.getBranch();
        const reponse = await productApi.getById(this.props.id);
        const product = reponse.data[0];
        this.setState({ product })
        this.setState({ten_sp:product.ten_sp})
        this.setState({don_gia:product.don_gia})
        this.setState({hinh_anh:product.hinh_anh})
        this.setState({noi_dung:product.noi_dung})
        this.setState({id_thuong_hieu:product.id_thuong_hieu})
        this.setState({manHinh:product.manHinh})
        this.setState({cpu:product.cpu})
        this.setState({ram:product.ram})
        this.setState({card:product.card})
        this.setState({oCung:product.oCung})
        this.setState({pin:product.pin})
        this.setState({id_the_loai:product.id_the_loai})
        this.setState({id_nha_cc:product.id_nha_cc})
        this.setState({so_luong:product.so_luong})
    }
    async getCategory() {
        const response = await categoryApi.get();
        const categories = response.data;
        this.setState({ categories });
    }
    async getBranch() {
        const response = await branchApi.get();
        const branchs = response.data;
        this.setState({ branchs });
    }

    handleSubmitEdit = e => {
        e.preventDefault();
        // window.location.href = `/products/60/edit`
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thong tin san pham</h5>

                        {/* <!-- Multi Columns Form --> */}
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Hình ảnh</label>
                                <input type="text" className="form-control" id="inputName5" name='hinh_anh' value={this.state.hinh_anh}  />
                                <img src={this.state.hinh_anh} alt='Hinh anh san pham' style={{ height: '100px' }}></img>
                            </div>
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Tên sản phẩm</label>
                                <input type="text" className="form-control" id="inputName5" name='ten_sp' value={this.state.ten_sp} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Đơn giá</label>
                                <input type="text" className="form-control" id="inputName5" name='don_gia' value={formatVND(Number(this.state.don_gia))} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Thương hiệu</label>
                                <input type="text" className="form-control" id="inputEmail5" name='id_thuong_hieu' value={this.state.id_thuong_hieu} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword5" className="form-label">Thể loại</label>
                                <input type="text" className="form-control" id="inputPassword5" name='id_the_loai'
                                    value={this.state.categories.map(category =>
                                        (category.id === this.state.id_the_loai) ? category.ten_tl : undefined
                                    )}
                                />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Nhà cung cấp</label>
                                <input type="text" className="form-control" id="inputEmail5" name='id_nha_cc' value={this.state.id_nha_cc} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Số lượng</label>
                                <input type="text" className="form-control" id="inputEmail5" name='so_luong' value={this.state.so_luong} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Màn hình</label>
                                <input type="text" className="form-control" id="inputEmail5" name='manHinh' value={this.state.manHinh} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword5" className="form-label">PIN</label>
                                <input type="text" className="form-control" id="inputPassword5" name='pin' value={this.state.pin} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">RAM</label>
                                <input type="text" className="form-control" id="inputEmail5" name='ram' value={this.state.ram} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword5" className="form-label">Ổ Cứng</label>
                                <input type="text" className="form-control" id="inputPassword5" name='oCung' value={this.state.oCung} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputPassword5" className="form-label">Nội dung</label>
                                <textarea className="form-control" style={{ height: "100px" }} name='noi_dung' value={this.state.noi_dung}></textarea>
                            </div>
                            {/* <div className="col-12">
                                <label for="inputAddress5" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddres5s" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div> */}
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={this.handleSubmitEdit}>Cập Nhật</button>
                                {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                            </div>
                        </form>
                        {/* <!-- End Multi Columns Form --> */}

                        {/* <form>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Hình ảnh</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.hinh_anh} hidden />
                                    <img src={this.state.hinh_anh} alt='Hinh anh san pham' style={{ height: '100px' }}></img>
                                </div>
                            </div> */}

                        {/* <div className='row g-3'>
                           <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail5" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword5" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword5" />
                            </div>
                           </div><br/> */}

                        {/* <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Tên sản phẩm</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.ten_sp} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Đơn giá</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={formatVND(Number(this.state.don_gia))} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Thương hiệu</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.id_thuong_hieu} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Thể loại</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.id_the_loai} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Nội dung</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" style={{ height: "100px" }} value={this.state.noi_dung}></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Màn hình</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.manHinh} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">PIN</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.pin} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">RAM</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.ram} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputText" className="col-sm-2 col-form-label">Ổ Cứng</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.oCung} />
                                </div>
                            </div> */}

                        {/* <div className="row mb-3">
                                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputNumber" className="col-sm-2 col-form-label">Number</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="file" id="formFile" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputTime" className="col-sm-2 col-form-label">Time</label>
                                <div className="col-sm-10">
                                    <input type="time" className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label for="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                                <div className="col-sm-10">
                                    <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color" />
                                </div>
                            </div> */}

                        {/* <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                        <label className="form-check-label" for="gridRadios1">
                                            First radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <label className="form-check-label" for="gridRadios2">
                                            Second radio
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled />
                                        <label className="form-check-label" for="gridRadios3">
                                            Third disabled radio
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                                <div className="col-sm-10">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" for="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck2" checked />
                                        <label className="form-check-label" for="gridCheck2">
                                            Example checkbox 2
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Disabled</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value="Read only / Disabled" disabled />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Select</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Multi Select</label>
                                <div className="col-sm-10">
                                    <select className="form-select" multiple aria-label="multiple select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Submit Button</label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Submit Form</button>
                                </div>
                            </div> */}
                        {/* </form> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default ComponentProductEditForm