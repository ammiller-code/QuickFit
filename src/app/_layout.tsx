import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const boards = [
  { id: "1", title: "Casual", count: 12, emoji: "👕" },
  { id: "2", title: "Work", count: 8, emoji: "👔" },
  { id: "3", title: "Formal", count: 5, emoji: "🕴️" },
  { id: "4", title: "Summer", count: 10, emoji: "☀️" },
  { id: "5", title: "Winter", count: 7, emoji: "🧥" },
  { id: "6", title: "Favorites", count: 6, emoji: "⭐" },
];

export default function OutfitOrganizationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Outfits</Text>
          <Text style={styles.subtitle}>Organize your looks</Text>
        </View>

        <Pressable style={styles.searchButton}>
          <Text style={styles.searchText}>⌕</Text>
        </Pressable>
      </View>

      <FlatList
        data={boards}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Pressable style={styles.board}>
            <View style={styles.preview}>
              <Text style={styles.emoji}>{item.emoji}</Text>
            </View>

            <View style={styles.boardInfo}>
              <Text style={styles.boardTitle}>{item.title}</Text>
              <Text style={styles.count}>{item.count} outfits</Text>
            </View>
          </Pressable>
        )}
      />

      <View style={styles.bottomNav}>
        <NavItem label="Home" icon="⌂" />
        <NavItem label="Outfits" icon="▦" active />
        <NavItem label="Add" icon="＋" />
        <NavItem label="Profile" icon="○" />
      </View>
    </SafeAreaView>
  );
}

function NavItem({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <Pressable style={styles.navItem}>
      <Text style={[styles.navIcon, active && styles.activeText]}>{icon}</Text>
      <Text style={[styles.navLabel, active && styles.activeText]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#242321",
  },
  subtitle: {
    marginTop: 3,
    fontSize: 14,
    color: "#77736D",
  },
  searchButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ECEAE5",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    fontSize: 27,
    color: "#383632",
    marginTop: -5,
  },
  grid: {
    padding: 16,
    paddingTop: 6,
    paddingBottom: 90,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  board: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E7E4DE",
  },
  preview: {
    height: 145,
    backgroundColor: "#EDE9E2",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 62,
  },
  boardInfo: {
    padding: 12,
  },
  boardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#292825",
  },
  count: {
    marginTop: 3,
    fontSize: 13,
    color: "#858078",
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7E4DE",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    minWidth: 65,
  },
  navIcon: {
    fontSize: 22,
    color: "#77736D",
    height: 25,
  },
  navLabel: {
    fontSize: 11,
    color: "#77736D",
    marginTop: 2,
  },
  activeText: {
    color: "#242321",
    fontWeight: "700",
  },
});