modules.define('tabs', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {},
        {
    		onInit : function() {
        		console.log('tabs inited');

        		this.elem('tab').on('click', function(e) {
                    e.preventDefault();
                    this.setMod($(e.currentTarget), 'state', 'current');
                    console.log('click');
                });
    		}
        })
    );

});