import jwt, {decode} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.auth_secret;


const auth = async(req,res,next) => 
{
    try {
        /*console.log(req.headers.authorization);*/ // uncomment to see the result.
        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, secret);
        if(decodedData?.id)
        {
            req.myMessage = "gautam";
            req.userId = decodedData.id;
            next();
        }
        else {
            return res.sendStatus(403);
        }
    } catch (error) {
        console.log(error);
    }
}
export default auth;