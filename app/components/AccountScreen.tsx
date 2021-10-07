import * as React from "react";
import ListItem from "./ListItem";
import Screen from "./Screen";

interface AccountScreenProps {}

const AccountScreen: React.FC<AccountScreenProps> = () => {
  return (
    <Screen>
      <ListItem
        title="Andy"
        subTitle="andyAdmin@gmail.com"
        image={require("../assets/Andy.jpg")}
      />
    </Screen>
  );
};

export default AccountScreen;
