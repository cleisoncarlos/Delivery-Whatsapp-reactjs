import React, {useState} from 'react'
import {ShoppingCart, Trash, Empty, WhatsappLogo} from '@phosphor-icons/react'

import {useStore} from '../store/store'

export default function Header() {
    const { products, removeFromCart, clearCart, totalItems, totalPrice } = useStore();

    const [observation, setObservation] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


      // Função para gerar o link do WhatsApp
//   const sendToWhatsApp = () => {

//     if (!address || !paymentMethod) {
//         alert("Por favor, preencha o endereço e a forma de pagamento.");
//         return;
//       }


//     const phoneNumber = "91981989210"; // Troque pelo seu número de telefone com código do país, exemplo: 5511999999999
//     const message = products.map(product => {
//       return `- ${product.name} (x${product.quantity}) - R$${product.price * product.quantity}`;
//     }).join("\n");

//     const total = `\nTotal de itens: ${totalItems()}\nValor total: R$ ${totalPrice()}`;    
//     const whatsappMessage = encodeURIComponent(`*Pedidos*:\n${message}${total}`);
//     const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

//     window.open(whatsappURL, '_blank');
//   };


  // Função para gerar o link do WhatsApp
  const sendToWhatsApp = () => {
    if (!address || !paymentMethod) {
        setErrorMessage("Por favor, preencha o endereço e a forma de pagamento.");
        return;
      }
      setErrorMessage(''); // Limpa a mensagem de erro se tudo estiver preenchido
    
    const phoneNumber = "91981989210"; // Troque pelo seu número de telefone com código do país
    const message = products.map(product => {
      return `${product.name} (x${product.quantity}) - R$${product.price * product.quantity}`;
    }).join("\n");

    const total = `\nTotal de itens: ${totalItems()}\nValor total: R$ ${totalPrice()}`;
    
    const additionalInfo = `\n\nEndereço: ${address}\nForma de pagamento: ${paymentMethod}\nObservação: ${observation || 'Nenhuma'}`;

    const whatsappMessage = encodeURIComponent(`Pedido:\n${message}${total}${additionalInfo}`);

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };


  return (
<>
<header>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand">Navbar</span>
    <div className="d-flex" role="search">   

    <button class="btn btn-primary position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <ShoppingCart size={24} weight='bold' />


    {  totalItems() <= 0 ? '' : <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalItems()}</span> }
    

    </button>

    </div>
  </div>
</nav> 
    </header>


{/* offcanvas */}

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrinho de compras</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">


<div className='card'>
    <div className='card-body'>
    {products.length === 0 ? (
        <>
        <Empty size={64} weight="bold" />
        <p>Seu carrinho está vazio.</p>
        </>
      ) : (
          
          <table className="table table-striped">

<thead>
    <tr>
      <th scope="col">Qtd.</th>
      <th scope="col">Produto</th>
      <th scope="col">Valor</th>
      <th scope="col">Remover</th>
    </tr>
  </thead>

  <tbody>


          {products.map((product) => (

<tr key={product.id}>
                <th scope="row">{product.quantity}</th>
                <td>{product.name}</td>
                <td>R$ {product.price * product.quantity}</td>              
             <td className='col-auto'>
             <button className='btn btn-danger btn-sm' onClick={() => removeFromCart(product.id)}>
              <Trash size={20} weight="bold" />
              </button>
             </td>
            </tr>


          ))}

         
</tbody>
        </table>



      )}
<p>Total de Produtos: {totalItems()}  | Valor: R$: {totalPrice()}</p>
<button className='btn btn-secondary btn-sm' onClick={clearCart}>Esvaziar Carrinho</button>
    </div>
</div>


  {/* Inputs para adicionar observações, endereço e forma de pagamento */}
  <div className='card my-4'>
     <div className='card-body'>
     <h3>Informações Adicionais</h3>
            <div>
              <label className="form-label">Endereço: </label>
              <input 
              className='form-control form-control-sm'
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                placeholder="Digite seu endereço" 
              />
            </div>
            <div>
              <label className="form-label">Forma de pagamento: </label>
              <input 
              className='form-control form-control-sm'
                type="text" 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
                placeholder="Ex: Dinheiro, Cartão, pix ..." 
              />
            </div>
            <div>
              <label className="form-label">Observação: </label>
              <textarea 
              className='form-control form-control-sm'
                value={observation} 
                onChange={(e) => setObservation(e.target.value)} 
                placeholder="Ex: Hamburguer sem cebola ...(opcional)"
              />
            </div>
     </div>
          </div>


          {/* exibe a mensagem de erro */}
{errorMessage && 
<div class="alert alert-danger mt-1 small" role="alert">
{errorMessage}
</div>
}





<button className='btn btn-success' onClick={sendToWhatsApp}><WhatsappLogo size={26} weight="regular" /> Enviar para Whatsapp</button>




  </div>
</div>
</>
  )
}
  