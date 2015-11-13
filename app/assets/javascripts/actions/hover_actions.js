HoverActions = {
  recieveHoverBench: function (benchId) {
    AppDispatcher.dispatch({
      actionType: HoverConstants.BENCH_HOVERED,
      benchId: benchId
    });
  }
};
