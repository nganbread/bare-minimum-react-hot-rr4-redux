# Webpack2 + HMR + ReactHotLoader3 + ReactRouter4 + Redux
A bare minimum implementation of HMR + ReactHotLoader in Webpack2 in combination with ReactRouter4 and Redux

# Build/Run
```javascript
npm install
npm run dev
```
# Test
1. Navigate to http://localhost:8080
2. Click the `page1` link
3. Enter a value into the input field
4. Update the source in `./components/Page1`
5. Witness the glory; the local state is also retained (input value)
6. Click the `page2` link
7. Click the `Increment` button
8. Open `ReduxDevTools` and view the history

# TODO
- Integrate `react-router-redux` when ReactRouter4 is compatible 
