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
      vanillaTable(response)
    })
    }

}

function vanillaTable(data) {
  let myTable = document.getElementById("emotionResults")
  let topRow = myTable.appendChild(document.createElement('th'))
  let cell1= topRow.appendChild(document.createElement('td'))
  cell1.innerHTML="Text"
  let cell2= topRow.appendChild(document.createElement('td'))
  cell2.innerHTML="Sadness"
  let cell3= topRow.appendChild(document.createElement('td'))
  cell3.innerHTML="Joy"
  let cell4= topRow.appendChild(document.createElement('td'))
  cell4.innerHTML="Fear"
  let cell5= topRow.appendChild(document.createElement('td'))
  cell5.innerHTML="Disgust"
  let cell6= topRow.appendChild(document.createElement('td'))
  cell6.innerHTML="Anger"
  for(let i=0; i<data.keywords.length; i++){
    let newRow = myTable.appendChild(document.createElement('tr'))
    let cell1= newRow.appendChild(document.createElement('td'))
    cell1.innerHTML=data.keywords[i].text
    let cell2= newRow.appendChild(document.createElement('td'))
    cell2.innerHTML=data.keywords[i].emotion.sadness
    let cell3= newRow.appendChild(document.createElement('td'))
    cell3.innerHTML=data.keywords[i].emotion.joy
    let cell4= newRow.appendChild(document.createElement('td'))
    cell4.innerHTML=data.keywords[i].emotion.fear
    let cell5= newRow.appendChild(document.createElement('td'))
    cell5.innerHTML=data.keywords[i].emotion.disgust
    let cell6= newRow.appendChild(document.createElement('td'))
    cell6.innerHTML=data.keywords[i].emotion.anger
  }
}
