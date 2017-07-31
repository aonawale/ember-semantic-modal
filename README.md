# ember-semantic-modal

Use semantic-ui modal in a more convinient and declarative way.

## Why?

The ui-modal semantic component is always present in the DOM even when it's not currently being displayed. It also requires me to write controller code to display the modal.

## Installation

  `ember install ember-semantic-modal`

## Usage

```
  {{#semantic-modal}}
    Modal contents goes here
  {{/semantic-modal}}
```

### Important Note about using this library with Ember 2.10

You need to have a stable root element wrapping the modal block. This is something that the Ember Core team will continue to iterate and work on, but for now the work around is fairly straightforward.

Change:

```hbs
{{#semantic-modal}}
  Modal contents goes here
{{/semantic-modal}}

To:

<div>
  {{#semantic-modal}}
    Modal contents goes here
  {{/semantic-modal}}
</div>
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
