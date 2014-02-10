Ext.define('Weather.view.Chart', {
    extend : 'Ext.chart.Chart',
    requires : ['Ext.chart.series.Line', 'Ext.form.FieldSet'],
    xtype : 'weather_chart',
    legend : true,
    axes : [ {
        type : 'Numeric',
        position : 'left',
        title : 'Temperature (centigrade)',
        minimum : 0,
        maximum : 25
    }, {
        type : 'Numeric',
        position : 'right',
        title : 'Precipitation (mm)',
        minimum : 35,
        maximum : 60
    }, {
        type : 'Category',
        position : 'bottom',
        fields : [ 'month' ],
        title : 'Month'
    } ],
    series : [ {
        type : 'line',
        axis : [ 'left', 'bottom' ],
        xField : 'month',
        yField : 'high',
        highlight : true,
        smooth : true
    }, {
        type : 'line',
        axis : [ 'left', 'bottom' ],
        xField : 'month',
        yField : 'low',
        highlight : true,
        smooth : true
    } ,{
        type : 'line',
        axis : [ 'right', 'bottom' ],
        xField : 'month',
        yField : 'precipitation',
        highlight : true,
        smooth : true
    }  ]
});