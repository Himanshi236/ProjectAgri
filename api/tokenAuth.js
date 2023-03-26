const jwt=require("jsonwebtoken")

module.exports=async(req,res,next)=>{
    // tryin to get the authentication token from the authorization header
    try{
        const token=await req.headers.authorization.split(" ")[1];
        //check if the token matches the supposed origin
        const decodedToken=await jwt.verify(token,process.env.SECRET_KEY)

        // // retrieve the user details of the logged in user
        const user=await decodedToken;

        // pass the user down to the endpoints here
        request.user = user;

        // pass down functionality to the endpoint
        next();

    }catch(err){
        res.status(401).json("Invalid request")
    }
}