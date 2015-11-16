window.BenchForm = React.createClass({
  getInitialState: function () {
    return this.blankState;
  },

  componentDidMount: function () {
    debugger;
    this.setState({
      lat: parseFloat(this.props.location.query.lat),
      lng: parseFloat(this.props.location.query.lng)
    });
  },

  blankState: {lat: 0, lng: 0, description: "", seating: 0},

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
        <label>Lng:
          <input
            type="number"
            step="1"
            id="seating"
            value={this.state.seating}
            onChange={this.changeSeating}/>
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
  changeSeating: function (event) {
    this.setState({seating: event.target.value })
  },

  createBench: function (event) {
    event.preventDefault();
    ApiUtil.createBench(this.state)
    this.props.history.pushState(null, '/')
  }
});
// 40.733668, 74002831
