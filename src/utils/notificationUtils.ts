import { Alert } from 'react-native';

export const sendAlertNotification = (message: string) => {
  Alert.alert("Notification", message);
  // Additional logic to send notifications goes here.
};
