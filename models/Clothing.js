const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const clothingSchema = new Schema({
    category: {type: String, enum: ['ActiveWear', 'DayWear', 'NightWear', 'ProfessionalWear', 'FormalWear']},
    season: {type: String, enum: ['Winter', 'Spring', 'Summer', 'Fall']},
    type: {type: String, enum: ['top', 'bottom', 'dress']},
    subType: String,
    color: String,
    size: {type: String, enum: ['XS', 'S', 'M', 'L', 'XL']}, 
    lastWorn: [Date],
    image: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'} 
  });
  
  
  const Clothing = mongoose.model("Clothing", clothingSchema);
  
  
  module.exports = Clothing;