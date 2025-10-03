import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Post({ id, titulo, imagem, resumo, comentarios }) {
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{titulo}</Text>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text>{resumo}</Text>
      <Text style={styles.commentTitle}>Comentários:</Text>
      {comentarios.map((c, i) => (
        <Text key={i} style={styles.comment}>- {c}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 150,
    marginVertical: 10
  },
  commentTitle: {
    fontWeight: "bold",
    marginTop: 10
  },
  comment: {
    fontSize: 14,
    color: "#555"
  }
});
