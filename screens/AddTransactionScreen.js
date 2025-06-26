import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import { TransactionContext } from '../context/TransactionContext';

const COLORS = {
  Credit: '#00c897',
  Debit: '#fd79a8',
  Refund: '#4e9af1',
  '🛍️ Shopping': '#00c897',
  '✈️ Travel': '#4e9af1',
  '💡 Utility': '#f1c40f',
  '🍽️ Food': '#fd79a8',
  '🏥 Medical': '#a29bfe',
  '🎉 Entertainment': '#ff7675',
  '📚 Education': '#55efc4',
  '🔧 Other': '#636e72',
  Default: '#34495e',
};

const AddTransactionScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Credit');
  const [category, setCategory] = useState('🛍️ Shopping');

  const { addTransaction } = useContext(TransactionContext);

  const handleAdd = () => {
    if (!amount || !description || !location) {
      Toast.show({
        type: 'error',
        text1: 'Missing Fields',
        text2: 'Please complete all fields.',
      });
      return;
    }

    const newTransaction = {
      date: date.toISOString().split('T')[0],
      amount,
      description,
      location,
      type,
      category,
    };

    addTransaction(newTransaction);

    Toast.show({
      type: 'success',
      text1: 'Transaction Added 🎉',
      text2: `${category} - $${amount}`,
    });

    setTimeout(() => {
      navigation.navigate('StatsReport');
    }, 1500);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>➕ Add Transaction</Text>

        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text style={styles.inputText}>
            📅 {date.toISOString().split('T')[0]}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeDate}
          />
        )}

        <TextInput
          placeholder="💲 Amount"
          placeholderTextColor="#888"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="📝 Description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="📍 Location"
          placeholderTextColor="#888"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        <Text style={styles.label}>💳 Type</Text>
        <View style={[styles.badge, { backgroundColor: COLORS[type] || COLORS.Default }]}>
          <Text style={styles.badgeText}>{type}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={type}
            onValueChange={setType}
            style={{ color: COLORS[type] || COLORS.Default }}
          >
            <Picker.Item label="Credit" value="Credit" color={COLORS.Credit} />
            <Picker.Item label="Debit" value="Debit" color={COLORS.Debit} />
            <Picker.Item label="Refund" value="Refund" color={COLORS.Refund} />
          </Picker>
        </View>

        <Text style={styles.label}>🏷️ Category</Text>
        <View style={[styles.badge, { backgroundColor: COLORS[category] || COLORS.Default }]}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            onValueChange={setCategory}
            style={{ color: COLORS[category] || COLORS.Default }}
          >
           {Object.entries(COLORS)
  .filter(([key]) => !['Credit', 'Debit', 'Refund', 'Default'].includes(key))
  .map(([key, color]) => (
    <Picker.Item key={key} label={key} value={key} color={color} />
))}

          </Picker>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleAdd} activeOpacity={0.8}>
        <Text style={styles.buttonText}>💾 Save</Text>
      </TouchableOpacity>

      <Toast />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f9',
    paddingBottom: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 16,
    color: '#16a085',  
    textAlign: 'center',
    fontFamily: 'Georgia',  
    textShadowColor: '#0e6655',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#2d3436',
  },
  inputText: {
    fontSize: 16,
    color: '#2d3436',
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#34495e',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 6,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00c897',
    padding: 16,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#00c897',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddTransactionScreen;
