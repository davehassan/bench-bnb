(function (root) {
  var _filterParams = {};
  var resetParams = function (filterParams) {
    _filterParams = filterParams;
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
        case FilterConstants.PARAMS_CHANGED:
          resetParams(payload.filterParams);
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
