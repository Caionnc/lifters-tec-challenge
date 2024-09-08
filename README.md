<div align="center">
  <a href="https://lifters.tech/">
    <img src="/lifters-shop/src/assets/lifters_tech_logo.jpeg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lifters Tecnologia Frontend Challenge</h3>
</div>

# Lifters Shop - SPA Challenge

## Overview

**Lifters Shop** is a Single-Page Application (SPA) developed as part of a challenge from Lifters Tecnologia. It simulates an e-commerce platform with the following features:

- **Product Filtering**: Filter products by color and size.
- **Shopping Cart**: Add products to your cart.
- **Checkout**: Complete your purchase.

**Note:** This project is intended solely for the challenge and does not aim to address any real-world issues.

## Architecture

The project utilizes the **Vertical Slice** architecture, which organizes code into distinct sections for better modularity and maintainability.

## Technologies

This project incorporates several technologies:

- **React JS** & **TypeScript**: Core technologies for building the application.
- **React Router DOM**: Manages routing.
- **Formik**: Handles form management.
- **Yup**: Provides form validation.
- **NoticeStack**: Manages toast notifications.
- **Bootstrap v5.3**: Handles styling and responsive design.
- **Query String**: Manages URL query parameters.
- **useContext**: Manages state.

## Video

- **System Test**: [[Link to video](https://youtu.be/_6vDaMbCKAs)]

## Future Enhancements

Potential improvements for the project include:

- **Persistency**: Use `localStorage` to retain user data across sessions.
- **Context Refactoring**: Separate `useContext` into distinct contexts for better organization.
- **Query Parameters**: Enhance URL query parameters for bidirectional filtering.
- **Pagination**: Add pagination to handle large product lists.
- **Windowing**: Implement virtual scrolling for better performance with large datasets.
- **Simulated API Calls**: Abstract API interactions, including error handling and loading states.

Feel free to contribute or suggest additional improvements!

## Getting Started

To get started with this project:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>

2. **Access the project folder**:
   ```bash
   cd lifters-shop

3. **Install Dependencies**:
    ```bash
    npm install
    
    **Note:** Ensure you have npm version 18 or higher installed.

4. **Run the Development Server**:
    ```bash
    npm run dev
