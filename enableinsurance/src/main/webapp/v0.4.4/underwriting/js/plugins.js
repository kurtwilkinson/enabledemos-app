FusionCharts.ready(function () {
    var cSatScoreChart = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Fraud Risk Grade",
                "subcaption": "as of Today",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "0",
                "upperLimitDisplay": "100",
                "showValue": "1",
                "valueBelowPivot": "1",
                "theme": "fint"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#e44a00"
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19"
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#6baa01"
                    }
                ]
            },
            "dials": {
                "dial": [{
                    "value": "90"
                }]
            }
        }
    }).render();    
});