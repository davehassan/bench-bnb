window.FilterParams = React.createClass({
  getInitialState: function () {
    return { minSeats: 0, maxSeats: 10 };
  },

  minChange: function (event) {
    this.setState({minSeats: event.currentTarget.valueAsNumber});
  },

  maxChange: function (event) {
    this.setState({maxSeats: event.currentTarget.valueAsNumber});
  },

  // componentDidMount: function () {
  //   FilterActions.receiveMin(this.state.minSeats);
  //   FilterActions.receiveMax
  // },

  render: function () {
    return (
      <form>
        <label>Min Seats:
          <input
            type="number"
            value={this.state.minSeats}
            onChange={this.minChange}/>
        </label>
        <label>Max Seats:
          <input
            type="number"
            value={this.state.maxSeats}
            onChange={this.maxChange}/>
        </label>
      </form>
    );
  }
});
