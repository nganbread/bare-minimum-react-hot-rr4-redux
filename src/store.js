import { createStore } from 'redux';

export default createStore((state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
