window.Map = React.createClass({
  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  },

  addMarkers: function () {
    var benches = BenchStore.all();
    benches.forEach(function (bench) {
      var latLng = { lat: bench.lat, lng: bench.lng };
      var desc = bench.description;
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: desc
      });
    }.bind(this));
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.729, lng: -74},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', function () {
      var bounds = this.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      var boundsObj = {
        northEast: { lat: northEast.lat(), lng: northEast.lng() },
        southWest: { lat: southWest.lat(), lng: southWest.lng() }
      };

      ApiUtil.fetchBenches(boundsObj);
    }.bind(this));
    BenchStore.addChangeListener(this.addMarkers);
  }
});
