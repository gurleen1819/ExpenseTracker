
import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>💼 Dashboard</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.replace('SignIn')}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#00c897' }]}
          onPress={() => navigation.navigate('AddTransaction')}
        >
          <Text style={styles.buttonText}>➕ Add Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#4e9af1' }]}
          onPress={() => navigation.navigate('StatsReport')}
        >
          <Text style={styles.buttonText}>📊 Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#f1c40f' }]}
          onPress={() => navigation.navigate('FilterSearch')}
        >
          <Text style={styles.buttonText}>🔍 Filter / Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#a29bfe' }]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>👤 Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#fd79a8' }]}
          onPress={() => navigation.navigate('HelpAbout')}
        >
          <Text style={styles.buttonText}>❓ Help / About</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.subheading}>🧾 Recent Transactions:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('TransactionDetail', {
                transaction: item,
                index,
              })
            }
          >
            <Text style={styles.itemText}>
              {item.description} — <Text style={{ fontWeight: 'bold' }}>${item.amount}</Text>
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f9', padding: 15 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: '#16a085',  
    fontFamily: 'Georgia',  
    textShadowColor: '#0e6655',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  actionButton: {
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2d3436',
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#dfe6e9',
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  itemText: {
    color: '#2f3542',
    fontSize: 16,
  },
});

export default DashboardScreen;
