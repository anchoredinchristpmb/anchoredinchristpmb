import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import { db } from './config';

// Products collection operations
export const productsCollection = collection(db, 'products');

export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsCollection, {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(
      query(productsCollection, orderBy('createdAt', 'desc'))
    );
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Orders collection operations
export const ordersCollection = collection(db, 'orders');

export const addOrder = async (orderData) => {
  try {
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: new Date(),
      status: 'pending'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding order:', error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const querySnapshot = await getDocs(
      query(ordersCollection, orderBy('createdAt', 'desc'))
    );
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    return orders;
  } catch (error) {
    console.error('Error getting orders:', error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};
