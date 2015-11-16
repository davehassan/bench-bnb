window.FilterParams = React.createClass({
  getInitialState: function () {
    return { min: 0, max: 10 };
  },

  minChange: function (event) {
    this.setState({min: event.currentTarget.valueAsNumber});
    FilterActions.receiveFilter(this.state);
  },

  maxChange: function (event) {
    this.setState({max: event.currentTarget.valueAsNumber});
    FilterActions.receiveFilter(this.state);
  },

  componentDidMount: function () {
    FilterActions.receiveFilter(this.state);
  },

  render: function () {
    return (
      <form>
        <label>Min Seats:
          <input
            type="number"
            value={this.state.min}
            onChange={this.minChange}/>
        </label>
        <label>Max Seats:
          <input
            type="number"
            value={this.state.max}
            onChange={this.maxChange}/>
        </label>
      </form>
    );
  }
});
