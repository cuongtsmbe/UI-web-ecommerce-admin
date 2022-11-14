import React, { PureComponent } from "react";

class UIColection extends PureComponent {
    render() {
        return (
            // <!-- SECTION -->
            <div class="section">
                {/* <!-- container --> */}
                <div class="container">
                    {/* <!-- row --> */}
                    <div class="row">
                        {/* <!-- shop --> */}
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="https://storage-asset.msi.com/id/picture/news/10thgen1.jpg" alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>MSI<br />Collection</h3>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /shop --> */}

                        {/* <!-- shop --> */}
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2021/10/macbook-pro-2021-6.jpg"
                                        alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>MacBook<br />Collection</h3>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /shop --> */}

                        {/* <!-- shop --> */}
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="https://cdn.tgdd.vn/Files/2019/05/27/1169380/dyrf2yzksiyh0zgdigsj_800x448.jpg" alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>Asus<br />Collection</h3>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /shop --> */}
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
            </div>
            //<!-- /SECTION -->
        )
    }
}

export default UIColection