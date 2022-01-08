import React, {useState, Component} from 'react';
import {TextInput, Button} from 'react-native';

const Form = ({onPress}) => {
  const [title, onChangeTitle] = useState('Example title');
  const [description, onChangeDescription] = useState('Example description');

  const handleSubmit = () => {
    onPress({title, description});
  };

  return (
    <>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        onChangeText={(text) => onChangeTitle(text)}
        value={title}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 8}}
        onChangeText={(text) => onChangeDescription(text)}
        value={description}
      />
      <Button title="Save Todo" onPress={handleSubmit} />
    </>
  );
};

export default Form;
