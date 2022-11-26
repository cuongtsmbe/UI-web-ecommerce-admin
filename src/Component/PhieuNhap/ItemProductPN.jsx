

import React, { PureComponent } from 'react';
import {formatVND} from '../../utils/currencyVND';
export class ComponentItemProductPN extends PureComponent {
  render() {
    var Item=this.props.Item;
    console.log(Item);
      return (
          <tr>
              <td >#{Item.id_san_pham}</td>
              <td >{formatVND(parseInt(Item.Price))}</td>
              <td >{Item.So_luong}</td>          
        </tr>
      );
    
  }
}

export default ComponentItemProductPN