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
        console.log(token);

        
        if(token==secret)
        {

            next();

        }
        else{
            res.json({message:"bearer token not matched"});

        }
    
       

    }
    catch(error)

    {
        console.log(error);
    }
}
else{
    res.json({message:"no bearer token"});
}
}

export default auth;