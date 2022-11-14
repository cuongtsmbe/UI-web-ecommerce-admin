import React, { PureComponent } from "react";
import ComponentProductCard from "../../Product/Cart";

class ComponentCategoryStoreListProduct extends PureComponent {
    state={
        products:this.props.products
    }
    render() {        
        return (
            <div>
            {this.props.products.map((product,index)=> <div key={index} className="col-md-4 col-xs-6">
                    <ComponentProductCard infoProduct = {product}/>
                </div>)}
                
            </div>
        )
    }
}

export default ComponentCategoryStoreListProduct