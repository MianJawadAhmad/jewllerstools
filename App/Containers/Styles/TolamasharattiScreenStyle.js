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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  inputView:{
    //flexDirection:''
  },
  inputItem:{
    width: wp('99%'),
    height:hp('10%')
  },
  clearButton:{
    width:wp('11%'),
    borderRadius:hp('4%'),
    alignSelf:'center',
    marginTop:hp('2%')

  },
  input:{
    fontSize:hp('5%'),
    flex:1,
    //backgroundColor:'black'
  },
  CardItem:{
    flexDirection:'row',
    backgroundColor:'green',
  },
  noText:{
    fontSize:hp('3%'),
    margin:9

  },
  txText:{
    fontSize:hp('2%'),
    margin:10
  }
})
