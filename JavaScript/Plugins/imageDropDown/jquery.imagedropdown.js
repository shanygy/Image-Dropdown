(function($) {
	$.collection = function(colItems) {
		this.items = colItems || {};
		
		this.set = function(key, value) {
			this.items[key] = value;
			return value;
		};
		
		this.get = function(key) {
			return this.items[key];
		};
		
		this.remove = function(key) {
			return delete this.items[key];
		};
		
		this.clear = function() {
			for (key in this.items) {
				delete this.items[key];
			}
		};
	};
	
	$.fn.imageDropDown = function(method){
		var methods = {
			init: function(options) {
				return this.each(function(){
					var $dropdown = $(this);
					if (!$dropdown.data('imageDropDown')) {
						var itemsCol = new $.collection();
							$dropdown.children().each(function(i, option){
							var $option = $(option);
							itemsCol.set($option.attr('value'), {'image': $option.attr('title'), 'text': $option.val()});
						});
						$dropdown.data('imageDropDown', itemsCol);						
						
						_addMarkup($dropdown.data('imageDropDown').items);
					}
				});
			}
		};
		
		/********* Helper functions *********/
		function _addMarkup(items){
			var $listWrapper = $('<div class="idd-list-wrapper"><img class="idd-btn" src="JavaScript/Plugins/imageDropDown/images/iid-arrow.gif" /></div>'),
				$list = $('<ul class="idd-list"></ul>'),
				firstItem = null;

			for (key in items) {
				if (!firstItem)	{
					firstItem = {"key": key, "value": items[key]};
				}
				$list.append('<li class="idd-item"><img class="idd-icon" src= "' + items[key].image + '" /><span class="idd-text">' + items[key].text + '</span></li>');
			}
			$listWrapper
			.append('<div class="idd-selectedItem" data-value="' + firstItem['key'] + '"><img class="idd-icon" src="' + firstItem['value'].image + '" /><span>' + firstItem['value'].text + '</span></div>')
			.append($list)
			.appendTo('body');

			$('.idd-btn').bind('click.imageDropDown', function(){
					$list.slideToggle('medium');
			});
		}
		/************************************/

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