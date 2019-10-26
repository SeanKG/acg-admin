import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as config from '../config.json';
import Marker from './Marker';
import styled from 'styled-components';

const MapWrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ottawa = {
    lat: 45.4215,
    lng: -75.6972
}

class SimpleMap extends Component {
  static defaultProps = {
    center: ottawa,
    zoom: 11
  };

  render() {
    const {markers} = this.props;

    console.log(markers);
    return (
      // Important! Always set the container height explicitly
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            {markers.map(marker => 
                <Marker key={marker.id}
                    marker={marker}
                />)}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default SimpleMap;

