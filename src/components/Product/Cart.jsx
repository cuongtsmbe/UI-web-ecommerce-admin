import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import cartApi from "../../api/cartApi";
import { formatVND } from "../../utils/currencyVND";
import swal from "sweetalert";

class ComponentProductCard extends PureComponent {
    state={
        infoProduct:null
    }

    async componentDidMount() {
        this.setState({infoProduct:this.props.infoProduct})
        const script = document.createElement("script");
        script.src = "./js/main.js";
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    }

    addToCart=async()=>{
        try {
            await cartApi.add(this.state.infoProduct.id,1)   
            swal({                
                text: "Thêm thành công!",
                icon: "success",  
                buttons:false,
                timer:800              
              });
        } catch (error) {
            console.log('Fail to add item into cart'+error)
        }                 
    }

    render() {
        return (
            <div className="product" >
                <Link to={`/product/${this.props.infoProduct.id}`}>
                    <div className="product-img" style={{ height: '250px' }} onclick="location=\'index.php?act=product&id='.$item['id'].'\'">
                        <img src={this.props.infoProduct.hinh_anh} alt="Empty" style={{ height: '100%' }} />
                        <div className="product-label">
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category"><small>{this.props.infoProduct.sl_da_ban}</small></p>
                        <h3 className="product-name"><Link to={`/product/${this.props.infoProduct.id}`}>{this.props.infoProduct.ten_sp}</Link></h3>
                        <button className="btn btn-sm">{this.props.infoProduct.ram}</button><button className="btn btn-sm">{this.props.infoProduct.oCung}</button>
                        <h4 className="product-price">{formatVND(this.props.infoProduct.don_gia)}</h4>
                        <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </Link>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn" onClickCapture={this.addToCart}><i className="fa fa-shopping-cart"></i> <span id="messAddCart'.$item['id'].'">thêm vào giỏ</span></button>
                </div>
            </div>
        )
    }
}
export default ComponentProductCard