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

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    findInStore: function (benchId) {
      for (var i = 0; i < _benches.length; i++) {
        if (_benches[i].id === benchId) { return _benches[i]; }
      }
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case BenchConstants.SINGLE_BENCH_RECEIVED:
          _benches.push(payload.bench);
          BenchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
