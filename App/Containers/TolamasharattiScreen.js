import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,TextInput,View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,Item,Input,  Button } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TolamasharattiScreenStyle'
import { T } from 'ramda';

class TolamasharattiScreen extends Component {
  constructor(){
    super();
    this.state={
      input: ''
    }
  }
  render () {
    return (
      <Container style={styles.container}>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Item regular style={styles.inputItem}>
            <TextInput style={styles.input} placeholder='1234' onChangeText={(input)=>this.setState({input: input})}/>
          </Item>
          <Button danger style={styles.clearButton}>
          <Text>C</Text>
          </Button>
         </View>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1.5}}>
            <Text style={styles.txText}>Total cut weight</Text>
            <Text style={styles.txText}>Remining weight</Text>
            <Text style={styles.txText}>Remining weight in garm</Text>
            <Text style={styles.txText}>Total Rupees</Text>
          </View>
          <View style={{flex:1,backgroundColor:''}}>
          <Text style={styles.noText}>0-1-4.1</Text>
          <Text style={styles.noText}>0-1-4.1</Text>
          <Text style={styles.noText}>4.374g</Text>
          <Text style={styles.noText}>300000</Text>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TolamasharattiScreen)
