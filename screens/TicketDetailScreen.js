import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import {ListItem, Icon, BottomSheet, Button, Avatar, Card} from 'react-native-elements';
//import HeaderComponent from './frequent/HeaderComponent';
import HeaderComponent from '../components/frequent/HeaderComponent';

class TicketDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    renderDetailCard(item){
        const url = 'https://www.thoughtco.com/thmb/DBOgHVGLrn4Hy6OOlJxcdExAYuE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg';
        return( 
            <Card key={item.id}
                containerStyle={{
                    backgroundColor: '#ffffff',
                    height: "96%",
                    borderRadius: 25, borderColor: 'grey', borderWidth: 2, marginHorizontal: '3%', 
                    marginTop: '3%',
                    marginBottom: '3%'
                }} style={{justifyContent:'center', backgroundColor: '#fff'}}>
                <Card.Title style={{fontSize:20}}>{item.name}</Card.Title>
                <Avatar containerStyle={{justifyContent:'center', alignSelf: 'center', marginBottom: 20}} size={250} source={{uri:url}}/>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='coins' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Fee Paid {200}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='users' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Total Visitors {20}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='users' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Visitors Visited {10}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='bars' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Visitor Categories
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='mars' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Males {5}, Females {2}, others {1}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='glasses' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Children {5}, Adults {2}, Seniors {1}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#4b778d', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='flag' type="font-awesome-5" color='#4b778d' size={18}
                        iconStyle={{marginRight: 10}} />Local {5}, Foreigners {3}
                </Text>
            </Card> 
        )
    }

    render(){
        return (
            <View style={styles.container}>
              <HeaderComponent icon="info" heading="TICKET DETAILS" />
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1572A1" translucent = {true}/>
              <ImageBackground source={require('../components/images/Tourist.jpeg')} style={styles.image}>
                <View style={{height:'100%', backgroundColor: "#00000099"}}>
                    {this.renderDetailCard(this.props.route.params.ticketDetail)}
                </View>
              </ImageBackground>
            </View>
          );
    }
    
}

const styles = StyleSheet.create({

  container:{
      flex: 1,
      flexDirection: 'column'
  },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    fact: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 30,
      textAlign: 'center'
    },
    wish: {
      flex: 1,
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: 'center',
      flex: 0.2,

    },
    name: {
      flex: 1,
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: 'center',
      flex: 0.2
    },
    section: {
      flex: 1,
      textAlign: "center",
    },
    scrollView: {
      flex: 1,
      backgroundColor: '#00000099'
    },
});

export default TicketDetail;