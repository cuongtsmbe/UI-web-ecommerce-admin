import React, { PureComponent } from "react";
import branchApi from '../../api/branchApi';

class ComponentCategorySide extends PureComponent {    
    state = {
        branchs:[],
        minprice: 0,
        maxprice: 100000000
    }


    handleIncreaseMinPrice(minprice) {
        const index = 100000;
        minprice = minprice + index;
        this.setState({ minprice: minprice });
    }
    handleReduceMinPrice(minprice) {
        const index = 100000;
        minprice = minprice - index;
        this.setState({ minprice: minprice });
    }
    handleIncreaseMaxPrice(maxprice) {
        const index = 100000;
        maxprice = maxprice + index;
        this.setState({ maxprice: maxprice });
    }
    handleReduceMaxPrice(maxprice) {
        const index = 100000;
        maxprice = maxprice - index;
        this.setState({ maxprice: maxprice });
    }
    

    async getListBranch() {
        try {
            const response = await branchApi.getAll();
            const listBranchs = response.data;
            this.setState({branchs:listBranchs})
        } catch (error) {
            console.log('Fail to get list branchs'+error);
        }

    }

    async componentDidMount() {
        await this.getListBranch();
        // swal(`${JSON.stringify(this.branchs)}`)
    }
    render() {
        return (
            // <!-- ASIDE -->
            <div id="aside" className="col-md-3">
                {/* <!-- aside Widget --> */}
                <div className="aside">
                    <h3 className="aside-title">Thương Hiệu</h3>
                    <div className="checkbox-filter" id="chkBrand">
                        {
                            this.state.branchs.map((branch) =>
                            <div key={branch.id} className="input-checkbox">
                                <input className="checkBrand" type="checkbox" id={branch.id} value={branch.id} onChange={this.props.handleClickBrand} />
                                <label for={branch.id}>
                                    <span>                                        
                                    </span>
                                    {branch.ten_th}
                                </label>
                            </div>)
                        }
                    </div>
                </div>
                {/* <!-- /aside Widget --> */}

                {/* <!-- aside Widget --> */}
                <div className="aside">
                    <h3 className="aside-title">Giá</h3>
                    <small>Chọn khoảng giá</small><br /><br />
                    <div className="price-filter">
                        <div id="price-slider"></div>
                        <div className="input-number price-min">
                            <input type="number" min={0} name="minprice" value={this.state.minprice} />
                            <span className="qty-up" onClick={() => this.handleIncreaseMinPrice(this.state.minprice)}>+</span>
                            <span className="qty-down" onClick={() => this.handleReduceMinPrice(this.state.minprice)}>-</span>
                        </div>
                        <span>-</span>
                        <div className="input-number price-max">
                            <input type="number" max={100000000} name="maxprice" value={this.state.maxprice} />
                            <span className="qty-up" onClick={() => this.handleIncreaseMaxPrice(this.state.maxprice)}>+</span>
                            <span className="qty-down" onClick={() => this.handleReduceMaxPrice(this.state.maxprice)}>-</span>
                        </div>
                        <br /><br />
                        <button className="btn" id="btn_gia" onClick={() => this.props.handleApplyPrice(this.state.minprice, this.state.maxprice)}>Áp Dụng Giá</button>
                    </div>
                </div>
                {/* <!-- /aside Widget --> */}

                {/* <!-- aside Widget --> */}
                <div className="aside">
                    {/* <!-- <h3 className="aside-title">Đơn Vị</h3>
							<div className="checkbox-filter" id="chkDv">
									<?php
										$list=['Chai','Lon','Ly','Hộp','Thùng','Lốc'];
										foreach($list as $key => $value){
											echo '<div className="input-checkbox">
                                            <input className="checkDv" type="checkbox" id="'.'Dv'.$key.'" value="'.$value.'">
                                            <label for="'.'Dv'.$key.'">
                                                <span></span>
                                                '.$value.'
                                            </label>
                                        </div>';
										}
									?>
								
							</div> --> */}
                </div>
                {/* <!-- /aside Widget --> */}
            </div>
            // {/* <!-- /ASIDE --> */}
        )
    }
}

export default ComponentCategorySide