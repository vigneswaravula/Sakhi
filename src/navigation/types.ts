// src/navigation/types.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator'; // Adjust the path as necessary

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
