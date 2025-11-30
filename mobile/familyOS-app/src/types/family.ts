// Типы для членов семьи
export type FamilyMember = {
  id: string;
  name: string;
  role: "parent" | "child";
  color: string; // Цвет для календаря
  avatar?: string;
};

// Типы для событий календаря
export type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  members: string[]; // ID участников
  type: "appointment" | "reminder" | "family_event";
  description?: string;
};

// Тип для состояния семьи
export type FamilyState = {
  members: FamilyMember[];
  events: CalendarEvent[];
  currentMember: FamilyMember | null;
};
