import React, { PureComponent } from "react";
import UIBreadCrumb from "../../components/UI/Breadcrumb/BreaedCrumb";
import { withParams } from '../../utils/Params/componentWithParams';
import productApi from "../../api/productApi";
import ComponentProductDetail from "../../components/Product/Detail";
import ComponentProductRelevant from "../../components/Product/Relevant";

class ScreenDetailProduct extends PureComponent {
    state = {        
        product: []
    }

    async getDetailProduct() {
        try {
            const { idProduct } = this.props.params;            
            const response = await productApi.getDetailProductById(idProduct);
            const product = response.data;
            this.setState({ product })
        } catch (error) {
            console.log('Failed to get product detail:', error);
        }
    }

    async componentDidMount() {        
        await this.getDetailProduct();        
    }
    async componentDidUpdate(prevProps){
        if (prevProps.params.idProduct !== this.props.params.idProduct)
        await this.getDetailProduct();
    }

    render() {
        return (
            <div>
                {/* Màn hình chi tiết sản phẩm ID: {this.state.idProduct} */}
                <UIBreadCrumb />
                {this.state.product.map((prod, index) => <ComponentProductDetail key={index} detailProduct={prod} />)}
                {this.state.product.map((prod, index) => <ComponentProductRelevant idCategory={prod.id_the_loai} idProduct={prod.id}/>)}
                


            </div>
        )
    }
}

export default withParams(ScreenDetailProduct)