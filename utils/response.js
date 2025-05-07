export let response=(res,data=null,message,success="ok",status=200)=>
    {
        let responseData={
            message,status,success
        }
        if(data !=null)
        {
            responseData.data=data;
        }
        return res.json(responseData)
    }