window.BenchForm = React.createClass({
  render: function () {
    return (
      <form>
        <label>Lat
          <input type="number" step="any" id="lat"/>
        </label>
        <label>Lng
          <input type="number" step="any" id="lat"/>
        </label>
        <label>Description
          <input type="textarea" id="description" />
        </label>
      </form>
    );
  }
});
