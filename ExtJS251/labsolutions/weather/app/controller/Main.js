Ext.define('Weather.controller.Main', {
    extend : 'Ext.app.Controller',
    models : [ 'Month' ],
    stores : [ 'Months' ],
    refs : [ {
        ref : 'weatherForm',
        selector : 'viewport weather_form'
    }, {
        ref : 'weatherGrid',
        selector : 'viewport weather_grid'
    }, {
        ref : 'weatherView',
        selector : 'viewport weather_view'
    }, {
        ref : 'prevButton',
        selector : 'viewport weather_form #prev'
    }, {
        ref : 'nextButton',
        selector : 'viewport weather_form #next'
    }  ],
    init : function() {
        this.control({
            'viewport weather_grid' : {
                select : this.onRecordSelect
            },
            'viewport weather_view' : {
                select : this.onRecordSelect
            },
            'viewport weather_form #prev' : {
                click : this.onPrev
            },
            'viewport weather_form #next' : {
                click : this.onNext
            }
        });
    },
    onRecordSelect : function(component, record) {
        this.getWeatherForm().setModel(record);
        this.getWeatherGrid().getSelectionModel().select(record);
        this.getWeatherView().getSelectionModel().select(record);
        this.getNextButton().setDisabled(!this.isNext());
        this.getPrevButton().setDisabled(!this.isPrev());
    },
    
    getRecord : function(){
      return this.getWeatherGrid().getSelectionModel().getSelection()[0];  
    },
    isNext : function(){
        var s = this.getMonthsStore();
        var i = s.indexOf(this.getRecord());
        return ( (i + 1) < s.getCount() );
    },
    isPrev : function(){
        var s = this.getMonthsStore();
        var i = s.indexOf(this.getRecord());
        return (i > 0);
    },
    onPrev : function() {
        console.log('onPrev()');
        this.getWeatherGrid().getSelectionModel().selectPrevious();
    },
    onNext : function() {
        this.getWeatherGrid().getSelectionModel().selectNext();
    }
});