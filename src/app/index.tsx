import { View } from "react-native";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#edcfa8" }}>
      <View style={{ flex: 1 }}>
        <Calculator />
      </View>
      <Footer />
    </View>
  );
};

export default App;
