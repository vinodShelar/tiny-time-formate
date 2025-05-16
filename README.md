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
