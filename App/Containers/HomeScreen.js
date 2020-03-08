import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,ImageBackground,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity } from 'react-native'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Header,Left,Body,Right,Container,Content,Footer, Text,Button, Icon} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

const summer = [  
  {
      id: 1,
      title: 'Tola Masha Ratti',
      name: 'Calculator',
      screen:'TolamasharattiScreen'
  },
  {
    id: 1,
    title: 'Rupees to Weight',
    name: 'Calculator',
    screen:'TolamasharattiScreen'
},
{
  id: 1,
  title: 'Grams',
  name: 'Calculator',
  screen:'TolamasharattiScreen'
},
{
id: 1,
title: 'Adding and subtracting',
name: 'Calculator',
screen:'TolamasharattiScreen'
},
{
  id: 1,
  title: 'Cut ratio determine',
  name: 'Calculator',
  screen:'TolamasharattiScreen'
},
{
id: 1,
title: 'Karate Impurity',
name: 'Calculator',
screen:'TolamasharattiScreen'
},  {
  id: 1,
  title: 'Make Karate',
  name: 'Calculator',
  screen:'TolamasharattiScreen'
},
{
id: 1,
title: 'Help',
name: 'Calculator',
screen:'TolamasharattiScreen'
}
]

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      DISHES: summer,

    }
  }
  render () {
    return (
      <Container style={styles.container}>
        {/* <Header style={styles.header}></Header> */}
        <View style={styles.view1}>
          <Image style={styles.image} source={require('../Images/J.png')}></Image>
        </View>
        <View style={styles.view2}>
          <FlatList
          scrollEnabled={false} 
          data={this.state.DISHES}
          renderItem={({item}) => (
            <TouchableOpacity  light onPress={()=>this.props.navigation.navigate(item.screen)} style={styles.touch} >  

            <Text style={{  alignContent:'center', fontSize:hp('2%'), marginBottom:5,color:'black'}}>{item.title}</Text>
            <Text style={{  alignContent:'center', fontSize:hp('1.5%'),color:'black'}}>{item.name}</Text>
            </TouchableOpacity> 
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Container>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
