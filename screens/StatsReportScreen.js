import React, { useContext } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
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
};

const StatsReportScreen = () => {
  const { transactions } = useContext(TransactionContext);

  const total = transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const byType = transactions.reduce((acc, t) => {
    acc[t.type] = (acc[t.type] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  const byCategory = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  const maxType = Math.max(...Object.values(byType), 1);
  const maxCategory = Math.max(...Object.values(byCategory), 1);

  
  const typeData = Object.entries(byType).map(([key, value]) => ({ key, value }));
  const categoryData = Object.entries(byCategory).map(([key, value]) => ({ key, value }));

  // Render bar helper
  const renderBar = (item, max, colorKey) => {
    const widthPercent = (item.value / max) * 100;
    return (
      <View style={styles.barContainer}>
        <Text style={styles.barLabel}>
          {item.key} (${item.value.toFixed(2)})
        </Text>
        <View
          style={[
            styles.bar,
            { width: `${widthPercent}%`, backgroundColor: COLORS[colorKey] || '#3498db' },
          ]}
        />
      </View>
    );
  };

  const sections = [
    {
      title: 'Total Amount',
      data: [{ key: 'total', value: total }],
      renderItem: () => (
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
      ),
    },
    {
      title: 'By Type',
      data: typeData,
      renderItem: ({ item }) => renderBar(item, maxType, item.key),
    },
    {
      title: 'By Category',
      data: categoryData,
      renderItem: ({ item }) => renderBar(item, maxCategory, item.key),
    },
  ];

  return (
    <SectionList
      style={styles.container}
      sections={sections}
      keyExtractor={(item) => item.key}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      renderItem={({ section, item }) =>
        section.renderItem ? section.renderItem({ item }) : null
      }
      ListHeaderComponent={<Text style={styles.header}>📊 Transaction Summary</Text>}
      stickySectionHeadersEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 20,
  },
  header: {
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
  totalContainer: {
    backgroundColor: '#00c897',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: '#00c897',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  totalLabel: {
    color: '#dff9fb',
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 12,
    marginTop: 12,
  },
  barContainer: {
    marginBottom: 12,
  },
  barLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#2d3436',
  },
  bar: {
    height: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default StatsReportScreen;
