import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} {...props} style={{ color: props.color }} />;
}

const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 5,
            backgroundColor: "white",
            height: 60, // Ensures consistent height for the tab bar
          },
          headerShown: false, // Hides the header globally for all screens
        }}
      >
        <Tabs.Screen
          name="index" // Ensure this matches app/index.tsx
          options={{
            title: "Shop",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} name="shopping-cart" />
            ),
          }}
        />
        <Tabs.Screen
          name="orders" // Ensure this matches app/orders.tsx
          options={{
            title: "Orders",
            tabBarIcon: (props) => <TabBarIcon {...props} name="list" />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white", // Prevents any background color issues
  },
});
