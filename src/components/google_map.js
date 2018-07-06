import React, { Component } from 'react';

class GoogleMap extends Component {
   //create a imbeded google map inside of our document
   //.Map takes a reference to an html node/element where we want to render this map to
   //this is how we make third party libraries work nicely with react
   componentDidMount() {
      new google.maps.Map(this.refs.map, {
         zoom: 12,
         center: {
            lat: this.props.lat,
            lng: this.props.lon
         }
      });
   }

   render () {
      //this.ref.map
      return <div ref="map" />;//ref is a direct reference to a html element
   }
}

export default GoogleMap;