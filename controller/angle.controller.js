export let calculateLookUpAngle = async (req,res)=>
{
    let {longitude,latitude,satlongitude,satlatitude,sataltitude}=req.body;
    let result =CalculateLookUpAngle(latitude,longitude,satlatitude,satlongitude,sataltitude)
    res.send(result);
}
function CalculateLookUpAngle(latitude, longitude, satLat, satLong, satAltitude) {
    const toRadians = (deg) => deg * (Math.PI / 180);

    const groundLatRad = toRadians(latitude);
    const groundLonRad = toRadians(longitude);
    const satLatRad = toRadians(satLat);
    const satLonRad = toRadians(satLong);

    const earthRadius = 6378.0; // km
    const satRadius = earthRadius + satAltitude;

    // Calculate the range vector components in the Earth-centered, Earth-fixed (ECEF) frame.
    const groundX = earthRadius * Math.cos(groundLatRad) * Math.cos(groundLonRad);
    const groundY = earthRadius * Math.cos(groundLatRad) * Math.sin(groundLonRad);
    const groundZ = earthRadius * Math.sin(groundLatRad);

    const satX = satRadius * Math.cos(satLatRad) * Math.cos(satLonRad);
    const satY = satRadius * Math.cos(satLatRad) * Math.sin(satLonRad);
    const satZ = satRadius * Math.sin(satLatRad);

    // Calculate the range vector (satellite - ground).
    const rangeX = satX - groundX;
    const rangeY = satY - groundY;
    const rangeZ = satZ - groundZ;

    // Calculate the local horizontal coordinate system (LHCS) unit vectors.
    const eastX = -Math.sin(groundLonRad);
    const eastY = Math.cos(groundLonRad);
    const eastZ = 0.0;

    const northX = -Math.sin(groundLatRad) * Math.cos(groundLonRad);
    const northY = -Math.sin(groundLatRad) * Math.sin(groundLonRad);
    const northZ = Math.cos(groundLatRad);

    const upX = Math.cos(groundLatRad) * Math.cos(groundLonRad);
    const upY = Math.cos(groundLatRad) * Math.sin(groundLonRad);
    const upZ = Math.sin(groundLatRad);

    // Calculate the azimuth and elevation.
    const east = rangeX * eastX + rangeY * eastY + rangeZ * eastZ;
    const north = rangeX * northX + rangeY * northY + rangeZ * northZ;
    const up = rangeX * upX + rangeY * upY + rangeZ * upZ;

    let azimuth = Math.atan2(east, north) * (180 / Math.PI);
    if (azimuth < 0) {
        azimuth += 360.0;
    }

    const range = Math.sqrt(rangeX * rangeX + rangeY * rangeY + rangeZ * rangeZ);
    const elevation = Math.asin(up / range) * (180 / Math.PI);

    let result =
    {
        "azimuth":azimuth,
        "elevation":elevation
    }
    return result;
}
