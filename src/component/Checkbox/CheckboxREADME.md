# Checkbox

Normal application Checkbox.

```js
import Checkbox from './Checkbox';
```

<!-- STORY -->

### Flags usage rules

Some info about component
```js

<Checkbox action="status-complete" onActionSubmit={this.setComplete} status={status} />

```
**Complete** - when `STATUS.COMPLETE` pass `2`

```js
<Checkbox action="status-complete" onActionSubmit={this.setComplete} status="0" />

```

**Default** - when `STATUS.DEFAULT` pass `0`

```js
<Checkbox action="status-complete" onActionSubmit={this.setComplete} status="1" />

```
