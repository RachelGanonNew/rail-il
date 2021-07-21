import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import {GOOGLE_MAP_URL} from '../../Common/consts';
const { compose, withProps, lifecycle } = require("recompose");

class ReactGoogleMap extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      directions: '',
    }
  }

  render(){
    const {row} = this.props;
    const {directions} = this.state;
  
    const MapWithADirectionsRenderer3 = compose(
      withProps({
        googleMapURL: GOOGLE_MAP_URL,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(row.fromLatitude, row.fromLongitude),
            destination: new google.maps.LatLng(row.toLatitude, row.toLongitude),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: row.fromLatitude, lng: row.fromLongitude }}
      >
        {row && <Marker position={{ lat: row.fromLatitude, lng: row.fromLongitude }} />}
        {row && <Marker position={{ lat: row.toLatitude, lng: row.toLongitude }} />}
        <DirectionsRenderer directions={props.directions} />
      </GoogleMap>
    );

    return(
      <MapWithADirectionsRenderer3/>
    );
  }

}

export default ReactGoogleMap;