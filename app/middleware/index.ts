import createSagaMiddleWare from 'redux-saga';
import root from 'kw-redux/state/core/root-saga';

const sagaMiddleware = createSagaMiddleWare();

const setup = () => {
    sagaMiddleware.run(root);
};

export default {
    middleware: [sagaMiddleware],
    setup: setup
};
