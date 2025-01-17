const mongoose = require("mongoose");
const review = require("./review.js");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },   
    description: String,
    image: {
        type: String,
        default:
            "https://th.bing.com/th/id/OIP.eqKY8-vkKAtnfhyC_ELcPgHaEK?pid=ImgDet&w=474&h=266&rs=1",
        set: (v) =>
            v === " "
        ? "https://th.bing.com/th/id/OIP.eqKY8-vkKAtnfhyC_ELcPgHaEK?pid=ImgDet&w=474&h=266&rs=1"
        :v,
   },  
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;