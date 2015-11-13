window.Map = React.createClass({
  _onChange: function () {
    this.clearMarkers();
    this.addMarkers();
  },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  },

  clearMarkers: function () {
    var benches = BenchStore.all();
    var markers = [];
    this.markers.forEach(function (marker) {
      var lat = marker.position.lat(), lng = marker.position.lng();
      var onMap = false;

      benches.forEach(function (bench) {
        if (bench.lat === lat && bench.lng === lng) {
          onMap = true;
        }
      });

      if (!onMap) {
        marker.setMap(null);
      } else {
        markers.push(marker);
      }

      this.markers = markers;
    });
  },

  makeMarker: function (bench) {
    var latLng = { lat: bench.lat, lng: bench.lng };
    var desc = bench.description;

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: desc
    });

    return marker;
  },

  addMarkers: function () {
    var benches = BenchStore.all();

    benches.forEach(function (bench) {
      var hasMarker = false;
      this.markers.forEach(function (marker) {
        var lat = marker.position.lat(), lng = marker.position.lng();
        if (bench.lat === lat && bench.lng === lng) {
          hasMarker = true;
        }
      });

      if (!hasMarker) {
        var marker = this.makeMarker(bench);
        this.markers.push(marker);
      }
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

      ApiUtil.fetchBenches(this.formatBounds());
    }.bind(this));
    this.markers = [];
    BenchStore.addChangeListener(this._onChange);
  },

  formatBounds: function () {
    var bounds = this.map.getBounds();
    var northEast = bounds.getNorthEast();
    var southWest = bounds.getSouthWest();
    var boundsObj = {
      northEast: { lat: northEast.lat(), lng: northEast.lng() },
      southWest: { lat: southWest.lat(), lng: southWest.lng() }
    };

    return boundsObj;
  }
});
