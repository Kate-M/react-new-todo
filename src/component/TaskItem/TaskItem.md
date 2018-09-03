React component example:

```js
const onSetAction = (action, id, name, event) => { switchAction(action, id, name, event); };

<TaskItem
    key="1535984565021Task"
    todo={{id: "1535984565021Task", name: "Task", status: "2"}}
    status="2"
    onInitAction={onSetAction}
/>

```

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:
