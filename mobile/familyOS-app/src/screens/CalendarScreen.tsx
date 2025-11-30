import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import { Button } from "../components/Button";
import { useCalendar } from "../hooks/useCalendar";

export function CalendarScreen() {
  const {
    events,
    selectedDate,
    setSelectedDate,
    getEventsForDate,
    getMarkedDates,
  } = useCalendar();

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📅 Календарь</Text>
        <Text style={styles.subtitle}>Семейные события</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Календарь */}
        <View style={styles.calendarContainer}>
          <Calendar
            current={selectedDate}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={getMarkedDates()}
            markingType={"multi-dot"}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#64748b",
              selectedDayBackgroundColor: "#2563eb",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#2563eb",
              dayTextColor: "#1e293b",
              textDisabledColor: "#d1d5db",
              dotColor: "#2563eb",
              selectedDotColor: "#ffffff",
              arrowColor: "#2563eb",
              monthTextColor: "#1e293b",
              indicatorColor: "#2563eb",
              textDayFontWeight: "400",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "500",
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 14,
            }}
          />
        </View>

        {/* События на выбранную дату */}
        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>События на {selectedDate}</Text>

          {selectedDateEvents.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>На этот день событий нет</Text>
              <Text style={styles.emptySubtext}>
                Добавьте первое событие кнопкой ниже
              </Text>
            </View>
          ) : (
            <View style={styles.eventsList}>
              {selectedDateEvents.map((event) => (
                <View
                  key={event.id}
                  style={[styles.eventItem, { borderLeftColor: event.color }]}
                >
                  <View style={styles.eventContent}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    {event.startTime && (
                      <Text style={styles.eventTime}>
                        🕒 {event.startTime}
                        {event.endTime && ` - ${event.endTime}`}
                      </Text>
                    )}
                    {event.description && (
                      <Text style={styles.eventDescription}>
                        {event.description}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Кнопки действий */}
        <View style={styles.actions}>
          <Button
            title="➕ Добавить событие"
            onPress={() => alert("Здесь будет форма добавления события")}
            variant="primary"
          />
          <Button
            title="👨‍👩‍👧‍👦 Настройки семьи"
            onPress={() => alert("Здесь будут настройки семьи")}
            variant="secondary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#f0f9ff",
    borderBottomWidth: 1,
    borderBottomColor: "#bae6fd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0369a1",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#0ea5e9",
    textAlign: "center",
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 16,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventsSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#1e293b",
  },
  emptyState: {
    alignItems: "center",
    padding: 32,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
  },
  emptyText: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
  eventsList: {
    gap: 12,
  },
  eventItem: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 14,
    color: "#64748b",
    fontStyle: "italic",
  },
  actions: {
    padding: 16,
    gap: 12,
  },
});
