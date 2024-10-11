// import { create } from 'zustand';

// export const useStore = create((set) => ({
//   products: [],
//   addToCart: (product) => set((state) => {
//     const existingProduct = state.products.find((item) => item.id === product.id);
//     if (existingProduct) {
//       return {
//         products: state.products.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };
//     }
//     return { products: [...state.products, { ...product, quantity: 1 }] };
//   }),
//   removeFromCart: (productId) => set((state) => ({
//     products: state.products.filter((product) => product.id !== productId),
//   })),
//   clearCart: () => set({ products: [] }),
// }));


import { create } from 'zustand';

export const useStore = create((set, get) => ({
  products: [],
  
  // Adicionar produto ao carrinho
  addToCart: (product) => set((state) => {
    const existingProduct = state.products.find((item) => item.id === product.id);
    if (existingProduct) {
      return {
        products: state.products.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { products: [...state.products, { ...product, quantity: 1 }] };
  }),
  
  // Remover produto do carrinho
  removeFromCart: (productId) => set((state) => ({
    products: state.products.filter((product) => product.id !== productId),
  })),
  
  // Esvaziar carrinho
  clearCart: () => set({ products: [] }),

  // Quantidade total de produtos no carrinho
  totalItems: () => get().products.reduce((total, product) => total + product.quantity, 0),
  
  // Valor total dos produtos no carrinho
  totalPrice: () => get().products.reduce((total, product) => total + product.price * product.quantity, 0),
}));
