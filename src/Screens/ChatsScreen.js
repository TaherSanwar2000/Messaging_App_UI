import {FlatList} from 'react-native';
import ChatListItem from '../component/ChatList';
import Chats from '../../assets/data/chats.json'

const ChatsScreen = ()=>{
    return(
      <FlatList
      data={Chats}
      renderItem={({item})=><ChatListItem chat={item}/>}
      />
    );
};
export default ChatsScreen;