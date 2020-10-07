import { render } from 'react-dom';
import landingWidget from './widgets/landing';

const entryNode = document.createElement('div');
document.body.appendChild(entryNode);

render(
  landingWidget,
  entryNode,
);
