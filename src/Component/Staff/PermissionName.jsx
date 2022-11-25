import React, { PureComponent } from 'react';
import permissionApi from '../../api/permissionApi'
export default class PermissionName extends PureComponent {
    state={
       id_quyen:null,
       ten_quyen:null
    };

    async componentDidMount(){
        this.getListPermission();
    }
    async getListPermission(){
        
        try {
            var  response = await permissionApi.GetDetailByID({id:this.props.idPermission});
            var  details = response.details;
        
            this.setState({
                    id_quyen:details.Id_permission,
                    ten_quyen:details.Ten_quyen
            });
        } catch (error) {
            console.log('Fail to get details permission : '+error);
        }
        

    }
    render(){
        return (
        <>

            <p className="text-primary">{this.state.ten_quyen}</p>
    
        </>
        )
    }
}
