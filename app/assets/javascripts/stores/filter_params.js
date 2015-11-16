(function (root) {
  var _filterParams = { bounds: {}, min: 0, max: 100};
  var resetFilter = function (filter) {
    if (filter.bounds) {
      _filterParams.bounds = filter.bounds;
    }
    if (typeof filter.min !== 'undefined') {
      _filterParams.min = filter.min;
    }
    if (typeof filter.max !== 'undefined') {
      _filterParams.max = filter.max;
    }
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
        case FilterConstants.FILTER_CHANGED:
          resetFilter(payload.filter);
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
