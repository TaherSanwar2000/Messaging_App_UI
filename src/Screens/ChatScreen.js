import { ImageBackground,FlatList,StyleSheet } from 'react-native'
import BG from "../../assets/images/BG.png";
import Message from '../component/Message';
import messages from "../../assets/data/messages.json";
import InputBox from '../component/InputBox';
import { useNavigation, useRoute} from '@react-navigation/native';
import { useEffect } from 'react';

const ChatScreen = () => {
const navigation = useNavigation();
const route = useRoute();

useEffect(() => {
  navigation.setOptions({ title: route.params.name });
}, [route.params]);

  return (
    <ImageBackground source={BG} style={styles.bg}>
      <FlatList
      data={messages}
      renderItem={({item})=><Message message={item}/>}
      style={{ padding: 10 }}
      inverted
      />
    <InputBox/>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

});

export default ChatScreen