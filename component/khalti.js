import { Router, response } from "express";
import request from "request";
const router=Router()





router.get('/khalti',(req,res)=>{
    //payload data is to be set to be recieved from frontend
    var options = {
        'method': 'POST',
        'url': 'https://a.khalti.com/api/v2/epayment/initiate/',
        'headers': {
        'Authorization': 'key live_secret_key_68791341fdd94846a146f0457ff7b455',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "return_url": "http://example.com/",
        "website_url": "https://example.com/",
        "amount": "1000",
        "purchase_order_id": "Order01",
        "purchase_order_name": "test",
        "customer_info": {
            "name": "Ram Bahadur",
            "email": "test@khalti.com",
            "phone": "9800000001"
        }
        })
    
    };
    
    request(options,(error,reponse)=>{
        if(error) throw new Error(error);

        //parse JSON parse response body to read its values as it will be in string format
        try{
        console.log(response.body)
        res.json(JSON.parse(reponse.body).pidx)
        }catch(err){
            res.json(err)
        }
    })
})

export default router