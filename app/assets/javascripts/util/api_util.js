ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      dataType: 'json',
      success: function (benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  }
};
