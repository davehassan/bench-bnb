window.Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <BenchesIndex />
      </div>
    );
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new", coords);
  }
});
