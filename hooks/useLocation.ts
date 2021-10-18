import  { useEffect, useState } from "react";
import * as Location from "expo-location";

type Coord = {
  longitude: number ,
  latitude: number ,
}
 
 const useLocation = () => {
    const [location, setLocation] = useState<Coord>({longitude: 0, latitude: 0});

    const requestLocationPermission = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("You have to enable the permission to use the app");
        return;
      }
      const result = await Location.getLastKnownPositionAsync();

      if(!result ) return null;

      location.latitude = result.coords.latitude
      location.longitude = result.coords.longitude

      setLocation(location);
    };
  
    useEffect(() => {
      requestLocationPermission();
    }, []);

    return location;

}

export default useLocation;