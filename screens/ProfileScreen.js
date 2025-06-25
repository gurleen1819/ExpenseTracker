// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleResetApp = () => {
    Alert.alert(
      "Reset App",
      "This action will clear all your data. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: () => Alert.alert("App reset!") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.name}>Gurleen Kaur</Text>
        <Text style={styles.username}>Username: <Text style={styles.info}>admin</Text></Text>
        <Text style={styles.email}>Email: <Text style={styles.info}>admin@example.com</Text></Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleResetApp}>
        <Text style={styles.buttonText}>Reset App</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f0f4f8', 
    padding: 20 
  },
  profileCard: {
    backgroundColor: '#4e9af1',
    width: '100%',
    borderRadius: 15,
    padding: 30,
    marginBottom: 40,
    shadowColor: '#3b6fd6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 7,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  username: {
    fontSize: 18,
    color: '#cce5ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#cce5ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontWeight: '600',
    color: '#dbe9ff',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  resetButton: {
    backgroundColor: '#fd79a8',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default ProfileScreen;
