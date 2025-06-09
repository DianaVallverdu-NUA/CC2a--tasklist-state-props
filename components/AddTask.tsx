// react
import { useState } from "react";

// react native
import { Button, StyleProp, TextInput, View, ViewStyle } from "react-native";

// types & interfaces
interface AddTaskProps {
  addTask: (task: string) => void;
}

// custom styles
const mainViewStyle = { flexDirection: "row", margin: 10}  as StyleProp<ViewStyle>;
const textInputStyle = { backgroundColor: "white" };

// main class
const AddTask = (props: AddTaskProps) => {
  // export props
  const { addTask } = props;

  // task state - stores temporary description
  const [task, setTask] = useState<string>("");

  // handlers
  const onButtonPress = () => {
    addTask(task);
  };

  // JSX
  return (
    <View style={mainViewStyle}>
      {/* task description input */}
      <TextInput
        value={task}
        onChangeText={setTask}
        style={textInputStyle}
      ></TextInput>

      {/* button to add task to main list */}
      <Button title="Add Task" onPress={onButtonPress}></Button>
    </View>
  );
};

export default AddTask;
