import db, { subject, Collections } from 'helpers/db';
import { Subject } from 'rxjs';


export const subjectPay = new Subject();
export const subjectPayObservable = subjectPay.asObservable()

export const getProductsFromIndexDB = () => {
  return db.table(Collections.CAR_SHOP)
  .toArray()
}

export const removeProductFromIndexDB = (id) => {
  db.table(Collections.CAR_SHOP).where('id').equalsIgnoreCase(id)
  .delete().then(() => {
    subject.next(true)
  })
}

export const addProductInIndexDb = (product) => {
  console.log(product, Collections)
  console.log(db.table(Collections.CAR_SHOP).where('id').equalsIgnoreCase(product.id));
  db.table(Collections.CAR_SHOP).where('id').equalsIgnoreCase(product.id).toArray().then(res => {
    const selectedProduct = res[0];
    if(!res.length) {
      db.table(Collections.CAR_SHOP)
      .add({...product, count: 1})
      .then(() => {
        subject.next(true)
      });
    } else {
      db.table(Collections.CAR_SHOP)
      .update(product.id, {...product, count: selectedProduct.count + 1})
      .then(() => {
        subject.next(true)
      });
    }
  }).catch((error) => {
    console.log(error);
  });
}

export const updateProductInIndexDb = (product) => {
  db.table(Collections.CAR_SHOP).where('id').equalsIgnoreCase(product.id).toArray().then(res => { 
    const selectedProduct = res[0];
    if (selectedProduct) {
      db.table(Collections.CAR_SHOP)
      .update(product.id, {...product})
      .then(() => {
        subject.next(true)
      });
    }
  })
}