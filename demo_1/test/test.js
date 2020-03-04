import {testChess} from './test_task1.js';
import {testRectangles} from './test_task2.js';
import {testTriangles} from './test_task3.js';

// Настройка настройки моки
mocha.setup('bdd');

// Лень писать chai.assert, буду писать ass
const ass = chai.assert;

// Где-то здесь сами тесты...
// Тестирование функции sum
testChess(ass);
testRectangles(ass);
testTriangles(ass);





// Запуск тестов
mocha.run();