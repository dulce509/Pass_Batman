
import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './BatImputStyle';

interface BatTextImputProps{
    pass: string
}

export function BatTextImput(props: BatTextImputProps){
    return(
         <TextInput 
         style={styles.inputer} 
         placeholder='pass'
         value={props.pass}
         
         />
        
    );
}