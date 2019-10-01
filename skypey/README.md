# :pushpin: Skypey

Basically a simple chat application.

## Key points I learnt with this app:

### Methodological points:
- Before jumping to code take the time to break down your application into components and build your way up.
- Spend some time thinking about the state object of your app.
- The point is organize your work and invest time in the thinking process. Approches are many: bottom-up, top-down, etc. Choose/make the one that suits you.

### Designing the State object:
- The parts of the state object that are core to the application (Which you'll probably be performing more CRUD actions on)
are better placed in "front" (aka not nested).
- Sometimes it's better to use objects over arrays. (watch this [video](https://www.youtube.com/watch?v=aJxcVidE0I0&feature=youtu.be) ) 
- "Normalizing the State Object" : is the process of removing nested entities from the state object and designing the object with respect to the following guidelines:

    :white_small_square: Each type of data should have its own key in the state object.

    :white_small_square: Each key should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.

    :white_small_square: Any references to individual items should be done by storing the item’s ID.

    :white_small_square: Ideally, keep an array of IDs to indicate ordering.
 
 
### Redux-related points:
- With Redux you don't have to pass down props from parent component to child component. If a certain component needs access to a value from the state object, you can simply reach out to the store and retrieve the current state.
- A good way to organize your work is to have the major Redux actors in their own directories: store / Reducers / Actions

    :white_small_square: A reducer is just a function that takes in state and action, and returns a new state.
    
    :white_small_square: The state of your whole application is stored in an object tree within a single Redux store.
    
    :white_small_square: An action is accurately described with a plain JavaScript object. Nothing more. It must have a type field. This field describes the intent of the action.

- It's good to know about "Reducer composition" which means that a single reducer handles the state update for a single field in the state object.

### Side notes:
- While developing apps, you want to be sure to build progressively. In other words, build in bits, and make sure that the app works.
- [Lodash](https://lodash.com/) : a very usefull JavaScript utility library.
