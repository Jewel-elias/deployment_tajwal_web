import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';
import { Component } from 'react';
import './googleMap.scss'
class GoogleMap extends Component {
   
    render() {
        const mapStyles = {
            width: '100%',
            height: '500px',
        };
        
        return (
            <div className='GoogleM'>
                <Map
                    google={this.props.google}
                
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{ lat: this.props.lati, lng:this.props.long }}
                />
                <Marker
                position={{ lat: this.props.lati, lng:this.props.long }}
                ></Marker>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey:"AIzaSyAj8BjoImIJP_JG2KMAn_Zq3HCcW4_2jKU"
    // "AUpwoQdnjVynLKhDkNt1TJh6sgduJnxyJy"
    //  "AIzaSyDv32Po79pQSdkAed5jCgv0O61VswD_tUg"
    //AIzaSyCTRmxztyOyRz-bmQEKzvy-mPXUgI9kX-c
})(GoogleMap);