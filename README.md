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

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
