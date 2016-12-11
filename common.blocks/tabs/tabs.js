modules.define('tabs', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {},
        {
    		onInit : function() {
        		console.log('tabs inited');
    		}
        })
    );

});