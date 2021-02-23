import HomeSection from './home-section';
import ProductSection from './product-section';

import { BrowserRouter, Switch, Route } from 'react-dom';


export default function Home() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeSection />
          </Route>
          <Route path="/users">
            <ProductSection />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
