export let symbolRate = async (req,res)=>
{
    let {dataRate,modulationFactor,fec}=req.body;
    let symbolRate = dataRate / (modulationFactor * fec);
    let formattedSymbolRate = symbolRate.toFixed(7);
    res.send({"symbolrate":formattedSymbolRate});
}

export let fspl =async(req,res)=>
{
    const SPEED_OF_LIGHT = 3 * Math.pow(10, 8);
    let {distance,frequency,gtx,grx}=req.body;
    frequency = 1* Math.pow(10, 9);
    let fspl = 20 * Math.log10(distance) + 20 * Math.log10(frequency) + 20 * Math.log10((4 * Math.PI) / SPEED_OF_LIGHT) - gtx - grx;
    let result =
    {
        "fspl":fspl.toFixed(2)
    }
    res.send(result);
}