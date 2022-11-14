import React, { PureComponent } from 'react'
import productApi from '../../api/productApi'
import ComponentProductCard from './Cart';

export class ComponentProductRelevant extends PureComponent {
    state = {
        listProductRelevant: []
    }
    async getListProductRelevant(idCategory, idProduct) {
        const response = await productApi.getProductRelevant(idCategory, idProduct);
        const listProductRelevant = response.data;
        this.setState({ listProductRelevant });
    }
    async componentDidMount() {
        const { idCategory, idProduct } = this.props;
        await this.getListProductRelevant(idCategory, idProduct);
    }
    async componentDidUpdate(prevProps){
        const { idCategory, idProduct } = this.props;
        if (prevProps.idProduct !== idProduct)
        await this.getListProductRelevant(idCategory, idProduct);
    }
    render() {
        return (
            // <!-- Section -->
            <div className="section">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h3 className="title">Các sản phẩm tương tự</h3>
                            </div>
                        </div>
                        {/* <!-- product --> */}
                        {this.state.listProductRelevant.map((product) => 
                            <div class="col-md-3 col-xs-6">
                        <ComponentProductCard infoProduct={product} key={product.id} />
                        </div>)}
                        {/* <!-- /product --> */}
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
            </div>
            // <!-- /Section -->
        )
    }
}

export default ComponentProductRelevant