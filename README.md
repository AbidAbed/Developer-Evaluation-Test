# TODO List Web App

Welcome to TODO List Web App! This is a Web app designed to help you
in managing your tasks built using React.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demo

You can check out a live demo of TODO List web app at [https://developer-evaluation-test.vercel.app/].

## Features

- Reusable components
- Nice looking
- Responsive
- Well-structured
- Fast
- Easy to use

## Getting Started

The web app contains 3 main components ,

1. ### TODOItems

This component is responsible for rendring the ToDos list

2. ### Category

This component is responsible for rendring the Categories list

3. ### TODOPage

This component is responsible for directing and managing the Categories and TODOItems components

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- NPM v 10.2.1

### Installation

1. First, clone this repository to your local machine:

```bash
git clone https://github.com/AbidAbed/Developer-Evaluation-Test
```

2. run the following command inorder to start the web app:

```bash
npm install
npm start

```

### Usage

1. ### Category Component

```bash
        searchMode          - To avoid adding categories while searching
        categories          - Array of strings , name of the categories ex: ["cat-1","cat-2",...]
        onCategoryClick     - Changes the selected category
        selectedCategory    - String represents the currently selected category
        emptyMessage        - The message the will show up when the category is empty ("can't ever happen")
```

2. ### TODOItems Component

```bash
        searchMode          - To avoid adding categories while searching
        items               - Array of strings , content of the ToDos items ex: ["cat-1","cat-2",...]
        selectedCategory    - String represents the currently selected category
        emptyMessage        - The message the will show up when the category is empty
      >
```

3. ### TODOPage

Does not have any props

4. ### Store

- StoreInterface

Represents the interface of the store , you can import the following from it :

```bash
 StoreInterface,       - Store object
 addTODOItem,          - Reducer takes an object as an aurgement , {category,TODOContent} **NOTE** NAMES MUST MATCH
 addItemsFromStorage,  - Reducer takes an object as an intial value , {category1:["TODO 1","TODO 2",...], category2:["TODO 1","TODO 2",...],....} **NOTE** NAMES MUST MATCH
 addCategory,          - Reducer takes a string contains the name of the new added category
 removeCategory,       - Reducer takes a string contains the name of the new added category
 changeCategoryName,   - Reducer takes an object as an aurgement , {ogName,newName} **NOTE** NAMES MUST MATCH
```

5. ### Hooks

- useHandleAddCategory

Adds a new category to the list of categories and stores it in the local storage

- useHandleDeleteCategory

Deletes specified category from the list of categories and stores the result in the local storage

- useHandleEditCategoryName

Changes the name of the specified category

- useHandleOnCategoryNameChange

Called whenever the user enters a letter inside the category name

- useHandleAddTODOItem

Adds a new TODO item to the list to a specific category

- useHandleCopyClick

Copies the content of a specific TODO

### License

All License reserved for Abid Abed
