/*
---

name: StubbornScroll

description: A

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
		this.enable();
	},

	enable: function(){
		this.element.addEvent('mousewheel', this.validateScroll);
	},

	disable: function(){
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