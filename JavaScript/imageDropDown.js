(function($) {
	$.collection = function(colItems) {
		this.items = colItems || {};
		
		var set = function(key, value) {
			this.items[key] = value;
			return value;
		};
		
		var get = function(key) {
			return this.items[key];
		};
		
		var remove = function(key) {
			return delete this.items[key];
		};
		
		var clear = function() {
			for (key in this.items) {
				delete this.items[key];
			}
		};
		
		var getItems = function(){
			return this.items;
		};
		
		return {
			set: set,
			get: get,
			remove: remove,
			clear: clear,
			items: getItems
		};
	};
	
	$.fn.imageDropDown = function(method){
		var methods = {
			init: function(options) {
				return this.each(function(){
					var $dropdown = $(this);
					if (!$dropdown.data("imageDropDown")) {
						var itemsCol = new $.collection();
							$dropdown.children().each(function(i, option){
							var $option = $(option);
							itemsCol.set($option.attr("value"), {"image": $option.attr("title"), "text": $option.val()});
						});
						$dropdown.data("imageDropDown", itemsCol);						
					}
				});
			}
		};
		
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist in jQuery.imageDropDown');
		}
	};
})(jQuery);