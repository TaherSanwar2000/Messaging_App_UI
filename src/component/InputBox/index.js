import { View, TextInput,StyleSheet } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';

const InputBox = () => {

  const [newMessage, setNewMessage] = useState('');
  const onSend = () => {
    console.warn("Send a new message: ", newMessage);
  
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
     <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput 
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
        style={styles.input} placeholder='Enter Your Message Here...' />
      <MaterialIcons 
      onPress={onSend}
      style={styles.send} name="send" size={20} color="white" />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: "center",
        backgroundColor:'whitesmoke',
        borderRadius:10,
        padding:10
    },
    input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    },
    send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
    },
  });

export default InputBox;