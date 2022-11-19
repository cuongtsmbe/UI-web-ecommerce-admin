import React, { PureComponent } from 'react';

export default class SearchInput extends PureComponent {
  render(){
  return (
    <>
                <div className="col align-self-stretch d-flex">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tim theo ten khach hang ..." 
                            aria-label="Tim theo ten khach hang ..." 
                            name='tenkh'
                            onChange={this.props.handleSearchInput}
                        />
                    </div>
                </div>
   
    </>
  )
      }
}
