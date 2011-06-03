(function($) {
	$.imageDropDown = (function() {
		var items = {};
		
		var set = function(key, value) {
			items[key] = value;
			return value;
		};
		
		var get = function(key) {
			return items[key];
		};
		
		var remove = function(key) {
			return delete items[key];
		};
		
		var clear = function() {
			for (key in items) {
				delete items[key];
			}
		};
		
		var getItems = function(){
			return items;
		};
		
		return {
			set: set,
			get: get,
			remove: remove,
			clear: clear,
			items: getItems
		}    
	}());
}(jQuery)();