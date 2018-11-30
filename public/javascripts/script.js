$(document).ready(function() { // when the document is loaded
  
let tops;
let bottoms;
let topNum = 0;
let bottomNum = 0;
   
axios.get('http://localhost:3000/api/clothing/top')
    .then((theClothing)=>{
        tops = theClothing.data;
    })
        .catch((err)=>{
            console.log('THIS IS AN ERROR',err);
 })
    
 axios.get('http://localhost:3000/api/clothing/bottom')
    .then((theClothing)=>{
        bottoms = theClothing.data;
 })
    .catch((err)=>{
        console.log('THIS IS AN ERROR',err);
})

//TOPS carasoul right click
$("#right_button").click(function() {

    $('#theImageHolder').html(`<img class="clothingImg" src=${tops[topNum].image}>`)
    $("#topDetail").prop("href", `/clothing/${tops[topNum]._id}`)
    $("#topEdit").prop("href", `/clothing/${tops[topNum]._id}/update`)
    $("#topDelete").prop("href", `/clothing/${tops[topNum]._id}/delete`)
    $("#theSelectedTop").val(tops[topNum]._id)
    topNum++;
})

//BOTTOMS carasoul right click
$("#right_button_lower").click(function() {
  
    $('#theImageHolder2').html(`<img class="clothingImg" src=${bottoms[bottomNum].image}>`)
    $("#bottomDetail").prop("href", `/clothing/${bottoms[bottomNum]._id}`)
    $("#bottomEdit").prop("href", `/clothing/${bottoms[bottomNum]._id}/update`)
    $("#bottomDelete").prop("href", `/clothing/${bottoms[bottomNum]._id}/delete`)
    $("#theSelectedBottom").val(bottoms[bottomNum]._id)  
    bottomNum++;
})

//TOPS carasoul left click
$("#left_button").click(function() {
    topNum--;
    $('#theImageHolder').html(`<img class="clothingImg" src=${tops[topNum].image}>`)
    $("#topDetail").prop("href", `/clothing/${tops[topNum]._id}`)
    $("#topEdit").prop("href", `/clothing/${tops[topNum]._id}/update`)
    $("#topDelete").prop("href", `/clothing/${tops[topNum]._id}/delete`)
    $("#theSelectedTop").val(tops[topNum]._id)
})

//BOTTOMS carasoul left click
$("#left_button_lower").click(function() {
    bottomNum--;
    $('#theImageHolder2').html(`<img class="clothingImg" src=${bottoms[bottomNum].image}>`)
    $("#bottomDetail").prop("href", `/clothing/${bottoms[bottomNum]._id}`)
    $("#bottomEdit").prop("href", `/clothing/${bottoms[bottomNum]._id}/update`)
    $("#bottomDelete").prop("href", `/clothing/${bottoms[bottomNum]._id}/delete`)
    $("#theSelectedBottom").val(bottoms[bottomNum]._id)    
})













}) // end of JQuery wrap

























