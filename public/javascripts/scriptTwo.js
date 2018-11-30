$(document).ready(function() { // when the document is loaded
  
  let tops;
  let bottoms;
  let topNum = 0;
  let bottomNum = 0;
     
  axios.get('https://my-virtual-closet.herokuapp.com/api/clothing/top')
      .then((theClothing)=>{
          tops = theClothing.data;
          bottoms = theClothing.data;
      })
          .catch((err)=>{
              console.log('THIS IS AN ERROR',err);
   })
      
   axios.get('https://my-virtual-closet.herokuapp.com/api/clothing/bottom')
      .then((theClothing)=>{
          bottoms = theClothing.data;
   })
      .catch((err)=>{
          console.log('THIS IS AN ERROR',err);
  })
  
  
  //right click
  $("#right_button_outfits").click(function() {
      $('#theImageHolderOutfits').html(`<img class="clothingImg" src="${tops[topNum].image}"> <br> <img class="clothingImg" src="${bottoms[bottomNum].image}">`)
      topNum++;
      bottomNum++;
  })
  
  //left click
  $("#left_button_outfits").click(function() {
      topNum--;
      bottomNum--;
      $('#theImageHolderOutfits').html(`<img class="clothingImg" src="${tops[topNum].image}"> <br> <img class="clothingImg" src="${bottoms[bottomNum].image}">`)
  })
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  }) // end of JQuery wrap







      // $("#topDetail").prop("href", `/clothing/${outfits[outfitNum]._id}`)
      // $("#topEdit").prop("href", `/clothing/${outfits[outfitNum]._id}/update`)
      // $("#topDelete").prop("href", `/clothing/${outfits[outfitNum]._id}/delete`)
      // $("#theSelectedTop").val(outfits[outfitNum]._id)