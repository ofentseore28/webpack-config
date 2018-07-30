import _ from 'lodash';
import './style.css';
import Icon from './Lighthouse.jpg';

function compounent(){
    var element = document.createElement('div');

    //Lodash, currently imported by this script
    element.innerHTML=_.join(['Hello','webpack'],' ');
    element.classList.add('hello');

    //Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src= Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(compounent());