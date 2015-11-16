window.BenchForm = React.createClass({
  getInitialState: function () {
    return this.blankState;
  },

  blankState: {lat: 40.733668, lng: -74.002831, description: "Fat Cat"},

  render: function () {
    return (
      <form className="bench-form" onSubmit={this.createBench}>
        <label>Lat:
          <input
            type="number"
            step="any"
            id="lat"
            value={this.state.lat}
            onChange={this.changeLat}/>
        </label>
        <label>Lng:
          <input
            type="number"
            step="any"
            id="lat"
            value={this.state.lng}
            onChange={this.changeLng}/>
        </label>
        <label>Description:
          <input
            type="textarea"
            id="description"
            value={this.state.description}
            onChange={this.changeDescription}/>
        </label>
        <button>Submit</button>
      </form>
    );
  },

  changeLat: function (event) {
    this.setState({lat: event.target.value })
  },
  changeLng: function (event) {
    this.setState({lng: event.target.value })
  },
  changeDescription: function (event) {
    this.setState({description: event.target.value })
  },

  createBench: function (event) {
    event.preventDefault();
    ApiUtil.createBench(this.state)
  }
});
// 40.733668, 74002831
