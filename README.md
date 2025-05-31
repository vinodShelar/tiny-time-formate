# Time Formatter Utility

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

> 🆕 **New in v1.0.3**  
> The `'future'` format returns time remaining until a future date:
> - `opens in 45 secs`
> - `opens in 3 mins`
> - `opens in 2 hrs`
> - `opens in 5 days`
> - `opens in 3 weeks`
> - `opens in 2 months`
> - `opens in 1 year`

> 🆕 **New in v1.0.4** 
| Format String             | Output Example               |Description                          
| `yyyy/MM/dd`              | `2025/05/31`                 | Year/Month/Day                         |
| `dd/MM/yyyy`              | `31/05/2025`                 | Day/Month/Year                         |
| `MM/dd/yyyy`              | `05/31/2025`                 | Month/Day/Year                         |
| `hh:mm A, dd MMM yyyy`    | `12:00 PM, 31 May 2025`      | 12-hour time with short month and date |
| `dddd, MMMM dd, yyyy`     | `Friday, May 31, 2025`       | Full day, full month, date, year       |
| `ddd, MMM D, YYYY h:mm A` | `Fri, May 31, 2025 12:00 PM` | Short day, short month, time           |
| `MMMM D, YYYY h:mm A`     | `May 31, 2025 12:00 PM`      | Full month with date and time          |
| `MMMM D, YYYY`            | `May 31, 2025`               | Full month and date                    |
| `MMM D, YYYY`             | `May 31, 2025`               | Short month and date                   |
| `D MMMM YYYY`             | `31 May 2025`                | Date before full month                 |
| `D MMM YYYY`              | `31 May 2025`                | Date before short month                |
| `YYYY-MM-DDTHH:mm:ssZ`    | `2025-05-31T12:00:00Z`       | ISO format with Zulu timezone          |
| `hh:mm:ss A`              | `12:00:00 PM`                | 12-hour time with seconds              |
| `HH:mm:ss.SSS`            | `12:00:00.00`                | 24-hour time with milliseconds         |
| `h:mm A`                  | `12:00 PM`                   | Short 12-hour time                     |
| `hh:mm A, dddd`           | `12:00 PM, Friday`           | Time with full weekday                 |
| `dddd`                    | `Friday`                     | Full weekday name                      |
| `ddd`                     | `Fri`                        | Short weekday name                     |


## Installation

Using npm:

```bash
npm install tiny-time-formatter
```

Using yarn:

```bash
yarn add tiny-time-formatter
```

To Run the tests:

```bash
npm run test
```

## Usage

```ts
import { formatTime } from "tiny-time-formatter";

const formattedDate = formatTime({
  date: new Date(),
  format: "dd-mm-yyyy",
  getTimezone: "Asia/Dubai",
});

console.log(formattedDate); // Outputs: '13-05-2025'
```
