import React, { Component } from 'react';
import GoogleMap            from "google-map-react"
import PSMarker             from "../components/Marker.js"
import util from '../util/helper.js';

class DisplayMap extends Component{
  constructor(props){
    super(props);
  };

  handleClick(event){
    event.preventDefault();
    const url = {url: this.props.globe}
    console.log("url", url);
    util.getLocation(url)
    .then((json) => {
    console.log(url.url.name + " was saved to your favorites!")
    })
  }

  handleAllClick(event){
      event.preventDefault();
      saveWifi.getAll()
      .then((json) => {
      this.setState({
        response: json
      })

      this.calculateDistance();

      })
  }




  render(){
    console.log("this.props.globe", this.props.globe);
    console.log("Array to pass in: this.props.geo", this.props.geo);
    return(
      <div className="map">
          <button className="favorite">3 DISPLAY TO MAPS</button>
        <GoogleMap bootstrapURLKeys={{
        key: "AIzaSyBI7-TOCmscy28RdbmUuLBf7yYkz_kw_H4"
        }}
         center={{lat: 40.7398909, lng: -73.989497}}
         zoom={12}
         onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                             yesIWantToUseGoogleMapApiInternals >
                             <PSMarker lat={40.7398909} lng={-73.989497} />
                             <PSMarker lat={30.7398909} lng={-72.989497} />
       </GoogleMap>
  </div>
    )
  }
}

export default DisplayMap
