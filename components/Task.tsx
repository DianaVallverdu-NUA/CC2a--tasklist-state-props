// react
import { useState } from "react";

// react native
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

// interfaces & types
interface TaskProps {
  description: string;
  id: number;
  deleteTask: (taskId: number) => void;
}

// styles
const mainViewStyle = {
  flexDirection: "row",
  marginVertical: 5,
  justifyContent: 'space-between'
} as StyleProp<ViewStyle>;

const leftViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  maxWidth: 200
} as StyleProp<ViewStyle>;

// styles
const deleteButtonStyle = {
  borderRadius : 5,
  backgroundColor: "rgb(255, 100, 100)",
  borderWidth: 0,
};

const Task = (props: TaskProps) => {
  // extract props
  const { description, id, deleteTask } = props;

  // state - manage when checkbox is checked
  const [checked, setChecked] = useState<Boolean>(false);

  // handlers
  const onCheckboxChange = () => {
    setChecked(!checked);
  };

  const onDeleteHandler = () => {
    deleteTask(id);
  };

  // state dependent style
  const textStyle = {
    textDecorationLine: checked ? "line-through" : "none",
    margin: 5,
  } as StyleProp<TextStyle>;

  return (
    <View style={mainViewStyle}>
      {/* left - checkbox & text */}
      <View style={leftViewStyle}>
        {/* checkbox input */}
        <input type="checkbox" onChange={onCheckboxChange}></input>

        {/* display task description */}
        <Text style={textStyle}>{description}</Text>
      </View>

      {/* right - delete button */}
      <View>
        {/* button to delete task from main tasklist */}
        <button
          style={deleteButtonStyle}
          onClick={onDeleteHandler}>
        <Image source={require("../assets/icons/delete.svg")}></Image>
        </button>
      </View>
    </View>
  );
};

export default Task;
