import dotenv from 'dotenv';

dotenv.config();

const secret= process.env.API_KEY;

const auth = async(req,res,next)=>
{
    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer'))
        {
    try{
        const token = req.headers.authorization.split(" ")[1];
        

        
        if(token==secret)
        {

            next();

        }
        else{
            res.json({message:"bearer token not matched auth failed"});

        }
    
       

    }
    catch(error)

    {
        console.log(error);
    }
}
else{
    res.json({message:"no Authorized bearer token in request"});
}
}

export default auth;