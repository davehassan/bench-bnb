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

  render: function () {
    return (
      <ul>
        {
          this.state.benches.map(function (bench) {
            return (<li>{bench.description}</li>);
          })
        }
      </ul>
    );
  }
});
