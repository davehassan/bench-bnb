(function (root) {
  var _filterParams = { min: 0, max: 100};
  var resetBounds = function (bounds) {
    _filterParams.bounds = bounds;
  };
  var resetMin = function (min) {
    _filterParams.min = min;
  };
  var resetMax = function (max) {
    _filterParams.max = max;
  };

  var CHANGE_EVENT = "change_params";

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    currentParams: function () {
      return _filterParams;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case FilterConstants.BOUNDS_CHANGED:
          resetBounds(payload.bounds);
          FilterStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.MIN_CHANGED:
          FilterStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.MAX_CHANGED:
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
