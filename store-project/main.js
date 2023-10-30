import './styles/style.css';
import productInfo from './src/productInfo';
import listProductDisplays from './src/listProducts';

document.querySelector('#app').append(listProductDisplays(productInfo));
