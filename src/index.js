import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-hf52yp7w185185ig.us.auth0.com domain
//VRj0AnuxVr7lnECxKlDhTbXJbPvHWwFi client id

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Auth0Provider
      domain="dev-37hqdhe6lsx1ntff.us.auth0.com"
      clientId="L5U6RcJoaet4lMLMMEqu5eEZtvLBexWs"
      redirectUrl={window.location.origin}
      cacheLocation='localstorage'
      >
            <UserProvider>
                  <ProductsProvider>
                        <FilterProvider>
                              <CartProvider>
                                          <App />
                              </CartProvider>
                        </FilterProvider>
                  </ProductsProvider>
            </UserProvider>
      </Auth0Provider>

)