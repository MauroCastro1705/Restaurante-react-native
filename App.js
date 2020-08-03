import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "../food/src/screens/SearchScreen";
import ResulstShowScreen from "../food/src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detalle: ResulstShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ffdd33",
        shadowColor: "white",
        elevation: 0,
      },
      title: "Restaurantes",
    },
  }
);

export default createAppContainer(navigator);
