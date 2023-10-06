import { Drawer } from "expo-router/drawer";
import Icon from 'react-native-vector-icons/Feather';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Agendamento" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Agendamento",
          title: "Agendamento",
          // drawerItemStyle: { height: 0 }
        }}
      />
            <Drawer.Screen
        name="Dados" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Dados",
          title: "Dados",
          // drawerItemStyle: { height: 0 }
        }}
      />
            {/* <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
        }}
      /> */}
    </Drawer>
  );
}
