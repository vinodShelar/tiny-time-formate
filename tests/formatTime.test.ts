import { describe, it, expect } from "vitest";
import { formatTime, isValidDate, parseDate, TimeFormatterError } from "../src";

describe("formatTime", () => {
  describe("Basic Date Formatting", () => {
    const testDate = new Date("2024-03-15T12:30:45");

    it("should format date in dd-mm-yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dd-mm-yyyy" })).toBe(
        "15-03-2024"
      );
    });

    it("should format date in mm-dd-yyyy format", () => {
      expect(formatTime({ date: testDate, format: "mm-dd-yyyy" })).toBe(
        "03-15-2024"
      );
    });

    it("should format date in yyyy-mm-dd format", () => {
      expect(formatTime({ date: testDate, format: "yyyy-mm-dd" })).toBe(
        "2024-03-15"
      );
    });

    it("should format date in dd Month yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dd Month yyyy" })).toBe(
        "15 March 2024"
      );
    });

    it("should format date in dd Mon yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dd Mon yyyy" })).toBe(
        "15 Mar 2024"
      );
    });

    it("should format date in dd Month, yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dd Month, yyyy" })).toBe(
        "15 March, 2024"
      );
    });

    it("should format date in dd Mon, yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dd Mon, yyyy" })).toBe(
        "15 Mar, 2024"
      );
    });
  });

  describe("Time Formatting", () => {
    const testDate = new Date("2024-03-15T14:30:45");

    it("should format time in HH:mm dd/mm/yyyy format", () => {
      expect(formatTime({ date: testDate, format: "HH:mm dd/mm/yyyy" })).toBe(
        "14:30 15/03/2024"
      );
    });

    it("should format time in HH:mm dd-mm-yyyy format", () => {
      expect(formatTime({ date: testDate, format: "HH:mm dd-mm-yyyy" })).toBe(
        "14:30 15-03-2024"
      );
    });

    it("should format time in HH:mm , dd MMM yyyy format", () => {
      expect(
        formatTime({ date: testDate, format: "HH:mm , dd MMM yyyy" })
      ).toBe("14:30 , 15 Mar 2024");
    });

    it("should format time in HH:mm , dd MMM, yyyy format", () => {
      expect(
        formatTime({ date: testDate, format: "HH:mm , dd MMM, yyyy" })
      ).toBe("14:30 , 15 Mar, 2024");
    });

    it("should format time in dd MMM yyyy, HH:mm format", () => {
      expect(formatTime({ date: testDate, format: "dd MMM yyyy, HH:mm" })).toBe(
        "15 Mar 2024, 14:30"
      );
    });

    it("should format time in HH:mm format", () => {
      expect(formatTime({ date: testDate, format: "HH:mm" })).toBe("14:30");
    });

    it("should format time in hh:mm A format (12-hour format)", () => {
      expect(formatTime({ date: testDate, format: "hh:mm A" })).toBe(
        "02:30 PM"
      );
    });

    it("should format time in HH:mm:ss format", () => {
      expect(formatTime({ date: testDate, format: "HH:mm:ss" })).toBe(
        "14:30:45"
      );
    });
  });

  describe("Special Formats", () => {
    const testDate = new Date("2024-03-15T14:30:45");

    it("should format date in dddd, dd MMM yyyy format", () => {
      expect(formatTime({ date: testDate, format: "dddd, dd MMM yyyy" })).toBe(
        "Friday, 15 Mar 2024"
      );
    });
  });

  describe("Input Types", () => {
    it("should handle Date object input", () => {
      const date = new Date("2024-03-15");
      expect(formatTime({ date, format: "dd-mm-yyyy" })).toBe("15-03-2024");
    });

    it("should handle string input", () => {
      const date = "2024-03-15";
      expect(formatTime({ date, format: "dd-mm-yyyy" })).toBe("15-03-2024");
    });

    it("should handle timestamp input", () => {
      const date = new Date("2024-03-15").getTime();
      expect(formatTime({ date, format: "dd-mm-yyyy" })).toBe("15-03-2024");
    });
  });

  describe("Error Handling", () => {
    it("should throw TimeFormatterError for invalid date", () => {
      expect(() =>
        formatTime({ date: "invalid-date", format: "dd-mm-yyyy" })
      ).toThrow(TimeFormatterError);
    });

    it("should throw TimeFormatterError for invalid format", () => {
      expect(() =>
        formatTime({ date: new Date(), format: "invalid-format" as any })
      ).toThrow(TimeFormatterError);
    });
  });
});

describe("Utility Functions", () => {
  describe("isValidDate", () => {
    it("should return true for valid Date object", () => {
      expect(isValidDate(new Date())).toBe(true);
    });

    it("should return true for valid date string", () => {
      expect(isValidDate("2024-03-15")).toBe(true);
    });

    it("should return true for valid timestamp", () => {
      expect(isValidDate(1717152000000)).toBe(true);
    });

    it("should return false for invalid date", () => {
      expect(isValidDate("invalid-date")).toBe(false);
    });

    it("should return false for null", () => {
      expect(isValidDate(null)).toBe(false);
    });
  });

  describe("parseDate", () => {
    it("should parse valid date string", () => {
      const result = parseDate("2024-03-15", "yyyy-mm-dd");
      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // March is month 2 (0-indexed)
      expect(result.getDate()).toBe(15);
    });

    it("should throw TimeFormatterError for invalid date", () => {
      expect(() => parseDate("invalid-date", "yyyy-mm-dd")).toThrow(
        TimeFormatterError
      );
    });
  });
});
