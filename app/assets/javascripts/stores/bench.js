(function (root) {
  var _benches = [];
  var resetBenches = function (benches) {
    _benches = benches;
  };
  var CHANGE_EVENT = 'change';

  root.BenchStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _benches.slice(0);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
