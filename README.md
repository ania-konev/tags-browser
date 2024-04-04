# Tags Browser

A UI for the tag browser provided by the StackOverflow API in React.

## Quickstart

To clean install the application please use:

```
npm ci
```

Then you can start the `next.js` server with:

```
npm start
```

## Development

To run storybook of this application for development of component in isolation please use:

```
npm run storybook
```

## Internals Insight

The application works in the following way:

- Tags are downloaded dynamically in a lazy manner and are store in a redux `data` state slice.

- When user clicks to sort the table the state is cleared and the new data (new tags) are downoladed according to the chosen direction and sorting column.
- Input on the top can used to change number of elements displaying on one table page.
- When user clicks to view another page of the table, the tags are fetched only if they are not available in the application state.
- Storybook `homePage` story is using a mocked version of axios to avoid making requests to external API and allow development of the components based on local jsons corresponding to data returned by API on examplary calls.
