import React, { PureComponent } from "react";
import UIColection from '../../components/UI/Colection/Colection';
import ComponentProductCard from '../../components/Product/Cart';
import productApi from "../../api/productApi";

class ScreenHome extends PureComponent {
    state = { listTop10Saler: [], };
    async setListTop10Saler() {
        try {
            const response = await productApi.getTop10Saler();
            const data = response.data; this.setState({ listTop10Saler: data })
        } catch (error) {
            console.log('Failed to fetch top 10 saler list:', error);
        }
    }
    async componentDidMount() {
        await this.setListTop10Saler();
    }
    render() {
        return (
            <div>
                <UIColection />
                {/* <!-- SECTION --> */}
                <div class="section">
                    {/* <!-- container --> */}
                    <div class="container">
                        {/* <!-- row --> */}
                        <div class="row">

                            {/* <!-- section title --> */}
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h3 class="title">ĐƯỢC LỰA CHỌN NHIỀU NHẤT</h3>

                                </div>
                            </div>
                            {/* <!-- /section title --> */}

                            {/* <!-- Products tab & slick --> */}
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="products-tabs">
                                        {/* <!-- tab --> */}
                                        <div id="tab1" class="tab-pane active">
                                            <div class="products-slick" data-nav="#slick-nav-1">
                                                {/* <!-- product --> */}
                                                {this.state.listTop10Saler.map(product => <ComponentProductCard key={product.id} infoProduct={product} />)}
                                                {/* <!-- /product --> */}

                                            </div>
                                            <div id="slick-nav-1" class="products-slick-nav"></div>
                                        </div>
                                        {/* <!-- /tab --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Products tab & slick --> */}
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                    {/* <!-- /container --> */}
                </div>
                {/* <!-- /SECTION --> */}

            </div>
        )
    }
}

export default ScreenHome