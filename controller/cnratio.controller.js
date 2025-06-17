export let cnratio =async (req,res)=>
{
    let {eirp,fspl,gtratio,bandwidth}=req.body;
    const k =-228.6;
    let CN = eirp - fspl + gtratio - k-bandwidth;
    let result ={
        "cnratio":CN
    }
    res.send(result);
}