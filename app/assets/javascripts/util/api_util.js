ApiUtil = {
  fetchBenches: function () {
    var filterParams = FilterStore.currentParams();
    
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      dataType: 'json',
      data: { bounds: filterParams.bounds },
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
