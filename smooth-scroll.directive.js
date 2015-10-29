(function($){
    
    var smoothScroll = {

        init: function(){
            this._$els = $('[data-smooth-scroll-href]');
            if(!this._$els[0]) return;

            this._bindEvents();
        },

        _bindEvents: function(){
            var self = this;
            this._$els.click(self._handleClick.bind(self));
        },

        _handleClick: function(e){
            var target = e.target,
                $anchor = $(target).closest('[data-smooth-scroll-href]'),
                targetSelector = $anchor.data('smooth-scroll-href');
                
            if(history && history.pushState){
				history.pushState(null, null, targetSelector);
			}
            
            $(targetSelector).velocity('scroll', { duration: 500 });
        }

    };

    smoothScroll.init();

}(jQuery));
