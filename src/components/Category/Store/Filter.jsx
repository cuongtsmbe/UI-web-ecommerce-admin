import React, { PureComponent } from "react";

class ComponentCategoryStoreFillter extends PureComponent {
    state = {
        sapXep: ['Bán Chạy', 'Giá cao', 'Giá thấp'],
        manHinh: ['13.3', '13.4', '13.5', '14', '15.6', '16', '16.1', '17', '17.3'],
        cpu: ['Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3', 'Intel Celeron/Pentium', 'AMD'],
        ram: ['32 GB', '16 GB', '8 GB', '4 GB'],
        card: ['GeForce GTX', 'GeForce RTX', 'GeForce MX', 'GeForce Quadro', 'Radeon RX'],
        oCung: ['SSD 2 TB', 'SSD 1 TB', 'SSD 512 GB', 'SSD 256 GB', 'HDD 1 TB trở lên'],
        doPhanGiai: ['4K', '2K', 'Retina', 'Full HD', 'HD'],
        tanSo: ['120 Hz', '144 Hz', '165 Hz', '240 Hz', '300 Hz', '360 Hz']
    }



    render() {
        return (
            // {/* <!-- store top filter --> */}
            <div className="store-filter clearfix">
                <div className="store-sort">
                    <label>
                        <select className="input-select" id="sap_xep" onChange={this.props.handleSort}>
                            <option value="-1">SẮP XẾP</option>
                            {this.state.sapXep.map((item, index) => <option key={index} value={index}>{item}</option>)}
                        </select>
                        <select className="input-select" id="man_hinh" onChange={this.props.handleSreen}>
                            <option value="-1">MÀN HÌNH</option>
                            {this.state.manHinh.map((item, index) => <option key={index} value={item}>{item}{' inch'}</option>)}
                        </select>
                        <select className="input-select" id="cpu" onChange={this.props.handleCpu}>
                            <option value="-1">CPU</option>
                            {this.state.cpu.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <select className="input-select" id="ram" onChange={this.props.handleRam}>
                            <option value="-1">RAM</option>
                            {this.state.ram.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <select className="input-select" id="card" onChange={this.props.handleCard}>
                            <option value="-1">CARD ĐỒ HỌA</option>
                            {this.state.card.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <select className="input-select" id="o_cung" onChange={this.props.handleDrive}>
                            <option value="-1">Ổ CỨNG</option>
                            {this.state.oCung.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <select className="input-select" id="do_phan_giai" onChange={this.props.handleResolution}>
                            <option value="-1">ĐỘ PHÂN GIẢI</option>
                            {this.state.doPhanGiai.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        <select className="input-select" id="tan_so" onChange={this.props.handleRefreshRate}>
                            <option value="-1">TẦN SỐ QUÉT</option>
                            {this.state.tanSo.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                    </label>
                </div>
            </div>
            // {/* <!-- /store top filter --> */}
        )
    }
}

export default ComponentCategoryStoreFillter