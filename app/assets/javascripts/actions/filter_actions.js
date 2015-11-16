var FilterActions = {
  receiveBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.BOUNDS_CHANGED,
      bounds: bounds
    });
  },

  receiveMin: function (min) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.MIN_CHANGED,
      min: min
    });
  },
  
  receiveMax: function (max) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.MAX_CHANGED,
      max: max
    });
  }
};
