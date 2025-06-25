// screens/FilterSearchScreen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Picker } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const FilterSearchScreen = () => {
  const { transactions } = useContext(TransactionContext);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const filtered = transactions.filter(t =>
    (!search || t.description.toLowerCase().includes(search.toLowerCase())) &&
    (!type || t.type === type) &&
    (!category || t.category === category)
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search by description" style={styles.input} onChangeText={setSearch} value={search} />

      <Text>Type</Text>
      <Picker selectedValue={type} onValueChange={setType}>
        <Picker.Item label="All" value="" />
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      <Text>Category</Text>
      <Picker selectedValue={category} onValueChange={setCategory}>
        <Picker.Item label="All" value="" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.date} - {item.description} - ${item.amount}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});

export default FilterSearchScreen;
