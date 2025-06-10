export let symbolRate = async (req,res)=>
{
    let {dataRate,modulationFactor,fec}=req.body;
    let symbolRate = dataRate / (modulationFactor * fec);
    let formattedSymbolRate = symbolRate.toFixed(7);
    res.send({"symbolrate":formattedSymbolRate});
}