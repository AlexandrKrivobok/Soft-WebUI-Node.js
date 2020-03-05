import {testChess} from './test_task1.js';
import {testRectangles} from './test_task2.js';
import {testTriangles} from './test_task3.js';
import { testPolindrome } from './test_task4.js';
import { testLuckyTicket } from './test_task5.js';
import { testNumbers } from './test_task6.js';
import { testFib } from './test_task7.js';

// Настройка настройки моки
mocha.setup('bdd');

// Лень писать chai.assert, буду писать ass
const ass = chai.assert;

// Где-то здесь сами тесты...
// Тестирование функции sum
testChess(ass);
testRectangles(ass);
testTriangles(ass);
testPolindrome(ass);
testLuckyTicket(ass);
testNumbers(ass);
testFib(ass);





// Запуск тестов
mocha.run();