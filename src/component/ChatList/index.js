import {View,Text,Image,StyleSheet,Pressable} from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useNavigation } from '@react-navigation/native';

const ChatListItem = ({chat})=>{
  const navigation = useNavigation();
    return(
        <Pressable onPress={() => navigation.navigate("Chat", {id: chat.id, name: chat.user.name})}
        style={style.container}>
            <Image source = {{uri:chat.user.image}}
            style = {style.image}/>
            <View style={style.content}>
                <View style={style.row}>
                <Text style={style.name} numberOfLines={1}>{chat.user.name}</Text>
                <Text style={style.subTitle} >{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
                </View>
                <Text style={style.subTitle} numberOfLines={2}>{chat.lastMessage.text}</Text>
            </View>

        </Pressable> 
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
      },
      image: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
      },
      content: {
        flex: 1,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      row: {
        flexDirection: "row",
        marginBottom: 5,
      },
      name: {
        fontWeight: "bold",
        flex: 1,
      },
      subTitle: {
        color: "grey",
      },
    
});

export default ChatListItem;