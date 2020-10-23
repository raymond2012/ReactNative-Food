import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        keyExtractor={(result) => results.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
