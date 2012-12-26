// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var Popup, isSelector, _defaults, _name;
    _name = 'popup';
    _defaults = {
      placement: 'top',
      offset: [0, 0],
      autoOpen: false,
      onlyOne: false,
      content: null,
      header: null,
      template: '<div class="js-content"></div>',
      trigger: 'click',
      delay: 0,
      beforeOpen: $.noop(),
      open: $.noop(),
      ifOpenedOrNot: $.noop(),
      ifNotOpened: $.noop(),
      beforeClose: $.noop(),
      close: $.noop(),
      ifClosedOrNot: $.noop(),
      ifNotClosed: $.noop()
    };
    isSelector = function(st) {
      return st.charAt(0) === '.' || st.charAt(0) === '#';
    };
    return Popup = (function(_super) {

      __extends(Popup, _super);

      function Popup(el, options) {
        var _ref;
        this.el = el;
        this.$el = $(this.el);
        this.name = _name;
        this.options = $.extend({}, _defaults, options);
        if (isSelector(this.options.template)) {
          this.Popup = $($(this.options.template).html());
        } else {
          this.Popup = $(this.options.template);
        }
        this.Popup.css({
          position: 'absolute',
          display: 'none'
        });
        $('body').append(this.Popup);
        this._setOptions(this.options);
        if ((_ref = $.popup) == null) {
          $.popup = [];
        }
        if (this.el != null) {
          $.popup.push(this.el);
        }
        this.timer = null;
        this.init();
      }

      return Popup;

    })($.kit);
  });

}).call(this);
