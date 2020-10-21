import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        keyExtractor={(result) => results.id}
        horizontal
        data={results}
        renderItem={({ item }) => {
          return <Text>{item.name} || </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
