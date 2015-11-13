(function (root) {
  var _hoveredBenchId = -1;
  var resetHoverBenchId = function (benchId) {
    _hoveredBenchId = benchId;
  };

  var CHANGE_EVENT = "change_hover";

  root.HoverStore = $.extend({}, EventEmitter.prototype,{

    currentHoverId: function () {
      return _hoveredBenchId;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case HoverConstants.BENCH_HOVERED:
          resetHoverBenchId(parseInt(payload.benchId));
          HoverStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
