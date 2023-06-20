import { Image, ScrollView, StatusBar, View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';

import { useTheme } from 'styled-components/native'



const LogRegInput = (props) => {
    const theme = useTheme()
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const childrenArray = React.Children.toArray(props.children);

    return(
        <View 
            style={{
                backgroundColor: 'white',
                width: 360,
                height: 40,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                paddingLeft: 15 ,
                marginTop: 10,
                marginBottom: 10
            }}
            {...props}
        >
            {React.Children.toArray(props.children)}
            <TextInput
                style={{
                    flex: 1,
                    marginLeft: 10
                }}
                value={inputText}
                onChangeText={handleInputChange}
                placeholder={props.placeholder}
            />
        </View>
    )
}

export default LogRegInput