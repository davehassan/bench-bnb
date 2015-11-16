ApiUtil = {
  fetchBenches: function () {
    var filterParams = FilterStore.currentParams();
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      dataType: 'json',
      data: { filter: {
        bounds: filterParams.bounds,
        min: filterParams.min,
        max: filterParams.max
      }},
      success: function (benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url: '/api/benches',
      type: 'POST',
      dataType: 'json',
      data: { bench: bench },
      success: function (data) {
        ApiActions.receiveSingleBench(data);
      }
    });
  }
};
