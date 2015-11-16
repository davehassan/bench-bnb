window.Map = React.createClass({
  _onChange: function () {
    this.clearMarkers();
    this.addMarkers();
  },

  _toggleMarkerAnimations: function () {
    var activeId = HoverStore.currentHoverId();
    this.markers.forEach(function (marker) {
      marker.setAnimation(null);
      if (activeId === marker.benchId) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });
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
        if (bench.id === marker.benchId) {
          onMap = true;
        }
      });

      if (!onMap) {
        marker.setMap(null);
        marker.benchId = null;
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
      title: desc,
      animation: google.maps.Animation.DROP
    });
    marker.benchId = bench.id;

    return marker;
  },

  addMarkers: function () {
    var benches = BenchStore.all();

    benches.forEach(function (bench) {
      var hasMarker = false;
      this.markers.forEach(function (marker) {
        var lat = marker.position.lat(), lng = marker.position.lng();
        if (bench.id === marker.benchId) {
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
      FilterActions.receiveBounds(this.formatBounds());
    }.bind(this));

    this.map.addListener('click', function (event) {
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      this.props.clickMapHandler(coords);
    }.bind(this));

    this.markers = [];
    BenchStore.addChangeListener(this._onChange);
    HoverStore.addChangeListener(this._toggleMarkerAnimations);
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
