window.Map = React.createClass({
  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  },

  addMarkers: function () {
    var benches = BenchStore.all();
    benches.forEach(function (bench) {
      var latLng = { lat: bench.lat, lng: bench.lon };
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
      ApiUtil.fetchBenches();
    }.bind(this));
    BenchStore.addChangeListener(this.addMarkers);
  }
});
