window.Search = React.createClass({
  getInitialState: function () {
    return { filterParams: {} };
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this.getParams);
  },

  getParams: function () {
    this.setState(FilterStore.currentParams());
    ApiUtil.fetchBenches();
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <FilterParams />
        <BenchesIndex />
      </div>
    );
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new", coords);
  }
});
