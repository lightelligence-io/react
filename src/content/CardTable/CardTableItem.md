## Description

A `CardTableItem` component, represents an item inside of **every** card of the parent `CardTable` component. In other words this component defines an item that every card has to render. When only provided with a `field` property it renders the corresponding field of the current row as it's content. To customize the rendered content use `render` and `renderProps` for fine-grained control.

Be aware that additional `props` like `align` or `verticalAlign` are forwarded to the underlying `BasicCardTableItem` component.

Take a look at [the examples of CardTable](#/Components/CardTable) to see usage of this component in context.