import { render } from 'react-dom';
import { RootForRender } from './components/Root';

const entryNode = document.createElement('div');
document.body.appendChild(entryNode);

render(
  RootForRender,
  entryNode,
);
