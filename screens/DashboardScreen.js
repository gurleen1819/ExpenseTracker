// screens/DashboardScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Logout" onPress={() => navigation.replace('SignIn')} />
      </View>

      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <Button title="Reports" onPress={() => navigation.navigate('StatsReport')} />
      <Button title="Filter/Search" onPress={() => navigation.navigate('FilterSearch')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Help/About" onPress={() => navigation.navigate('HelpAbout')} />

      <Text style={styles.title}>Transactions:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item, index })}
          >
            <Text>{item.description} - ${item.amount}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 18, marginTop: 10, marginBottom: 5 },
  header: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 },
  item: { padding: 10, backgroundColor: '#eee', marginVertical: 5, borderRadius: 5 }
});

export default DashboardScreen;
