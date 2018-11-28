const mongoose = require('mongoose');
const Clothing = require('../models/Clothing');

mongoose.connect('mongodb://localhost/closetApp', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const clothes = [
   {
    category: 'DayWear',
    season: 'Summer',
    type: 'top',
    subType: 'tee',
    color: 'black',
    size: 'S', 
    lastWorn: '',
    image: '/images/adidasTee.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Summer',
    type: 'top',
    subType: 'tee',
    color: 'black/white',
    size: 'S', 
    lastWorn: '',
    image: '/images/avocadoCrop.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Spring',
    type: 'top',
    subType: 'blouse',
    color: 'black/white',
    size: 'S', 
    lastWorn: '',
    image: '/images/checkeredTop.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Winter',
    type: 'top',
    subType: 'sweater',
    color: 'brown',
    size: 'XS', 
    lastWorn: '',
    image: '/images/chunkyTanSweater.jpeg'
   },
   {
    category: 'ActiveWear',
    season: 'Summer',
    type: 'top',
    subType: 'sports bra',
    color: 'black',
    size: 'M', 
    lastWorn: '',
    image: '/images/cuteSportsBra.jpeg'
   },
   {
    category: 'NightWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'jeans',
    color: 'dark blue',
    size: 'S', 
    lastWorn: '',
    image: '/images/darkSkinnyJeans.jpeg'
   },
   {
    category: 'ProfessionalWear',
    season: 'Winter',
    type: 'bottom',
    subType: 'pencil skirt',
    color: 'gray',
    size: 'S', 
    lastWorn: '',
    image: '/images/greyPencilSkirt.jpeg'
   },
   {
    category: 'NightWear',
    season: 'Winter',
    type: 'top',
    subType: 'sweater',
    color: 'light blue',
    size: 'M', 
    lastWorn: '',
    image: '/images/lightBlueCropSweater.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'ripped jeans',
    color: 'blue',
    size: 'S', 
    lastWorn: '',
    image: '/images/longBellBottomRippedJeans.jpeg'
   },
   {
    category: 'ActiveWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'sweatpants',
    color: 'black',
    size: 'S', 
    lastWorn: '',
    image: '/images/medium_adidasSweats.jpeg'
   },
   {
    category: 'ProfessionalWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'pencil skirt',
    color: 'black',
    size: 'S', 
    lastWorn: '',
    image: '/images/medium_blackPencilSkirt.jpeg'
   },
   {
    category: 'ProfessionalWear',
    season: 'Winter',
    type: 'bottom',
    subType: 'slacks',
    color: 'black',
    size: 'S', 
    lastWorn: '',
    image: '/images/medium_blackSlacks.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Summer',
    type: 'bottom',
    subType: 'shorts',
    color: 'floral',
    size: 'M', 
    lastWorn: '',
    image: '/images/medium_brightFloralShorts.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Spring',
    type: 'bottom',
    subType: 'ripped jeans',
    color: 'light blue',
    size: 'S', 
    lastWorn: '',
    image: '/images/medium_cactusJeans.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Summer',
    type: 'bottom',
    subType: 'shorts',
    color: 'blue',
    size: 'M', 
    lastWorn: '',
    image: '/images/medium_denimShorts.jpeg'
   },
   {
    category: 'ProfessionalWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'skirt',
    color: 'floral',
    size: 'S', 
    lastWorn: '',
    image: '/images/medium_floralLongSkirt.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Spring',
    type: 'bottom',
    subType: 'ripped shorts',
    color: 'light blue',
    size: 'M', 
    lastWorn: '',
    image: '/images/medium_highWaistedBoyFriendShorts.jpeg'
   },
   {
    category: 'DayWear',
    season: 'Spring',
    type: 'bottom',
    subType: 'shorts',
    color: 'blue',
    size: 'M', 
    lastWorn: '',
    image: '/images/highWaistedRolledShorts.jpeg'
   },
   {
    category: 'ProfessionalWear',
    season: 'Fall',
    type: 'bottom',
    subType: 'slacks',
    color: 'nude',
    size: 'M', 
    lastWorn: '',
    image: '/images/medium_khakiDressPants.jpeg'
   },
   {
    category: 'NightWear',
    season: 'Winter',
    type: 'bottom',
    subType: 'leather pants',
    color: 'black',
    size: 'M', 
    lastWorn: '',
    image: '/images/medium_leatherPants.jpeg'
   },
{
  category: 'ProfessionalWear',
  season: 'Spring',
  type: 'bottom',
  subType: 'skirt',
  color: 'pink',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_lightPinkProfessionalSkirt.jpeg'
 },
 {
  category: 'DayWear',
  season: 'Fall',
  type: 'bottom',
  subType: 'jeans',
  color: 'light blue',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_lightSkinnyJean.jpeg'
 },
 {
  category: 'FormalWear',
  season: 'Winter',
  type: 'bottom',
  subType: 'skirt',
  color: 'black',
  size: 'S', 
  lastWorn: '',
  image: '/images/longBlackSkirt.jpeg'
 },
 {
  category: 'DayWear',
  season: 'Winter',
  type: 'top',
  subType: 'sweater',
  color: 'brown',
  size: 'XS', 
  lastWorn: '',
  image: '/images/chunkyTanSweater.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Fall',
  type: 'bottom',
  subType: 'sweats',
  color: 'black',
  size: 'M', 
  lastWorn: '',
  image: '/images/medium_nikeSweats.jpeg'
 },
 {
  category: 'NightWear',
  season: 'Fall',
  type: 'bottom',
  subType: 'skirt',
  color: 'olive green',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_oliveGreenLongSkirt.jpeg'
 },
 {
  category: 'NightWear',
  season: 'Summer',
  type: 'bottom',
  subType: 'shorts',
  color: 'olive green',
  size: 'M', 
  lastWorn: '',
  image: '/images/medium_oliveGreenTieShorts.jpeg'
 },
 {
  category: 'ActiveWearWear',
  season: 'Winter',
  type: 'bottom',
  subType: 'leggings',
  color: 'black',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_printedLeggings.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Summer',
  type: 'bottom',
  subType: 'shorts',
  color: 'black',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_runningShorts.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Summer',
  type: 'bottom',
  subType: 'shorts',
  color: 'tie-die',
  size: 'S', 
  lastWorn: '',
  image: '/images/medium_tieDieRunningShorts.jpeg'
 },
 {
  category: 'DayWear',
  season: 'Spring',
  type: 'bottom',
  subType: 'jeans',
  color: 'white',
  size: 'M', 
  lastWorn: '',
  image: '/images/medium_whiteSkinnyJean.jpeg'
 },
 {
  category: 'DayWear',
  season: 'Summer',
  type: 'top',
  subType: 'tee',
  color: 'white',
  size: 'XS', 
  lastWorn: '',
  image: '/images/medium_whiteTee.jpeg'
 },
 {
  category: 'ProfessionalWear',
  season: 'Fall',
  type: 'bottom',
  subType: 'slacks',
  color: 'burnt orange',
  size: 'M', 
  lastWorn: '',
  image: '/images/medium_highWaistedRedDressPants.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Spring',
  type: 'top',
  subType: 'tee',
  color: 'orange',
  size: 'XS', 
  lastWorn: '',
  image: '/images/orangeRunningShirt.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Summer',
  type: 'top',
  subType: 'sports bra',
  color: 'neon pink',
  size: 'M', 
  lastWorn: '',
  image: '/images/pinkSportsBra.jpeg'
 },
 {
  category: 'NightWear',
  season: 'Summer',
  type: 'top',
  subType: 'crop top',
  color: 'red',
  size: 'M', 
  lastWorn: '',
  image: '/images/redcrop.jpeg'
 },
 {
  category: 'ActiveWear',
  season: 'Winter',
  type: 'top',
  subType: 'hoodie',
  color: 'black',
  size: 'S', 
  lastWorn: '',
  image: '/images/runningSweater.jpeg'
 },
 {
  category: 'DayWear',
  season: 'Summer',
  type: 'top',
  subType: 'crop top',
  color: 'white',
  size: 'M', 
  lastWorn: '',
  image: '/images/whitecrop.jpeg'
 },
 {
  category: 'ProfessionalWear',
  season: 'Fall',
  type: 'top',
  subType: 'mock turtleneck',
  color: 'mustard',
  size: 'S', 
  lastWorn: '',
  image: '/images/yellowMiniTurtleneck.jpeg'
 }
]


  Clothing.create(clothes)
  .then((response)=>{
      console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })
