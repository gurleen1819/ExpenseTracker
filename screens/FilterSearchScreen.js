import React, { useContext, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TransactionContext } from '../context/TransactionContext';

const COLORS = {
  Credit: '#00c897',
  Debit: '#fd79a8',
  Refund: '#4e9af1',
  Shopping: '#00c897',
  Travel: '#4e9af1',
  Utility: '#f1c40f',
  Default: '#34495e',
};

const FilterSearchScreen = () => {
  const { transactions } = useContext(TransactionContext);

  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [filtered, setFiltered] = useState(transactions);

  const handleSearch = () => {
    const result = transactions.filter(t =>
      (!search || t.description.toLowerCase().includes(search.toLowerCase())) &&
      (!type || t.type === type) &&
      (!category || t.category === category)
    );
    setFiltered(result);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>🔍 Filter & Search</Text>

      <TextInput
        placeholder="Search by description"
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholderTextColor="#888"
      />

      <Text style={[styles.label, { color: COLORS.Credit }]}>Type</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={type}
          onValueChange={setType}
          style={{ color: type ? COLORS[type] || COLORS.Default : '#888', fontWeight: 'bold' }}
        >
          <Picker.Item label="All" value="" color={COLORS.Default} />
          <Picker.Item label="Credit" value="Credit" color={COLORS.Credit} />
          <Picker.Item label="Debit" value="Debit" color={COLORS.Debit} />
          <Picker.Item label="Refund" value="Refund" color={COLORS.Refund} />
        </Picker>
      </View>

      <Text style={[styles.label, { color: COLORS.Shopping }]}>Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={category}
          onValueChange={setCategory}
          style={{ color: category ? COLORS[category] || COLORS.Default : '#888', fontWeight: 'bold' }}
        >
          <Picker.Item label="All" value="" color={COLORS.Default} />
          <Picker.Item label="Shopping" value="Shopping" color={COLORS.Shopping} />
          <Picker.Item label="Travel" value="Travel" color={COLORS.Travel} />
          <Picker.Item label="Utility" value="Utility" color={COLORS.Utility} />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSearch} activeOpacity={0.8}>
        <Text style={styles.buttonText}>🔎 Search</Text>
      </TouchableOpacity>

      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={[styles.listItem, { color: COLORS[item.type] || COLORS.Default }]}>
            <Text style={{ fontWeight: '600' }}>{item.date} - </Text>
            <Text style={{ fontWeight: '400' }}>{item.description} - </Text>
            <Text style={{ fontWeight: '600' }}>${item.amount}</Text>
          </Text>
        )}
        style={{ marginTop: 10 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6f9',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: '900',
    color: '#16a085', 
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Georgia',
    textShadowColor: '#0e6655',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginBottom: 15,
    fontSize: 18,
    color: '#2d3436',
    // fontFamily: 'Arial',
    fontWeight:  'normal',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Arial',
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#00c897',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#00c897',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 20,
    fontFamily: 'Arial',
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    fontFamily: 'Arial',
  
  },
});

export default FilterSearchScreen;
