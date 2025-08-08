# Tiny Time Formatter

A lightweight TypeScript utility for flexible date formatting with support for relative time, absolute time, and timezone conversions.

## Features

- **Multiple Date Formats**: Supports various formats including:

  - 'dd-mm-yyyy'
  - 'mm-dd-yyyy'
  - 'yyyy-mm-dd'
  - 'dd Month yyyy'
  - 'dd Mon yyyy'
  - 'dd Month, yyyy'
  - 'dd Mon, yyyy'
  - 'HH:mm dd/mm/yyyy'
  - 'HH:mm dd-mm-yyyy'
  - 'HH:mm , dd MMM yyyy'
  - 'HH:mm , dd MMM, yyyy'
  - 'dd MMM yyyy, HH:mm'
  - 'HH:mm'
  - 'hh:mm A'
  - 'HH:mm:ss'
  - 'dddd, dd MMM yyyy'
  - 'relative'
  - 'future'

- **Relative Time**: Human-readable time differences (e.g., "5 minutes ago", "3 hours ago")
- **Timezone Support**: Convert and format dates across different timezones
- **Localization**: Built-in English localization for month/weekday names (other languages extendable)
- **Lightweight**: Zero dependencies, TypeScript-native
- **Tree-shakable**: Only import what you need

> 🆕 **New in v1.0.3**  
> The `'future'` format returns time remaining until a future date:
>
> - `opens in 45 secs`
> - `opens in 3 mins`
> - `opens in 2 hrs`
> - `opens in 5 days`
> - `opens in 3 weeks`
> - `opens in 2 months`
> - `opens in 1 year`

> 🆕 **New in v1.0.4**
> | Format String | Output Example |Description  
> | `yyyy/MM/dd` | `2025/05/31` | Year/Month/Day |
> | `dd/MM/yyyy` | `31/05/2025` | Day/Month/Year |
> | `MM/dd/yyyy` | `05/31/2025` | Month/Day/Year |
> | `hh:mm A, dd MMM yyyy` | `12:00 PM, 31 May 2025` | 12-hour time with short month and date |
> | `dddd, MMMM dd, yyyy` | `Friday, May 31, 2025` | Full day, full month, date, year |
> | `ddd, MMM D, YYYY h:mm A` | `Fri, May 31, 2025 12:00 PM` | Short day, short month, time |
> | `MMMM D, YYYY h:mm A` | `May 31, 2025 12:00 PM` | Full month with date and time |
> | `MMMM D, YYYY` | `May 31, 2025` | Full month and date |
> | `MMM D, YYYY` | `May 31, 2025` | Short month and date |
> | `D MMMM YYYY` | `31 May 2025` | Date before full month |
> | `D MMM YYYY` | `31 May 2025` | Date before short month |
> | `YYYY-MM-DDTHH:mm:ssZ` | `2025-05-31T12:00:00Z` | ISO format with Zulu timezone |
> | `hh:mm:ss A` | `12:00:00 PM` | 12-hour time with seconds |
> | `HH:mm:ss.SSS` | `12:00:00.00` | 24-hour time with milliseconds |
> | `h:mm A` | `12:00 PM` | Short 12-hour time |
> | `hh:mm A, dddd` | `12:00 PM, Friday` | Time with full weekday |
> | `dddd` | `Friday` | Full weekday name |
> | `ddd` | `Fri` | Short weekday name |

## Installation

Using npm:

```bash
npm install tiny-time-formate
```

Using yarn:

```bash
yarn add tiny-time-formate
```

Using pnpm:

```bash
pnpm add tiny-time-formate
```

## Usage

### Basic Usage

```ts
import { formatTime } from "tiny-time-formate";

const formattedDate = formatTime({
  date: new Date(),
  format: "dd-mm-yyyy",
  timezone: "Asia/Dubai",
});

console.log(formattedDate); // Outputs: '13-05-2025'
```

### Relative Time

```ts
import { formatTime } from "tiny-time-formate";

// Past time
const pastDate = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago
console.log(formatTime({ date: pastDate, format: "relative" }));
// Outputs: "2 hrs ago"

// Future time
const futureDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
console.log(formatTime({ date: futureDate, format: "future" }));
// Outputs: "opens in 3 days"
```

### Timezone Conversion

```ts
import { formatTime } from "tiny-time-formate";

const date = new Date("2025-05-31T12:00:00Z");

// Convert to different timezone
const dubaiTime = formatTime({
  date,
  format: "HH:mm dd/mm/yyyy",
  timezone: "Asia/Dubai",
});
console.log(dubaiTime); // Outputs: "16:00 31/05/2025" (UTC+4)

const tokyoTime = formatTime({
  date,
  format: "HH:mm dd/mm/yyyy",
  timezone: "Asia/Tokyo",
});
console.log(tokyoTime); // Outputs: "21:00 31/05/2025" (UTC+9)
```

### Multiple Input Types

```ts
import { formatTime } from "tiny-time-formate";

// Date object
formatTime({ date: new Date(), format: "dd-mm-yyyy" });

// ISO string
formatTime({ date: "2025-05-31T12:00:00Z", format: "dd-mm-yyyy" });

// Timestamp
formatTime({ date: 1717152000000, format: "dd-mm-yyyy" });
```

## API Reference

### `formatTime(options)`

Formats a date according to the specified format and timezone.

#### Parameters

- `options.date` (Date | string | number): The date to format
- `options.format` (string, optional): The format to use (default: 'dd-mm-yyyy')
- `options.timezone` (string, optional): The timezone to convert to

#### Returns

- `string`: The formatted date string

#### Supported Formats

See the format table above for all supported formats.

#### Supported Timezones

All IANA timezone identifiers are supported, including:

- `America/New_York`
- `Europe/London`
- `Asia/Tokyo`
- `Australia/Sydney`
- And many more...

## Development

To run the tests:

```bash
npm run test
```

To run tests with coverage:

```bash
npm run test:coverage
```

To build the project:

```bash
npm run build
```

## License

MIT
