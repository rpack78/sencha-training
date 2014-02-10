(function() {
	
	// Load this from your application's app.js to see when MVC
	// classes are created.
	// Usage: Ext.Loader.loadScript('../../LogMvc.js');

	var overrides = ['Ext.app.Controller', 'Ext.Component', 'Ext.data.Model', 'Ext.data.Store'];
	Ext.Array.forEach(overrides, function(className) {
		Ext.define('', {
			override: className,
			constructor: function() {
				this.callParent(arguments);
				if (this.$className.indexOf('Ext.') === -1) {
					console.log('Creating ' + this.$className);
				}
			}
		});
	});
})();