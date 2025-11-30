import { useState } from "react";
import { CalendarEvent } from "../types/calendar";

// Демо-данные для тестирования
const demoEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "🛒 Покупки в магазине",
    date: "2026-01-15",
    startTime: "15:00",
    endTime: "16:30",
    type: "shopping",
    members: ["1", "2"],
    color: "#10b981",
  },
  {
    id: "2",
    title: "🎂 День рождения Маши",
    date: "2026-01-15",
    startTime: "18:00",
    endTime: "20:00",
    type: "family",
    members: ["1", "2", "3"],
    color: "#8b5cf6",
  },
  {
    id: "3",
    title: "💳 Оплата коммунальных услуг",
    date: "2026-01-20",
    type: "finance",
    members: ["1"],
    color: "#ef4444",
  },
  {
    id: "4",
    title: "Все кончено...",
    date: "2025-12-31",
    startTime: "00:00",
    endTime: "21:00",
    type: "personal",
    members: ["1", "2", "3"],
    color: "#ff9d00ff",
  },
];

export function useCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>(demoEvents);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  // Получаем события для выбранной даты
  const getEventsForDate = (date: string) => {
    return events.filter((event) => event.date === date);
  };

  // Получаем отмеченные даты для календаря
  const getMarkedDates = (): { [date: string]: any } => {
    const marked: { [date: string]: any } = {};

    events.forEach((event) => {
      marked[event.date] = {
        dots: [
          {
            color: event.color,
          },
        ],
        selected: event.date === selectedDate,
      };
    });

    // Отмечаем выбранную дату
    if (selectedDate && !marked[selectedDate]) {
      marked[selectedDate] = { selected: true, selectedColor: "#2563eb" };
    } else if (marked[selectedDate]) {
      marked[selectedDate].selected = true;
      marked[selectedDate].selectedColor = "#2563eb";
    }

    return marked;
  };

  // Добавляем новое событие
  const addEvent = (event: Omit<CalendarEvent, "id">) => {
    const newEvent: CalendarEvent = {
      ...event,
      id: Date.now().toString(),
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  return {
    events,
    selectedDate,
    setSelectedDate,
    getEventsForDate,
    getMarkedDates,
    addEvent,
  };
}
