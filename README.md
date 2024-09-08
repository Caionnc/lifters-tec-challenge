## Lifters Tecnologia Challenge

<div align="center">
  <a href="https://github.com/Caionnc/heeds_tech_challenge">
    <img src="src/assets/images/retifica.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center"> Lifters Tecnologia Frontend Challenge </h3>

 ### Lifters Tecnologia Challenge

This challenge from Lifters Tecnologia involved creating a Single-Page Application (SPA) for an e-commerce site called **Lifters Shop**. The application features:

- **Product Filtering:** Users can filter products by color and size.
- **Shopping Cart:** Users can add products to their cart.
- **Checkout Process:** Users can proceed to complete their purchase.

**Note:** This project was created solely for the purposes of the challenge and was not intended to address any real-world problems.

## About The Project

### Architecture

The project is organized using the **Vertical Slice** architecture. This approach is simple and efficient, helping to keep the code modularized and maintainable. It ensures that related components and functionality are grouped together, promoting better organization and reusability.

### Technologies and Libraries Used

This project utilizes several libraries and technologies to ensure quality and efficiency:

- **React JS** and **TypeScript**: The core technologies for building the project.
- **React Router DOM**: Used for handling routing within the application.
- **Formik**: Utilized for managing forms.
- **Yup**: Employed for form validation.
- **NoticeStack**: Implemented for toast notifications.
- **Bootstrap v5.3**: Applied for styling and responsive design.
- **Query String**: Used for managing query strings in URLs.
- **useContext**: Used for state management within the application.

### Video

- **System test**: .

### Future Improvements

Here are some potential improvements that could enhance the project:

- **Persistency with localStorage**: Implement localStorage to persist user data and preferences across sessions.
- **Refactor useContexts**: Separate the useContexts for different domains to improve code organization and reduce coupling.
- **Query Parameters for Filtering**: Enhance URL query parameter handling to support bidirectional filtering and state management.
- **Pagination**: Add pagination to the product list to improve performance and user experience with large datasets.
- **Windowing**: Implement windowing (e.g., virtual scrolling) to efficiently render large lists and improve performance.
- **Simulated API Calls**: Abstract request models to handle API interactions, including error handling, loading states, and success responses.


</div>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
