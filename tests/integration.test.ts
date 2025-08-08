import { describe, it, expect } from "vitest";
import { formatTime } from "../src";

describe("Integration Tests", () => {
  describe("Format Switching", () => {
    const testDate = new Date("2024-03-15T14:30:45");

    it("should maintain consistent date across different formats", () => {
      const formats = [
        "dd-mm-yyyy",
        "mm-dd-yyyy",
        "yyyy-mm-dd",
        "dd Month yyyy",
        "dd Mon yyyy",
      ];

      const results = formats.map((format) =>
        formatTime({ date: testDate, format })
      );

      // All formats should represent the same date
      expect(results[0]).toBe("15-03-2024");
      expect(results[1]).toBe("03-15-2024");
      expect(results[2]).toBe("2024-03-15");
      expect(results[3]).toBe("15 March 2024");
      expect(results[4]).toBe("15 Mar 2024");
    });
  });

  describe("Timezone Conversion Accuracy", () => {
    const testDate = new Date("2024-03-15T12:00:00Z");

    it("should maintain consistent time across different timezone formats", () => {
      const timezones = [
        "America/New_York",
        "Asia/Tokyo",
        "Europe/London",
        "Australia/Sydney",
      ] as const;

      const results = timezones.map((timezone) =>
        formatTime({
          date: testDate,
          format: "HH:mm",
          timezone: timezone,
        })
      );

      // All results should be valid time formats
      results.forEach((result) => {
        expect(result).toMatch(/^\d{2}:\d{2}$/);
      });
    });
  });

  describe("Edge Cases", () => {
    it("should handle midnight correctly", () => {
      const midnight = new Date("2024-03-15T00:00:00");
      expect(formatTime({ date: midnight, format: "HH:mm" })).toBe("00:00");
      expect(formatTime({ date: midnight, format: "hh:mm A" })).toBe(
        "12:00 AM"
      );
    });

    it("should handle year boundaries correctly", () => {
      const newYear = new Date("2024-12-31T23:59:59");
      expect(formatTime({ date: newYear, format: "dd-mm-yyyy" })).toBe(
        "31-12-2024"
      );
    });

    it("should handle leap year correctly", () => {
      const leapYear = new Date("2024-02-29T12:00:00");
      expect(formatTime({ date: leapYear, format: "dd-mm-yyyy" })).toBe(
        "29-02-2024"
      );
    });

    it("should handle daylight savings transitions", () => {
      // Test a date during DST transition
      const dstDate = new Date("2024-03-10T02:00:00");
      expect(
        formatTime({
          date: dstDate,
          format: "HH:mm",
          timezone: "America/New_York",
        })
      ).toMatch(/^\d{2}:\d{2}$/);
    });
  });

  describe("Error Handling", () => {
    it("should handle invalid date input", () => {
      expect(() =>
        formatTime({
          date: "invalid-date",
          format: "dd-mm-yyyy",
        })
      ).toThrow();
    });

    it("should handle invalid timezone", () => {
      expect(() =>
        formatTime({
          date: new Date(),
          format: "HH:mm",
          // @ts-expect-error Testing invalid timezone
          timezone: "Invalid/Timezone",
        })
      ).toThrow();
    });

    it("should handle invalid format", () => {
      const date = new Date();
      expect(() =>
        formatTime({
          date,
          format: "invalid-format",
        })
      ).toThrow();
    });
  });
});
