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
      title: "Restaurantes",
    },
  }
);

export default createAppContainer(navigator);
