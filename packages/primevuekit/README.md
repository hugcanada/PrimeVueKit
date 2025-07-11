# PrimeVueKit

A collection of specialized Vue components extending PrimeVue's functionality for enterprise applications.

## Installation

```bash
npm install primevuekit
```

## Usage

### Import individual components

```javascript
import { InputDateMask } from 'primevuekit';
```

### Import component with styles

```javascript
import { InputDateMask } from 'primevuekit';
import 'primevuekit/inputdatemask/style';
```

### Use with plugin

```javascript
import { createApp } from 'vue';
import PrimeVueKit from 'primevuekit';

const app = createApp(App);
app.use(PrimeVueKit);
```

## Components

### InputDateMask

A specialized date input component with mask functionality.

```vue
<template>
    <InputDateMask v-model="date" date-format="dd/mm/yyyy" place-holder="DD/MM/YYYY" />
</template>
```

## License

MIT
