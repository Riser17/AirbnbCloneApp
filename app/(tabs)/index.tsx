import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listings";
import listingData from "@/assets/data/airbnb-listings.json";
import listingDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const [category, setCategory] = useState("Ting homes");
  const items = useMemo(() => listingData as any, []);
  const geoItems = useMemo(() => listingDataGeo as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />
        {/* <Listing listings={items} category={category} /> */}
        <ListingsMap listings={geoItems} />
        <ListingsBottomSheet listings={items} category={category} />
      </GestureHandlerRootView>
    </View>
  );
};

export default Page;
