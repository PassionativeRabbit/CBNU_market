import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components/native';
import {View,Text,Button,Image} from 'react-native';
import SignupScreen from './SignupScreen';
import TabStackScreen from '../routers/TabStackScreen';
import {Input} from '../components';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {validateEmail, removeWhitespace} from '../utils/common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;


const Container=styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:${({theme})=>theme.background};
    padding: 0 20px;
    padding-top: ${({insets:{top } })=>top}px;
    padding-bottom: ${({insets:{bottom } })=>bottom}px;
`;

const LoginScreen=({navigation})=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const passwordRef=useRef();
    const [errorMessage,setErrorMessage]=useState('');
    const _handleLoginButtonPress=()=>{};
    const [disabled,setDisabled]=useState(true);
    const insets=useSafeAreaInsets();

    useEffect(()=>{
        setDisabled(!(email && password && !errorMessage));
    }, [email,password,errorMessage]);

    const _handleEmailChange=email=>{
        const changedEmail=removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        );
    };
    const _handlePasswordChange=password=>{
        setPassword(removeWhitespace(password));
    };

    return(

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container insets={insets}>
            <Image
            style={{height:'50%',width:'50%'}}
            source={{uri:'http://cdn.ggilbo.com/news/photo/201811/562949_419593_5029.png'}}/>
            <Text style={{fontSize:30}}>로그인 스크린입니다.</Text>
            <Text />
            <Text style={{fontSize:20}}>회원가입을 아직 안하셨나요?</Text>
            <Text />
            <Input
                label="Email"
                value={email}
                onChangeText={_handleEmailChange}
                onSubmitEditing={()=>passwordRef.current.focus()}
                returnKeyType="next"
            />
            <Input
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={_handlePasswordChange}
                onSubmitEditing={_handleLoginButtonPress}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button
                title="LoginScreen"
                onPress={_handleLoginButtonPress}
                 disabled={disabled}
            />
            <Button
                title="Sign up with email"
                onPress={()=>navigation.navigate('Signup')}
                isFilled={false}
            />
        </Container>
        </TouchableWithoutFeedback>

    );
};

export default LoginScreen;