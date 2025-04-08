import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#045800" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#545454" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: "#dff4ff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    height: 200,
    width: 200,
    margin: 10,
  }
});