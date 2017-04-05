angular
  .module("watson_node", [
    "ngResource"
  ])
  .factory("WatsonFactory", [
    "$resource",
    FactoryFunction
  ])
  .controller("IndexController", [
    "WatsonFactory",
    IndexControllerFunction
  ])

function FactoryFunction($resource) {
  return $resource("http://localhost:4000/text", {}, {})
}

function IndexControllerFunction(WatsonFactory){
  let vm = this
  vm.sendToWatson = function(){
    vm.sampleText = WatsonFactory.get({text: vm.sampleText}, (response) => {
      metrics = response
      makeTable(response)
      for (let i=0; i<metrics.keywords.length; i++){
        let newData = {}
        newData.label=metrics.keywords[i].text
        newData.data=[metrics.keywords[i].emotion.sadness, metrics.keywords[i].emotion.joy, metrics.keywords[i].emotion.fear, metrics.keywords[i].emotion.disgust, metrics.keywords[i].emotion.anger]
        newData.backgroundColor=backgroundColor[i]
        newData.borderColor=borderColor[i]
        newData.borderWidth=1
        chartData.datasets.push(newData)
      }
      let myChart = new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      })
    this.hideForm = true
    })
    }

}

function makeTable(data) {
    let table = $('#emotionResults')
    table.append("<tr>"+"<th>"+"Text"+"</th>"+
    "<th>"+"Sadness"+"</th>"+"<th>"+"Joy"+"</th>"+"<th>"+"Fear"+"</th>"+"<th>"+"Disgust"+"</th>"+"<th>"+"Anger"+"</th>"+"</tr>")
    for(let i=0; i<data.keywords.length; i++){
      table.append("<tr>"+"<td>"+data.keywords[i].text+"</td>"+
      "<td>"+data.keywords[i].emotion.sadness+"</td>"+"<td>"+data.keywords[i].emotion.joy+"</td>"+"<td>"+data.keywords[i].emotion.fear+"</td>"+"<td>"+data.keywords[i].emotion.disgust+"</td>"+"<td>"+data.keywords[i].emotion.anger+"</td>"+"</tr>")
    }
}

const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]
const borderColor = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]
const chartData = {
    labels: ["Sadness", "Joy", "Fear", "Disgust", "Anger"],
    datasets: []
}
var ctx = $("#myChart");
