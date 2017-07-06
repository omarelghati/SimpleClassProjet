Morris.Donut({
                element: 'doughnut-chart',
                data: [
                    {value: 70, label: 'foo'},
                    {value: 15, label: 'bar'},
                    {value: 10, label: 'baz'},
                    {value: 5, label: 'A really really long label'}
                ],
                colors:['#FF3835','#515151','#6C76FF','#ddd'],
                formatter: function (x) { return x + "%"}
                }).on('click', function(i, row){
                console.log(i, row);
            });
            console.log('chargé');