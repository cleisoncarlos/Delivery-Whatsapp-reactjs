import CardHeader from "./components/CardHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";

import {ShoppingCartSimple, Hamburger, Pizza, BeerStein, BeerBottle, IceCream} from '@phosphor-icons/react'

import { useStore } from './store/store';

const productsList = [
  { id: 1, name: 'Hamburger', price: 10 },
  { id: 2, name: 'Cheeseburger', price: 12 },
  { id: 3, name: 'Fries', price: 5 },
  { id: 4, name: 'Soda', price: 3 },
  { id: 5, name: 'Hot Dog', price: 3 },
  { id: 6, name: 'Guaraná', price: 3 },
];

function App() {
  const {  addToCart } = useStore();


  return (
<>
<Header/>
<main>
<div className="container pt-5">
<CardHeader/>




<div className="col-lg-8">
<div class="btn-group my-3 w-100" role="group" aria-label="First group">
    <button type="button" class="btn btn-dark">
<Hamburger size={32} weight="bold" /> 
    </button>
    <button type="button" class="btn btn-dark">
<Pizza size={32} weight="fill" /> 
    </button>
    <button type="button" class="btn btn-dark">
<BeerStein size={32} weight="fill" /> 
    </button>
    <button type="button" class="btn btn-dark">
<BeerBottle size={32} weight="fill" /> 
    </button>
    <button type="button" class="btn btn-dark">
<IceCream size={32} weight="fill" /> 
    </button>
  </div>

</div>  


<div className="row mt-2">

{productsList.map((product) => (
    
<div className="col-lg-6 col-md-6 col-sm-6 mb-3"  key={product.id}>
    <div className="card bg-dark shadow-sm border-0 rounded-0">
      <div className="card-body">
<div className="row">
<div className='col-lg-3 col-md-4'>
<img src='https://picsum.photos/800/600' className="img-fluid" alt='...'/>
    </div>

    <div className="col">
   <h5 className="text-white"> {product.name}</h5>
    <p className="text-white small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis molestie lectus. Praesent ut malesuada lectus.</p>
 
 <div className="d-flex justify-content-between">
 <h4 className="text-white">R$ {product.price}</h4>
    <button className="btn btn-secondary btn-sm" onClick={() => addToCart(product)}><ShoppingCartSimple size={18}  weight="bold" /> Adicionar</button>

  </div>
    </div>
</div>

      </div>
    </div>
  </div>

        ))}

        




</div>








</div>
</main>







<Footer/>



</>
  );
}

export default App;
