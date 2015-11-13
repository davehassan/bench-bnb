window.BenchesIndex = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  getStateFromStore: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.getStateFromStore);
  },

  hoverBench: function (event) {
    if (event.type === 'mouseenter') {
      HoverActions.recieveHoverBench(event.currentTarget.id);
    } else {
      HoverActions.recieveHoverBench(-1);
    }
  },

  render: function () {
    return (
      <ul className="bench-index group">
        {
          this.state.benches.map(function (bench) {
            return (
              <li
                onMouseEnter={this.hoverBench}
                onMouseLeave={this.hoverBench}
                id={bench.id}>
                {bench.description}
              </li>
            );
          }.bind(this))
        }
      </ul>
    );
  }
});
