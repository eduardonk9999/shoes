import React, { Component } from 'react'
import { MdShoppingCart } from "react-icons/md";
import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {
  render() {
    return (
      <ProductList>
        <li>
          <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1610983830&ims=326x" alt="Tênis" />
          <strong>Tênis muito legal</strong>
          <span>R$129,00</span>

          <button typoe="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
              </div>

            <span>ADCIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList >
    );
  }
}
