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
    // console.log(vm.sampleText);
    vm.sampleText = WatsonFactory.get({text: vm.sampleText}, (response) => {
      console.log(response)
      vm.metrics=response
      makeTable(response)
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
