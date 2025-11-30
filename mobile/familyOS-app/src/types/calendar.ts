export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // Формат: '2024-01-15'
  startTime?: string; // Формат: '14:30'
  endTime?: string; // Формат: '16:00'
  description?: string;
  type: "family" | "personal" | "shopping" | "finance";
  members: string[]; // ID участников
  color: string;
};

export type MarkedDate = {
  selected?: boolean;
  marked?: boolean;
  selectedColor?: string;
  dotColor?: string;
};

export type MarkedDates = {
  [date: string]: MarkedDate;
};
