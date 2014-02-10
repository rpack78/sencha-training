Ext.define('Weather.model.Selection', {
    extend : 'Ext.util.Observable',
    config : {
        record : null,
        store : null
    },
    next : function() {
        if (this.isNext()) {
            var index = this.getIndex();
            this.setRecord(this.getStore().getAt(index + 1));
        }
    },
    getIndex : function() {
        return this.getStore().indexOf(this.getRecord());
    },
    prev : function() {

    },
    isNext : function() {
        return (this.getIndex() < this.getStore().getCount());
    },
    isPrev : function() {
        return (this.getIndex() >= 0);
    },
    updateRecord : function() {
        this.fireEvent('change', this);
    }
});