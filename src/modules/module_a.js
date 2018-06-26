let scss = require('../scss/module_a.scss');
import { reverseAnyInput } from 'reverse';
import { getItems, addItem, removeItem } from 'manipulating_arrays';
import quotes from 'quotes';

let theArray = [{'id':1},{'id':2},{'id':3}];
module.exports = function moduleA(){
    console.log('module_a is loaded');

    console.log(reverseAnyInput('The quick brown fox'));
    console.log(reverseAnyInput([1, 2, 3]));
    console.log(reverseAnyInput(234));
    console.log(reverseAnyInput());

    getItems(theArray);
    addItem({'id':4}, theArray);
    removeItem({'id':3}, theArray);
    removeItem({'id':4}, theArray);
    removeItem({'id':5}, theArray);

    console.log(quotes.FROMMYHEART.onThinking);
    console.log(quotes.FROMMYHEART.onLoving);
    console.log(quotes.FROMMYHEART.onTrying);
    console.log(quotes.FROMMYHEART.onManifesting);
    console.log(quotes.FROMMYHEART.onLiving);

    console.log('hello james');
};
