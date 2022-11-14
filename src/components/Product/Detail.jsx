import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import cartApi from "../../api/cartApi";
import { formatVND } from "../../utils/currencyVND";
import swal from "sweetalert";

class ComponentProductDetail extends PureComponent {
    state = {
        quantity: 1,
        remainingQuantityOfProducts: this.props.detailProduct.so_luong
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./js/main.js";
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src = "./js/slick.min.js";
        script1.type = 'text/javascript';
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "./js/popper.min.js";
        script2.type = 'text/javascript';
        script2.async = true;
        document.body.appendChild(script2);

        const script3 = document.createElement("script");
        script3.src = "./js/nouislider.min.js";
        script3.type = 'text/javascript';
        script3.async = true;
        document.body.appendChild(script3);

        const script4 = document.createElement("script");
        script4.src = "./js/jquery1.min.js";
        script4.type = 'text/javascript';
        script4.async = true;
        document.body.appendChild(script4);

        const script5 = document.createElement("script");
        script5.src = "./js/jquery.zoom.min.js";
        script5.type = 'text/javascript';
        script5.async = true;
        document.body.appendChild(script5);

        const script6 = document.createElement("script");
        script6.src = "./js/jquery.min.js";
        script6.type = 'text/javascript';
        script6.async = true;
        document.body.appendChild(script6);

        const script7 = document.createElement("script");
        script7.src = "./js/bootstrap.min.js";
        script7.type = 'text/javascript';
        script7.async = true;
        document.body.appendChild(script7);
    }
    increasingNo() {
        var index = 1;
        if ((this.state.remainingQuantityOfProducts - this.state.quantity) === 0){
            index = 0;
            swal({                
                text: "Vượt giới hạn cho phép!",
                icon: "error",  
                buttons:false,
                timer:800              
              });
        } 
        this.setState({ quantity: this.state.quantity + index });
    }
    reduceNo() {
        var index = 1;
        if ((this.state.remainingQuantityOfProducts - this.state.quantity + 1) === this.state.remainingQuantityOfProducts) index = 0;
        this.setState({ quantity: this.state.quantity - index });
    }
    async addToCart(id,quantity) {
        try {
            await cartApi.add(id,quantity);
            swal({                
                text: "Thêm thành công!",
                icon: "success",  
                buttons:false,
                timer:800              
              });
            // Thêm vào giỏ xong nhớ giảm số lượng trong state xuống (cập nhật lại remainingQuantityOfProducts trừ đi số lượng vừa thêm vào giỏ)
        } catch (error) {
            console.log('Fail to add cart' + error)
        }
    }
    render() {
        return (
            // <!-- SECTION -->
            <div className="section">                 
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* Product main img */}
                        <div className="col-md-5 col-md-push-2" >
                            <div id="product-main-img">
                                <div className="product-preview">
                                    <img src={this.props.detailProduct.hinh_anh} alt="" />
                                </div>
                                {/* <?php
                                
                                    echo'<div className="product-preview">
                                    <img src="'.$detailproduct['hinh_anh'].'" alt="" />
                                </div>';
							
						            ?> */}

                            </div>
                        </div>
                        {/* /Product main img */}

                        {/* Product thumb imgs */}
                        <div className="col-md-2  col-md-pull-5">
                            <div id="product-imgs">
                                {/* <?php
						    	// for($i=0;$i<4;$i++){
						    	// 	echo'<div className="product-preview">
						    	// 	<img src="'.$detailproduct['hinh_anh'].'" alt=""/>
						    	// </div>';
						    	// }
						        ?> */}
                                <div className="product-preview">
                                    <img src={this.props.detailProduct.hinh_anh} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* /Product thumb imgs */}

                        {/* Product details */}


                        <div className="col-md-5">
                            <div className="product-details">
                                <h2 className="product-name">{this.props.detailProduct.ten_sp}</h2>
                                <div>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <Link className="review-link" to="">{this.props.detailProduct.sl_da_ban} sản phẩm đã bán.</Link>
                                </div>
                                <div>
                                    <h3 className="product-price">{formatVND(this.props.detailProduct.don_gia)}
                                        <del className="product-old-price">{formatVND(this.props.detailProduct.don_gia)}</del></h3>
                                    <span className="product-available">còn hàng</span>
                                </div>
                                <p>{this.props.detailProduct.noi_dung}</p>


                                <div className="add-to-cart">
                                    <div className="qty-label">
                                        Số Lượng
                                        <div className="input-number">
                                            {/* <?php
                            $soLuongHienCoTrongGioHang=0;
                            if(isset($_SESSION['cart'][$id]))
                            $soLuongHienCoTrongGioHang=$_SESSION['cart'][$id]['qty'];
										?> */}
                                            <input type="number" id="qtyAdd" value={this.state.quantity} />
                                            <div id="sl_tonkho<?=$id?>" style={{ display: 'none' }}>
                                            </div>
                                            <span className="qty-up" onClick={() => this.increasingNo()}>+</span>
                                            <span className="qty-down" onClick={() => this.reduceNo()}>-</span>
                                        </div>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={() => { this.addToCart(this.props.detailProduct.id, this.state.quantity) }}><i
                                        className="fa fa-shopping-cart"></i> <span id="messAddCart<?=$id?>">Thêm vào
                                            giỏ</span></button>
                                </div>
                                <div id="tbQty" style={{ color: 'red' }}></div>


                                <ul className="product-links">
                                    <li>Danh mục:</li>

                                    <li><Link href="?act=category&id=<?=$listcate_pro['id_tl']?>">Ten the loai</Link></li>
                                    <li><Link href="">{this.props.detailProduct.ten_sp}</Link></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Chia sẽ:</li>
                                    <li><Link><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link><i className="fa fa-envelope"></i></Link></li>
                                </ul>

                            </div>
                        </div>
                        {/* /Product details */}


                        {/* Product tab */}
                        <div className="col-md-12">
                            <div id="product-tab">
                                {/* product tab nav */}
                                <ul className="tab-nav">
                                    <li className="active"><Link data-toggle="tab" href="#tab1">Thông Tin Sản Phẩm</Link></li>

                                </ul>
                                {/* /product tab nav */}

                                {/* product tab content */}
                                <div className="tab-content">
                                    {/* tab1  */}
                                    <div id="tab1" className="tab-pane fade in active">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table table-striped table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <td>MÀN HÌNH</td>
                                                            <td>{this.props.detailProduct.manHinh}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>RAM</td>
                                                            <td>{this.props.detailProduct.manHinh}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>CARD</td>
                                                            <td>{this.props.detailProduct.card}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ổ CỨNG</td>
                                                            <td>{this.props.detailProduct.oCung}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PIN</td>
                                                            <td>{this.props.detailProduct.pin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /tab1  --> */}
                                </div>
                                {/* <!-- /product tab content  --> */}
                            </div>
                        </div>
                        {/* <!-- /product tab --> */}
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
            </div>
            // <!-- /SECTION -->
        )
    }
}

export default ComponentProductDetail