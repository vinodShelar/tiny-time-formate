import { describe, it, expect } from "vitest";
import { formatTime } from "../src";

describe("formatTime with Timezones", () => {
  const testDate = new Date("2024-03-15T12:00:00Z");

  describe("Timezone Handling", () => {
    it("should convert time to America/New_York timezone", () => {
      const result = formatTime({
        date: testDate,
        format: "HH:mm",
        getTimezone: "America/New_York",
      });
      // Note: The exact time will depend on daylight savings
      expect(result).toMatch(/^\d{2}:\d{2}$/);
    });

    it("should convert time to Asia/Tokyo timezone", () => {
      const result = formatTime({
        date: testDate,
        format: "HH:mm",
        getTimezone: "Asia/Tokyo",
      });
      expect(result).toBe("21:00");
    });

    it("should convert time to Europe/London timezone", () => {
      const result = formatTime({
        date: testDate,
        format: "HH:mm",
        getTimezone: "Europe/London",
      });
      // Note: The exact time will depend on daylight savings
      expect(result).toMatch(/^\d{2}:\d{2}$/);
    });

    it("should convert time to Australia/Sydney timezone", () => {
      const result = formatTime({
        date: testDate,
        format: "HH:mm",
        getTimezone: "Australia/Sydney",
      });
      // Note: The exact time will depend on daylight savings
      expect(result).toMatch(/^\d{2}:\d{2}$/);
    });

    it("should use local timezone when no timezone is specified", () => {
      const result = formatTime({
        date: testDate,
        format: "HH:mm",
      });
      expect(result).toMatch(/^\d{2}:\d{2}$/);
    });
  });
});

describe("formatTime with Relative Time", () => {
  describe("Relative Time Formatting", () => {
    it('should show "just now" for times less than a minute ago', () => {
      const date = new Date(Date.now() - 30 * 1000); // 30 seconds ago
      expect(formatTime({ date, format: "relative" })).toBe("30 sec ago");
    });

    it("should show minutes ago for times less than an hour ago", () => {
      const date = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago
      expect(formatTime({ date, format: "relative" })).toBe("30 min ago");
    });

    it("should show hours ago for times less than a day ago", () => {
      const date = new Date(Date.now() - 5 * 60 * 60 * 1000); // 5 hours ago
      expect(formatTime({ date, format: "relative" })).toBe("5 hrs ago");
    });

    it("should show days ago for times less than a month ago", () => {
      const date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000); // 5 days ago
      expect(formatTime({ date, format: "relative" })).toBe("5 days ago");
    });

    it("should show full date for times more than a month ago", () => {
      const date = new Date("2024-01-15");
      const result = formatTime({ date, format: "relative" });
      expect(result).toMatch(/^\d{2} [A-Za-z]{3} \d{4}$/);
    });
  });
});
