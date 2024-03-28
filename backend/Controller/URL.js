let nanoid;
import("nanoid").then(module => {
  nanoid = module.nanoid;
});
const URL = require('./../Models/URL');

const shortenURL = async (req, res) => {
    try {
        // Check if the request body contains a URL
        if (!req.body || !req.body.url) {
            return res.status(400).json({ error: "URL is required in the request body" });
        }

        // Generate a new short ID using nanoid
        const shortID = nanoid(10);

        // Create a new document in the URL collection
        await URL.create({
            shortId: shortID,
            redirectURL: req.body.url,
            visitHistory: []
        });

        // Send the short ID in the response
        res.json({ id: shortID });
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error generating new short URL:", error);
        res.status(500).json({ error: "An error occurred while generating a new short URL" });
    }
};
const redirectURL = async (req,res)=>{
 try{
    // console.log(req)
    const shortID = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId: shortID,
        },
        {
            $inc: { clicks: 1 }
        }
    )    
    // res.status(200).json(entry.redirectURL)
    res.redirect(entry.redirectURL)
 }
 catch(err){
    console.log(err)
    throw new err
 }
}
const analytics=async (req, res)=>{
    try{
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    res.json({
      totalClicks: result.clicks,
    });
    }
    catch(err){ throw new err}
  }
// const qr = async (req,res)=>{
//     try{
        
//     }
//     catch(e){
//         throw new err
//     }
// }
module.exports = {shortenURL,redirectURL, analytics};
