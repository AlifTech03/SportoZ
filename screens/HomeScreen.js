import {
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import {
  ArrowLeftOnRectangleIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  Cog8ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
} from "react-native-heroicons/outline";

//files
import LiveMatches from "../components/homeScreens/LiveMatches";
import UpcominMatches from "../components/homeScreens/UpcominMatches";
import TopPlayers from "../components/homeScreens/TopPlayers";
import TopNews from "../components/homeScreens/TopNews";

const HomeScreen = () => {
  const [onTab, setOnTab] = useState("SportOz");
  const [showDrawer, setShowDrawer] = useState("false");
  //animated properties

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButton = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={AndroidSafeArea.AndroidSafeArea}
      className="flex-1 bg-mainColor"
    >
      <View>
        <Image
          source={require("../assets/images/ronaldo.png")}
          className="h-10 w-10 rounded-lg bg-flashOrange mx-5 mt-3"
        />
        <TouchableOpacity>
          <Text className="text-font-main px-2  "> View Profile </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <TabButton
          title="SportOz"
          icon={
            <HomeIcon
              size={20}
              color={onTab === "SportOz" ? "#FF7401" : "#6B6B6B"}
              strokeWidth={2}
            />
          }
          onTab={onTab}
          setOnTab={setOnTab}
        />
        <TabButton
          title="Top Players"
          icon={
            <Square3Stack3DIcon
              size={20}
              color={onTab === "Top Players" ? "#FF7401" : "#6B6B6B"}
              strokeWidth={2}
            />
          }
          onTab={onTab}
          setOnTab={setOnTab}
        />
        <TabButton
          title="Notifications"
          icon={
            <BellIcon
              size={20}
              color={onTab === "Notifications" ? "#FF7401" : "#6B6B6B"}
              strokeWidth={2}
            />
          }
          onTab={onTab}
          setOnTab={setOnTab}
        />
        <TabButton
          title="settings"
          icon={
            <Cog8ToothIcon
              size={20}
              color={onTab === "settings" ? "#FF7401" : "#6B6B6B"}
              strokeWidth={2}
            />
          }
          onTab={onTab}
          setOnTab={setOnTab}
        />
      </View>
      <View className="mb-7">
        <TabButton
          title="Log Out"
          icon={
            <ArrowLeftOnRectangleIcon
              size={20}
              color="#6B6B6B"
              strokeWidth={2}
            />
          }
          onTab={onTab}
          setOnTab={setOnTab}
        />
      </View>
      {!showDrawer && (
        <TouchableOpacity
          className="absolute h-full w-[37%] right-0 opacity-25 bg-secondary z-50"
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showDrawer ? 0.88 : 1,
              useNativeDriver: true,
              duration: 400,
            }).start();
            Animated.timing(offsetValue, {
              toValue: showDrawer ? 240 : 0,
              useNativeDriver: true,
              duration: 400,
            }).start();
            setShowDrawer(!showDrawer);
          }}
        >
          {/* <View className="absolute h-full w-[37%] right-0 opacity-25 bg-secondary z-50" /> */}
        </TouchableOpacity>
      )}
      <Animated.View
        className="flex-1 absolute bg-mainColor right-0 top-0 bottom-0 left-0 mt-6"
        style={{
          borderRadius: showDrawer ? 10 : 0,
          transform: [
            {
              scale: scaleValue,
            },
            {
              translateX: offsetValue,
            },
          ],
        }}
      >
        <View className="flex-row p-4 space-x-3 items-center">
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showDrawer ? 0.88 : 1,
                useNativeDriver: true,
                duration: 400,
              }).start();
              Animated.timing(offsetValue, {
                toValue: showDrawer ? 240 : 0,
                useNativeDriver: true,
                duration: 400,
              }).start();
              setShowDrawer(!showDrawer);
            }}
          >
            <View className="h-7 w-7 bg-secondary rounded-full items-center justify-center">
              <Bars3BottomLeftIcon
                size={17}
                strokeWidth={3}
                color="#959595"
                className="items-center"
              />
            </View>
          </TouchableOpacity>
          <View className="flex-1">
            <Image
              source={require("../assets/images/SportoZ.png")}
              className="h-6 w-24 object-contain"
            />
          </View>
          <TouchableOpacity>
            <View className="h-7 w-7 bg-secondary rounded-full items-center justify-center">
              <View className="absolute h-1 w-1 top-0 right-1 rounded-full bg-flashOrange" />
              <BellIcon size={17} color="#959595" className="items-center" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="h-7 w-7 bg-secondary rounded-full items-center justify-center">
              <MagnifyingGlassIcon
                size={17}
                color="#959595"
                className="items-center"
              />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* livematches */}
          <LiveMatches />
          {/* upcomingMatches */}
          <UpcominMatches />
          {/* TopPlayers */}
          <TopPlayers />
          {/* News Feed */}
          <TopNews />
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const TabButton = ({ onTab, setOnTab, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === "Log Out") {
        } else {
          setOnTab(title);
        }
      }}
    >
      <View
        className="flex-row items-center justify-start space-x-2 px-4 py-2  rounded-lg mt-6 mx-7"
        style={{
          backgroundColor: onTab === title ? "#2B3038" : "transparent",
          width: 200,
        }}
      >
        {icon}
        <Text
          className={
            onTab === title
              ? "font-bold text-lg text-flashOrange"
              : "font-bold text-lg text-font-secondary"
          }
        >
          {" "}
          {title}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default HomeScreen;
