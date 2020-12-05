class MapContainer extends React.Component {
  state = {
    markers: [
      {
        name: "Current position",
        position: {
          lat: 37.77,
          lng: -122.42,
        },
      },
    ],
  };

  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((prevState) => {
      const markers = [...this.state.markers];
      markers[index] = { ...markers[index], position: { lat, lng } };
      return { markers };
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: "100%",
          height: "300px",
        }}
        zoom={14}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            position={marker.position}
            draggable={true}
            onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
            name={marker.name}
          />
        ))}
      </Map>
    );
  }
}
