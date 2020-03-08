import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex: 1,
    // backgroundColor:'#5bc8ac'
  },
  header:{

  },
  view1:{
    flex:1,
    //alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  },
  view2:{
    flex:2.5,
  },
  touch:{
    flex: 1, 
    flexDirection: 'column', 
    margin: 5, 
    justifyContent:'center',
    borderRadius: 10, 
    alignItems:'center',
    backgroundColor:'#EAECEE',
    height: hp('15%'),
    //shadowOpacity:5,
    width:wp('100%'),
  },
  linearGradient: {
    flex: 1,
  },
  title:{
    fontSize:hp('5%'),
    alignSelf:'center',
    color:'black'
  },
  image:{
    height:hp('30%'),
    width:wp('90%'),
    tintColor:'black'
  
  }

})
