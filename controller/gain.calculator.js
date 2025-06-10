export let gainCalculator =async (req,res)=>
{
    let {diameter,frequency}=req.body;
    frequency =1* Math.pow(10,9);
    console.log(frequency + " GHz");
    let wavelength = (3 * Math.pow(10,8) / frequency);
    console.log(wavelength);
    let gain = 0.7 * (22/7) * (22/7) * Math.pow(diameter / wavelength, 2);
    console.log(gain);
    let gainInGHz = Math.floor(10 * Math.log10(gain));
    console.log(gainInGHz + " dB");
    let result =
    {
        "wavelength":wavelength,
        "gain":gainInGHz
    }
    res.send(result);
}