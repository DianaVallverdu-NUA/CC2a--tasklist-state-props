import { useState } from "react";
import {
  Button,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface TaskProps {
  description: string;
  id: number;
  deleteTask: (taskId: number) => void;
}

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

  // styles
  const mainViewStyle = {
    flexDirection: "row",
    alignItems: "center",
  } as StyleProp<ViewStyle>;

  const textStyle = {
    textDecorationLine: checked ? "line-through" : "none",
    margin: 5,
  } as StyleProp<TextStyle>;

  return (
    <View style={mainViewStyle}>
      {/* checkbox input */}
      <input type="checkbox" onChange={onCheckboxChange}></input>

      {/* display task description */}
      <Text style={textStyle}>{description}</Text>

      {/* button to delete task from main tasklist */}
      <Button
        color="red"
        title="Delete Task"
        onPress={onDeleteHandler}
      ></Button>
    </View>
  );
};

export default Task;
