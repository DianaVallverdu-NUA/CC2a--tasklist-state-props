// react
import { useState } from "react";

// react native
import {
  Button,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

// types & interfaces
interface SetNameProps {
  setMyName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// styles
const mainViewStyle = { flexDirection: "row" } as StyleProp<ViewStyle>;
const textInputStyle = { backgroundColor: "white" } as StyleProp<TextStyle>;

// main class
const SetName = (props: SetNameProps) => {
  // extract props
  const { setMyName } = props;

  // state - stores temporary name
  const [newName, setNewName] = useState<string>();

  // handlers
  const onPressHandler = () => {
    setMyName(newName);
  };

  return (
    <View style={mainViewStyle}>
      {/* Name input */}
      <TextInput
        value={newName}
        onChangeText={setNewName}
        style={textInputStyle}
      ></TextInput>

      {/* Button to update from main component */}
      <Button title={"Update My Name"} onPress={onPressHandler}></Button>
    </View>
  );
};

export default SetName;
