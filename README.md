# Webpack2 + HMR + ReactHotLoader3 + ReactRouter4 + Redux
An absolute bare minimum implementation of HMR + ReactHotLoader in Webpack2 in combination with ReactRouter4 and Redux

# Build/Run
```javascript
npm install
npm run dev
```
# Test
1. Navigate to http://localhost:8080
2. Enter a value into the input field
3. Update the source in `./components/Page1`
4. Witness the glory; the local state is also retained (input value)
5. Click the `page2` link
6. Click the `Increment` button
7. Open `ReduxDevTools` and view the history

# TODO
- Integrate `react-router-redux` when ReactRouter4 is compatible 
