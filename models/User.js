const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  userEmail: String,
  image: String, 
  // closets: [{type: Schema.Types.ObjectId, ref: 'Clothing'}],
},{
  timestamps: true
});


const User = mongoose.model("User", userSchema);


module.exports = User;


// 1. User-
//     - Username: String
//     - Password: String
        
//         User Profile
//         - First Name: String
//         - Last Name: String
//         - E-mail Address: String
//         - Image: URL String
//         - Closets: [Array of closet IDs]