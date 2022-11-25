import React, { PureComponent } from 'react'
import productApi from '../../api/productApi';
import { formatVND } from '../../utils/currencyVND';
import categoryApi from '../../api/categoryApi';
import branchApi from '../../api/branchApi';
import suplierApi from '../../api/suplierApi';
import imageApi from '../../api/imageApi';

export class ComponentCustomerCreateForm extends PureComponent {
    state = {
        ten_sp: undefined,
        don_gia: undefined,
        hinh_anh: undefined,
        noi_dung: undefined,
        manHinh: undefined,
        id_thuong_hieu: undefined,
        cpu: undefined,
        ram: undefined,
        card: undefined,
        hdd: undefined,
        pin: undefined,
        id_the_loai: undefined,
        id_nha_cc: undefined,
        so_luong: undefined,
        sl_da_ban: undefined,
        trangthai: undefined,
        product: {},
        categories: [],
        branchs: [],
        supliers: [],
        sizes: ['13.3', '13.4', '13.5', '14', '15.6', '16', '16.1', '17', '17.3'],
        cpus: ['Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3', 'Intel Celeron/Pentium', 'AMD','Apple M1 Pro, 200GB/s memory bandwidth', 'Apple M2, 100GB/s'],
        rams: ['RAM 32 GB', 'RAM 16 GB', 'RAM 8 GB', 'RAM 4 GB'],
        cards: ['GeForce GTX', 'GeForce RTX', 'GeForce MX', 'GeForce Quadro', 'Radeon RX'],
        hdds: ['SSD 2 TB', 'SSD 1 TB', 'SSD 512 GB', 'SSD 256 GB', 'HDD 1 TB trở lên'],
        resolutions: ['4K', '2K', 'Retina', 'Full HD', 'HD'],
        refreshRates: ['120Hz', '144Hz', '165Hz', '240Hz', '300Hz', '360Hz'],
        size: undefined,
        resolution: undefined,
        refreshRate: undefined,
        images:undefined,
        preview:undefined,
    }
    async componentDidMount() {
        await this.getCategory();
        await this.getBranch();
        await this.getSupliers();
        // const reponse = await productApi.getById(this.props.id);
        // const product = reponse.data[0];
        // this.setState({ product })
        // this.setState({ ten_sp: product.ten_sp })
        // this.setState({ don_gia: product.don_gia })
        // this.setState({ hinh_anh: product.hinh_anh })
        // this.setState({ noi_dung: product.noi_dung })
        // this.setState({ id_thuong_hieu: product.id_thuong_hieu })
        // this.setState({ manHinh: product.manHinh })
        // this.setState({ cpu: product.cpu })
        // this.setState({ ram: product.ram })
        // this.setState({ card: product.card })
        // this.setState({ hdd: product.oCung })
        // this.setState({ pin: product.pin })
        // this.setState({ id_the_loai: product.id_the_loai })
        // this.setState({ id_nha_cc: product.id_nha_cc })
        // this.setState({ so_luong: product.so_luong })
        // this.setState({ sl_da_ban: product.sl_da_ban })
        // this.setState({ trangthai: product.trangthai })
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
    async getSupliers() {
        const response = await suplierApi.get();
        const supliers = response.data;
        this.setState({ supliers });
    }

    handleCreate = async e => {
        // e.preventDefault();
        var params = {
            Ten_san_pham: this.state.ten_sp,
            Don_gia: this.state.don_gia,
            url_thumnail: this.state.hinh_anh,
            Noi_dung: this.state.noi_dung,
            Man_hinh: this.state.manHinh,
            Id_thuong_hieu: this.state.id_thuong_hieu,
            Cpu: this.state.cpu,
            Ram: this.state.ram,
            Card: this.state.card,
            O_cung: this.state.hdd,
            Pin: this.state.pin,
            Id_the_loai: this.state.id_the_loai,
            Id_nha_cung_cap: this.state.id_nha_cc,
            So_luong: this.state.so_luong,
            So_luong_da_ban: this.state.sl_da_ban,
            Status: this.state.trangthai
        }

        try {
            await productApi.create(params);
            await imageApi.add(60, this.state.images);
        } catch (error) {

        }
        // window.location.href = `/products/60/edit`
    }

    handleChangeInput = e => {
        if (e.target.value !== '-1') this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeScreen = e => {        
        const value = e.target.value;
        var screen = '';
        const sizes = this.state.sizes;
        const resolutions = this.state.resolutions;
        const refreshRates = this.state.refreshRates;
        for (var index = 0; index < sizes.length; index++) {
            if (String(this.state.manHinh).includes(this.state.sizes[index])) {
                if (this.state.size === undefined) this.setState({ size: this.state.sizes[index] });
                break;
            }
        }
        for (var index = 0; index < resolutions.length; index++) {
            if (String(this.state.manHinh).includes(this.state.resolutions[index])) {
                if (this.state.resolution === undefined) this.setState({ resolution: this.state.resolutions[index] });
                break;
            }
        }
        for (var index = 0; index < refreshRates.length; index++) {
            if (String(this.state.manHinh).includes(this.state.refreshRates[index])) {
                if (this.state.refreshRate === undefined) this.setState({ refreshRate: this.state.refreshRates[index] });
                break;
            }
        }
        if (value !== '-1') {
            this.setState({ [e.target.name]: value }, () => {
                if (this.state.size !== undefined) screen = screen + this.state.size + ' inch, ';
                if (this.state.resolution !== undefined) screen = screen + this.state.resolution + ', ';
                if (this.state.refreshRate !== undefined) screen = screen + this.state.refreshRate;
                this.setState({ manHinh: screen })
                console.log(this.state.size + ' ' + this.state.resolution + ' ' + this.state.refreshRate)
            });
        }

    }
    handleSelectFile = e =>{        
        if(!e.target.files || e.target.files.length ===0){
            this.setState({images:undefined, preview:undefined});
            return;
        }
        const numberOfFile = e.target.files.length;
        const files = e.target.files;
        var images = new FormData();
        var listFileName = [];
        for(var i=0;i<numberOfFile;i++){
            const fileName = URL.createObjectURL(files[i]);
            listFileName.push(fileName);
            images.append('ListPhoto',files[i],fileName);            
        }
        this.setState({images:images, preview:listFileName});
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thong tin san pham</h5>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Hình ảnh từ internet</label>
                                <input type="text" className="form-control" id="inputName5" name='hinh_anh' value={this.state.hinh_anh} onChange={this.handleChangeInput} required placeholder='Vd: https://cdn.tgdd.vn/Products/Images/44/253581/TimerThumb/macbook-pro-14-m1-pro-2021-8-core-cpu.jpg' />
                                {this.state.hinh_anh?<img src={this.state.hinh_anh} alt='Hinh anh san pham' style={{ height: '100px' }}></img>:<></>}
                            </div>
                            <div className="col-md-12">
                                <label for="inputNumber" className=" col-form-label">Hình ảnh</label>
                                <input className="form-control" type="file" id="formFile" name='uploadFile' onChange={this.handleSelectFile} multiple/>
                                {this.state.preview && this.state.preview.map(url =><img src={url} alt='Hinh anh san pham' style={{ height: '100px',padding:'5px' }}></img>) }
                            </div>
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Tên sản phẩm</label>
                                <input type="text" className="form-control" id="inputName5" name='ten_sp' value={this.state.ten_sp} onChange={this.handleChangeInput} required />
                            </div>
                            <div className="col-md-12">
                                <label for="inputName5" className="form-label">Đơn giá: {formatVND(Number(this.state.don_gia))}</label>
                                <input type="text" className="form-control" id="inputName5" name='don_gia' value={this.state.don_gia} onChange={this.handleChangeInput} required />
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">Thương hiệu</label>
                                <select id="inputState" className="form-select" name='id_thuong_hieu' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn thương hiệu...</option>
                                    {this.state.branchs.map(branch => {
                                        if (this.state.id_thuong_hieu === branch.id)
                                            return <option selected key={branch.id} value={branch.id}>{branch.ten_th}</option>
                                        return <option key={branch.id} value={branch.id}>{branch.ten_th}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">Thể loại</label>
                                <select id="inputState" className="form-select" name='id_the_loai' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn thể loại...</option>
                                    {this.state.categories.map(category => {
                                        if (this.state.id_the_loai === category.id)
                                            return <option selected key={category.id} value={category.id}>{category.ten_tl}</option>
                                        return <option key={category.id} value={category.id}>{category.ten_tl}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">Nhà cung cấp</label>
                                <select id="inputState" className="form-select" name='id_nha_cc' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn nhà cung cấp...</option>
                                    {this.state.supliers.map(suplier => {
                                        if (this.state.id_nha_cc === suplier.id)
                                            return <option selected key={suplier.id} value={suplier.id}>{suplier.ten_ncc}</option>
                                        return <option key={suplier.id} value={suplier.id}>{suplier.ten_ncc}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Số lượng</label>
                                <input type="number" className="form-control" id="inputSoluong" name='so_luong' value={this.state.so_luong} onChange={this.handleChangeInput} required />
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Kích thước (inch)</label>
                                <select id="inputState" className="form-select" name='size' onChange={this.handleChangeScreen}>
                                    <option value='-1'>Chọn Kích thước...</option>
                                    {this.state.sizes.map((size) => {
                                        if (String(this.state.manHinh).includes(size))
                                            return <option selected value={size}>{size}</option>
                                        return <option value={size}>{size}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Độ phân giải</label>
                                <select id="inputState" className="form-select" name='resolution' onChange={this.handleChangeScreen}>
                                    <option value='-1' >Chọn Độ phân giải...</option>
                                    {this.state.resolutions.map((resolution) => {
                                        if (String(this.state.manHinh).includes(resolution))
                                            return <option selected value={resolution}>{resolution}</option>
                                        return <option value={resolution}>{resolution}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Tần số quét</label>
                                <select id="inputState" className="form-select" name='refreshRate' onChange={this.handleChangeScreen}>
                                    <option value='-1' >Chọn Tần số quét...</option>
                                    {this.state.refreshRates.map((refreshRate) => {
                                        if (String(this.state.manHinh).includes(refreshRate))
                                            return <option selected value={refreshRate}>{refreshRate}</option>
                                        return <option value={refreshRate}>{refreshRate}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail5" className="form-label">Màn hình</label>
                                <input readOnly type="text" className="form-control" id="inputManHinh" name='manHinh' value={this.state.manHinh} required />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword5" className="form-label">PIN</label>
                                <input type="text" className="form-control" id="inputPin" name='pin' value={this.state.pin} onChange={this.handleChangeInput} required />
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">CPU</label>
                                <select id="inputState" className="form-select" name='cpu' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn CPU...</option>
                                    {this.state.cpus.map((cpu) => {
                                        if (this.state.cpu === cpu)
                                            return <option selected value={cpu}>{cpu}</option>
                                        return <option value={cpu}>{cpu}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label for="inputState" className="form-label">RAM</label>
                                <select id="inputState" className="form-select" name='ram' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn Ram...</option>
                                    {this.state.rams.map((ram) => {
                                        if (this.state.ram === ram)
                                            return <option selected value={ram}>{ram}</option>
                                        return <option value={ram}>{ram}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label for="inputState" className="form-label">Ổ Cứng</label>
                                <select id="inputState" className="form-select" name='hdd' onChange={this.handleChangeInput}>
                                    <option value='-1'>Chọn Ổ cứng...</option>
                                    {this.state.hdds.map((hdd) => {
                                        if (this.state.hdd === hdd)
                                            return <option selected value={hdd}>{hdd}</option>
                                        return <option value={hdd}>{hdd}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label for="inputPassword5" className="form-label">Nội dung</label>
                                <textarea className="form-control" style={{ height: "100px" }} name='noi_dung' value={this.state.noi_dung} onChange={this.handleChangeInput} required></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={this.handleCreate}>Tạo mới</button>
                                {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default ComponentCustomerCreateForm