/*
---

name: StubbornScroll

description: A simple way to prevent parent elements from scrolling when hitting the limits of an element who has an internal scroll

author: Amadeus Demarzi, @amadeus

license: MIT-style license.

requires: [Core/Class, Core/Element, Core/Element.Dimensions]

provides: StubbornScroll

...
*/

(function(){

var StubbornScroll = this.StubbornScroll = new Class({

	initialize: function(el){
		this.element = document.id(el);
		if (!this.element) return;
		this.validateScroll = this.validateScroll.bind(this);
		this.attach();
	},

	attach: function(){
		this.element.addEvent('mousewheel', this.validateScroll);
	},

	detach: function(){
		this.element.removeEvent('mousewheel', this.validateScroll);
	},

	validateScroll: function(e){
		var es = this.element.getSize(),
			esp = this.element.getScroll(),
			ess = this.element.getScrollSize();

		// Block vertical scroll
		if (
			(esp.y + es.y >=  ess.y && e.wheel < 0) ||
			(esp.y <= 0 && e.wheel > 0)
		) e.preventDefault();
	}
});

}).call(this);