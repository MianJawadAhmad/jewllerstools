import { createAppContainer } from 'react-navigation'
import TolamasharattiScreen from '../Containers/TolamasharattiScreen'
import HomeScreen from '../Containers/HomeScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TolamasharattiScreen: { screen: TolamasharattiScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TolamasharattiScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
