console.log('Im Alive!');

// const response = {
//   "language": "en",
//   "keywords": [
//     {
//       "text": "long time",
//       "sentiment": {
//         "score": -0.537232
//       },
//       "relevance": 0.962446,
//       "emotion": {
//         "sadness": 0.50358,
//         "joy": 0.011955,
//         "fear": 0.407215,
//         "disgust": 0.107808,
//         "anger": 0.072012
//       }
//     },
//     {
//       "text": "Donald Trump",
//       "sentiment": {
//         "score": 0.408247
//       },
//       "relevance": 0.917912,
//       "emotion": {
//         "sadness": 0.074394,
//         "joy": 0.026433,
//         "fear": 0.068234,
//         "disgust": 0.848663,
//         "anger": 0.048462
//       }
//     },
//     {
//       "text": "constitutional democracy",
//       "sentiment": {
//         "score": 0.373746
//       },
//       "relevance": 0.873523,
//       "emotion": {
//         "sadness": 0.15653,
//         "joy": 0.180042,
//         "fear": 0.046056,
//         "disgust": 0.343456,
//         "anger": 0.300731
//       }
//     },
//     {
//       "text": "peaceful transfer",
//       "sentiment": {
//         "score": 0.373746
//       },
//       "relevance": 0.856082,
//       "emotion": {
//         "sadness": 0.15653,
//         "joy": 0.180042,
//         "fear": 0.046056,
//         "disgust": 0.343456,
//         "anger": 0.300731
//       }
//     },
//     {
//       "text": "open mind",
//       "sentiment": {
//         "score": 0.203476
//       },
//       "relevance": 0.853,
//       "emotion": {
//         "sadness": 0.448409,
//         "joy": 0.151977,
//         "fear": 0.176378,
//         "disgust": 0.087613,
//         "anger": 0.07781
//       }
//     }
//   ],
//   "entities": [
//     {
//       "type": "Location",
//       "text": "America",
//       "sentiment": {
//         "score": 0.354547
//       },
//       "relevance": 0.850701,
//       "emotion": {
//         "sadness": 0.226036,
//         "joy": 0.524565,
//         "fear": 0.078805,
//         "disgust": 0.196303,
//         "anger": 0.15276
//       },
//       "count": 14
//     },
//     {
//       "type": "Person",
//       "text": "Donald Trump",
//       "sentiment": {
//         "score": 0.305861
//       },
//       "relevance": 0.457048,
//       "emotion": {
//         "sadness": 0.149939,
//         "joy": 0.051631,
//         "fear": 0.096073,
//         "disgust": 0.725429,
//         "anger": 0.044648
//       },
//       "disambiguation": {
//         "subtype": [
//           "AwardNominee",
//           "AwardWinner",
//           "Celebrity",
//           "CompanyFounder",
//           "TVPersonality",
//           "TVProducer",
//           "FilmActor",
//           "TVActor"
//         ],
//         "name": "Donald Trump",
//         "dbpedia_resource": "http://dbpedia.org/resource/Donald_Trump"
//       },
//       "count": 2
//     },
//     {
//       "type": "JobTitle",
//       "text": "president",
//       "sentiment": {
//         "score": 0.408247
//       },
//       "relevance": 0.257826,
//       "emotion": {
//         "sadness": 0.074394,
//         "joy": 0.026433,
//         "fear": 0.068234,
//         "disgust": 0.848663,
//         "anger": 0.048462
//       },
//       "count": 1
//     }
//   ]
// }

function makeTable(data) {
    let table = $('#emotionResults')
    table.append("<tr>"+"<th>"+"Text"+"</th>"+
    "<th>"+"Sadness"+"</th>"+"<th>"+"Joy"+"</th>"+"<th>"+"Fear"+"</th>"+"<th>"+"Disgust"+"</th>"+"<th>"+"Anger"+"</th>"+"</tr>")
    for(let i=0; i<data.keywords.length; i++){
      table.append("<tr>"+"<td>"+data.keywords[i].text+"</td>"+
      "<td>"+data.keywords[i].emotion.sadness+"</td>"+"<td>"+data.keywords[i].emotion.joy+"</td>"+"<td>"+data.keywords[i].emotion.fear+"</td>"+"<td>"+data.keywords[i].emotion.disgust+"</td>"+"<td>"+data.keywords[i].emotion.anger+"</td>"+"</tr>")
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
// vanillaTable(response)
