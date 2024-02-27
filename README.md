# MC Storybook project

Steps to test: `npm run storybook` will start the storybook instance. 
Alternatively, `npm start` will start the React app which loads the password component.

### Starts the local storybook instance

`npm run storybook`

### Starts the React App

`npm start`

### Builds the storybook for prod deployment

`npm run build-storybook`

### Test

`npm run test`

## Future Improvements

### Validation Injection
Validation function/promise injection from consumer, hook for each client to add their own validation. This could help if client wanted to perform a Database lookup for previously used passwords. A config like this would allow more flexibility.

### Debounce 
Add config to kick off the validation after a set amount of seconds or characters - eg don't show a validation message until 4 characters have been typed.
Open question - Should the validation be shown instantly or on first type? The assumption now is to show it after user has started typing.

### Input size 
Add a size (extra small, small, medium, large, extra large) config prop to allow different size options.

### Dark mode
Add a prop for handling dark mode or other variants of the input.

### Typescript 
Add Typescript support to the application to catch any type errors and improve code quality.

### Storybook file structure
Combine the story and base file and remove the /stories folder for a simpler file structure. All of the components elements within the same folder.

### Storybook documentation
Add documentation around the different states of the storybook component.

### File stucture
Move validation.js and validation.test.js into password-input folder as it is unqiue to that component.

