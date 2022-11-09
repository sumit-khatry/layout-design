
 const ctx=document.getElementById('chartOne').getContext('2d');



console.log("js is logged")
 
const chartOne=new Chart(ctx,{
    type:'bar',
    data:{
        labels:['data','data1','data2','data3'],
        datasets:[{
            label:"Number of data available",
            data:[10,11,3,4],
            backgroundColor:[ 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 159, 64, 0.2)'],
            borderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth:2,
            fill:false

        }],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
})