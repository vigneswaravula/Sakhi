import Geolocation from 'react-native-geolocation-service';

export const getCurrentLocation = (successCallback: Function, errorCallback: Function) => {
  Geolocation.getCurrentPosition(
    position => successCallback(position),
    error => errorCallback(error),
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};
