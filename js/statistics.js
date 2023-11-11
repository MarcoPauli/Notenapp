
const xArray = ["1er", "2er", "3er", "4er", "5er", "6er"];
const yArray = [0, 0, 0, 0, 0, 0];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"Einzelne Noten"};
setInterval(()=> {
  findYArray()
  Plotly.newPlot("myPlot", data, layout);
}, 2000);

function findYArray() {
  let grade_1 = 0;
  let grade_2 = 0;
  let grade_3 = 0;
  let grade_4 = 0;
  let grade_5 = 0;
  let grade_6 = 0;
  for (let x in subjects) {
    console.log(grade_1)
    for (let i = 0; i < subjects[x]["kln"].length; i++)  {
       switch(subjects[x]["kln"][i]) {
        case 1: 
          grade_1 += 1;
          break;
        case 2: 
          grade_2 += 1;
          break;
        case 3: 
          grade_3 += 1;
          break;
        case 4: 
          grade_4 += 1;
          break;
        case 5: 
          grade_5 += 1;
          break;
        case 6: 
          grade_6 += 1;
       }
    }
    for (let i = 0; i < subjects[x]["gln"].length; i++)  {
      switch(subjects[x]["gln"][i]) {
       case 1: 
         grade_1 += 1;
         break;
       case 2: 
         grade_2 += 1;
         break;
       case 3: 
         grade_3 += 1;
         break;
       case 4: 
         grade_4 += 1;
         break;
       case 5: 
         grade_5 += 1;
         break;
       case 6: 
         grade_6 += 1;
      }
   }
  }
  yArray[0] = grade_1
  yArray[1] = grade_2
  yArray[2] = grade_3
  yArray[3] = grade_4
  yArray[4] = grade_5
  yArray[5] = grade_6
  return yArray;
}