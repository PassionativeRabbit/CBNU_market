import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {Input, Button} from '../components';
import { validateEmail, removeWhitespace } from '../utils/common';
import {Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Container=styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:${({theme})=>theme.background};
    padding: 0 20px;
`;
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const SignupScreen=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    useEffect(()=>{
        let _errorMessage='';
        if (!name){
            _errorMessage='Please enter your name.';
        } else if (!validateEmail(email)){
            _errorMessage='Please verify your email.';
        } else if (password.length<6){
            _errorMessage='The password must contain 6 characters at least.';
        } else if (password!==passwordConfirm){
            _errorMessage='Password need to match.';
        } else{
            _errorMessage='';
        }
        setErrorMessage(_errorMessage);
    }, [name,email,password,passwordConfirm]);

    useEffect(()=>{
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        );
    }, [name,email,password,passwordConfirm,errorMessage]);

    const _handleSignupButtonPress=()=>{};

    return(
        <KeyboardAwareScrollView>
        <Container>
            <Text style={{fontSize:30}}>회원가입 스크린</Text>
            <Input
                label="Name"
                value={name}
                onChangeText={text=>setName(text)}
                onSubmitEditing={()=>{
                setName(name.trim());
                emailRef.current.focus();
                }}
                onBlur={()=>setName(name.trim())}
                placeholder="Name"
                returnKeyType="next"
            />
            <Input
                ref={emailRef}
                label="Email"
                value={email}
                onChangeText={text=>setEmail(removeWhitespace(text))}
                onSubmitEditing={()=>passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={text=>setPassword(removeWhitespace(text))}
                onSubmitEditing={()=>passwordConfirm.current.focus()}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <Input
                ref={passwordConfirmRef}
                label="Password Confirm"
                value={passwordConfirm}
                onChangeText={text=>setPasswordConfirm(removeWhitespace(text))}
                onSubmitEditing={_handleSignupButtonPress}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button
                title="SignupScreen"
                onPress={_handleSignupButtonPress}
                disabled={disabled}
                />


        </Container>
        </KeyboardAwareScrollView>
    );
};

export default SignupScreen;