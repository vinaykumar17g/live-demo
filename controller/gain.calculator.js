export let gainCalculator =async (req,res)=>
{
    let {diameter,frequency}=req.body;
    frequency =1* Math.pow(10,9);

    let wavelength = (3 * Math.pow(10,8) / frequency);

    let gain = 0.7 * (22/7) * (22/7) * Math.pow(diameter / wavelength, 2);

    let gainInGHz = Math.floor(10 * Math.log10(gain));
    
    let result =
    {
        "gain":gainInGHz
    }
    res.send(result);
}