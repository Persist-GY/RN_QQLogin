import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

//获取屏幕信息
var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

export default class LoginView extends Component {
    render(){
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.headStyle} source={require('./image/icon.png')}/>
                {/*账号*/}
                <TextInput underlineColorAndroid={'transparent'} placeholder='请输入用户名' style={styles.textInputStyle}/>
                {/*安卓适配TextInput 把底部横线颜色改为透明*/}
                {/*密码*/}
                <TextInput underlineColorAndroid={'transparent'} secureTextEntry={true} placeholder='请输入用密码' style={styles.textInputStyle}/>
                <View style={styles.forgetStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*设置控件可点击*/}
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(123)}}>
                     <View style={styles.loginStyle}> 
                     <Text style={{color:'white'}}>登录</Text>
                </View>
                </TouchableOpacity>
                
                <View style={styles.otherViewStyle}>
                    <Text>其他登录方式</Text>
                    <Image style={styles.otherStyle} source={require('./image/icon3.png')}/>
                    <Image style={styles.otherStyle} source={require('./image/icon7.png')}/>
                    <Image style={styles.otherStyle} source={require('./image/icon8.png')}/>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //侧周所有元素居中对齐
        alignItems: 'center',
        backgroundColor: '#dddddd'
    },
    //输入框
    textInputStyle: {
        // padding: 0,
        backgroundColor: 'white',
        width: width,
        height: 40,
        //文本居中显示
        textAlign: 'center',
        marginBottom: 1
    },
    //头像
    headStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 40,
        marginBottom: 40
    },
    //无法登陆，新用户
    forgetStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width*0.9
    },
    //登录
    loginStyle: {
        marginTop: 30,
        width: width*0.9,
        backgroundColor: 'blue',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
        
    },
    otherViewStyle: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 10,
        left: width*0.1/2,
        alignItems: 'center'
    },
    //其他登录方式
    otherStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10
    }
});