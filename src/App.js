import CardHeader from "./components/CardHeader";
import Header from "./components/Header";

import {ShoppingCartSimple} from '@phosphor-icons/react'

import { useStore } from './store/store';
import Sidebar from "./components/Sidebar";

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

<div class="d-flex">

  <Sidebar/>
     

  
     <div class="w-100">
    

<Header/>
<main>
<div className="container-fluid mt-3">
<CardHeader/>

<div className="row">

{productsList.map((product) => (
    
<div className="col-lg-6 col-md-6 col-sm-6 mb-3"  key={product.id}>
    <div className="card shadow-sm border-0 rounded-0">
      <div className="card-body">
<div className="row">
<div className='col-lg-4 col-md-4'>
<img src='https://picsum.photos/800/600' className="img-fluid" alt='...'/>
    </div>

    <div className="col">
   <h5 className="text-danger"> {product.name}</h5>
    <p className="text-secondary small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis molestie lectus. Praesent ut malesuada lectus.</p>
 
 <div className="d-flex justify-content-between">
 <h4 className="text-secondary">R$ {product.price}</h4>
    <button className="btn btn-warning btn-sm" onClick={() => addToCart(product)}><ShoppingCartSimple size={18}  weight="bold" /> Adicionar</button>

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


     </div>
 </div>











</>
  );
}

export default App;
