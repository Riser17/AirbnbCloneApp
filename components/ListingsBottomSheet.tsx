import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetBackdrop,
  BottomSheetFooter,
} from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

import Listing from "@/components/Listings";
import Colors from "@/constants/Colors";

interface Props {
  listings: any[];
  category: string;
}
const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState(0);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      animateOnMount={true}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      //   handleComponent={topHeader}
      //   backdropComponent={renderBackdrop}
      style={styles.sheetContainer}
    >
      <View style={{ flex: 1 }}>
        <Listing listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
            <Text style={{ fontFamily: "mon-sb", color: "#fff" }}>Map</Text>
            <Ionicons size={24} color={"#fff"} name="map" />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    padding: 16,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingsBottomSheet;
