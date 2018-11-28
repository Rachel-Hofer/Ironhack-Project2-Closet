const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const outfitSchema = new Schema({
  top: {type: Schema.Types.ObjectId, ref: 'Clothing'},
  bottom: {type: Schema.Types.ObjectId, ref: 'Clothing'},
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  lastWorn: [Date],
  event: String,
  });

  
  const Outfit = mongoose.model("Outfit", outfitSchema);
  
  
  module.exports = Outfit;

