import {testMulti} from './test_multi.js'
import {testSum} from './test_sum.js';

// Настройка настройки моки
mocha.setup('bdd');

// Лень писать chai.assert, буду писать ass
const ass = chai.assert;

// Где-то здесь сами тесты...
// Тестирование функции sum
testSum(ass);
testMulti(ass);





// Запуск тестов
mocha.run();