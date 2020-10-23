import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultByPrice("$$")} title="Bit Pricer" />
        <ResultsList
          results={filterResultByPrice("$$$")}
          title="Big Spender!"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
