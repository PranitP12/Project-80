import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Platform,ImageBackground,Image } from 'react-native'

export default class Homescreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafearea}/>
                <ImageBackground source={require('../assets/space.gif')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                    <Text style={styles.title}>Stellar Creation</Text>
                    </View>
                    <TouchableOpacity style={styles.route} onPress={()=>{
                      this.props.navigation.navigate('Star')
                    }}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.icons}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.route} onPress={()=>{
                      this.props.navigation.navigate('Daily')
                    }}>
                        <Text style={styles.routeText}>Space Pics</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={styles.icons}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.route} onPress={()=>{
                      this.props.navigation.navigate('Space')
                    }}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.icons}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    droidSafearea:{
        marginTop: Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleBar:{
        flex: 0.25,
        justifyContent: 'center',       
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: "white",
    },
    bgImage:{
        flex:1,
        resizeMode: 'cover'
    },
    route:{
        flex: 0.25,
        width:300,
        height:30,
        marginLeft:50,
        marginRight: 50,
        marginTop:50,
        borderRadius: 20,
        borderWidth: 2,
    },
    routeText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 40,
        marginTop:40,
    },
    icons:{
        position:'absolute',
        width:130,
        height:140,
        left:150,
        resizeMode: 'contain'
    },
})