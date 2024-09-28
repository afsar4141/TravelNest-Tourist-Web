const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url:String
  
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;





/*mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description:String,
    image:{
        type:String,
        default:
            "https://elements.envato.com/willow-near-pond-on-spring-countryside-3FR64BM",
        set: (v) => 
            v==="" 
           ? "https://elements.envato.com/willow-near-pond-on-spring-countryside-3FR64BM" 
           : v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;*/