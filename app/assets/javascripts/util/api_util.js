ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      dataType: 'json',
      data: { bounds: bounds },
      success: function (benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  }
};
