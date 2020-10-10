import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Form from '../components/Form'

function TodoScreen({ navigation }) {

    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [todos, setTodos] = useState([]); // Initial empty array of todos

    useEffect(() => {
        const subscriber = firestore()
            .collection('todos')
            .onSnapshot(querySnapshot => {
                const todos = [];

                querySnapshot.forEach(documentSnapshot => {
                    todos.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                // console.log(todos)
                setTodos(todos);
                setLoading(false);
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    const handleAddTodo = (data) => {
        console.log('submitted data', data)
        const { title, description } = data
        firestore().collection("todos").add({
            title, description
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                Alert.alert(
                    "Success",
                    "Successfully added todo",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                Alert.alert(
                    "Error",
                    "Error adding document",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            });
    }

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Form onPress={handleAddTodo} />
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text>ID: {item.key}</Text>
                        <Text>Title: {item.title}</Text>
                    </View>
                )}
            />
        </View>
    )

}


export default TodoScreen