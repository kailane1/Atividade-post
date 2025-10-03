import React, { useRef, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import Post from "./Post";

export default function Timeline() {
  const [posts, setPosts] = useState(
    Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      titulo: `Post ${i + 1}`,
      imagem: `https://picsum.photos/seed/${i}/400/200`,
      resumo: `Resumo do post número ${i + 1}`,
      comentarios: []
    }))
  );

  const hasTriggered = useRef(false);

  const adicionarComentarioAleatorio = () => {
    const alvo = Math.floor(Math.random() * 249) + 1; // escolhe entre 1 e 249
    const comentario = `Comentário automático no post ${alvo}`;

    setPosts(prev =>
      prev.map(p =>
        p.id === alvo ? { ...p, comentarios: [...p.comentarios, comentario] } : p
      )
    );

    Alert.alert("Notificação", `🔔 O Post ${alvo} recebeu um novo comentário!`);
  };

  const handleViewableItemsChanged = ({ viewableItems }) => {
    const post250 = viewableItems.find(item => item.item.id === 250);
    if (post250 && !hasTriggered.current) {
      hasTriggered.current = true; // só dispara 1x
      adicionarComentarioAleatorio();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            titulo={item.titulo}
            imagem={item.imagem}
            resumo={item.resumo}
            comentarios={item.comentarios}
          />
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
    </View>
  );
}
