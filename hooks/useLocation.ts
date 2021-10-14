import  { useEffect, useState } from "react";
import * as Location from "expo-location";
 
 const useLocation = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>();

    const requestLocationPermission = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("You have to enable the permission to use the app");
        return;
      }
      let location = await Location.getLastKnownPositionAsync();
      setLocation(location);
    };
  
    useEffect(() => {
      requestLocationPermission();
    }, []);

    return location;

}

export default useLocation;