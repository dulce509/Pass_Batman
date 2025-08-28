import React, {useState} from "react";
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyles';
import { Text, Pressable } from "react-native";
import { BatTextImput } from "../BatTextImput/BatTextImput";
import generatePass from "../../services/passwordService";

export function BatButton(){
    const[pass,setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
    return(
       <> 
        <BatTextImput pass={pass}/>

          <Pressable
            onPress={handleGenerateButton}
            style = {styles.button}>
                
            <Text style = {styles.text}> GENERATE</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.button}>
                
            <Text style={styles.text}> 🔩 COPY</Text>
        </Pressable>
       </>
    );
}

