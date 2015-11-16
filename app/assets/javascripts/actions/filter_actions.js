var FilterActions = {
  receiveFilterParams: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.PARAMS_CHANGED,
      filterParams: filterParams
    });
  }
};
