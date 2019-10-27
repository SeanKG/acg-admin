import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import * as config from "../config.json";
import Marker from "./Marker";
import styled from "styled-components";

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ottawa = {
  lat: 45.4215,
  lng: -75.6972
};

class SimpleMap extends Component {
  static defaultProps = {
    center: ottawa,
    zoom: 11
  };

  onGoogleApiLoaded = (map, maps, zones) => {  
    zones.map(zone => {
      var polygon = new maps.Polygon({
        paths: zone.location,
        strokeColor: zone.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: zone.color,
        fillOpacity: 0.35
      });
      polygon.setMap(map);
    })
  };

  render() {
    const { markers, zones } = this.props;

    return (
      // Important! Always set the container height explicitly
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.onGoogleApiLoaded(map, maps, zones)}
        >
          {markers.map(marker => (
            <Marker key={marker.id} marker={marker} {...marker} />
          ))}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default SimpleMap;
