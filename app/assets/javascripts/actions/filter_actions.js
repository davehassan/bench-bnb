var FilterActions = {
  receiveFilter: function (filter) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_CHANGED,
      filter: filter
    });
  }
};
