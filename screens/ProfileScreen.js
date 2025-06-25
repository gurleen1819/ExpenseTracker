// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleResetApp = () => {
    Alert.alert("Reset App", "This would clear data in real app.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Username: admin</Text>
      <Text>Email: admin@example.com</Text>
      <Button title="Reset App" onPress={handleResetApp} />
      <Button title="Logout" onPress={() => navigation.replace('SignIn')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});

export default ProfileScreen;
