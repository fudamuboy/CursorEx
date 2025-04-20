import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  const [name, setName] = useState('');
  const [myNames, setMyNames] = useState([]);

  const inputHandler = (text) => {
    setName(text);
  };
  const pressHandler = () => {
    setMyNames((currentNames) => [...currentNames, name]);
    setName('');
  };

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your name" style={styles.input}
          value={name}
          onChangeText={inputHandler}
        />
        <Button title="VALIDER"
          onPress={pressHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlashList
          data={myNames}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Important: le conteneur principal doit avoir flex: 1
    padding: 20,
    paddingTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 6,
    paddingLeft: 9,
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1, // Important: le conteneur de la liste doit avoir flex: 1
    height: '100%', // Assure une hauteur suffisante
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});