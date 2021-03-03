import Dexie from 'dexie';
import { Subject } from 'rxjs';


export const Collections = {
  SETTINGS: 'settings',
  CAR_SHOP: 'car_shop'
}

const db = new Dexie('clusthersdb');
db.version(1).stores({ [Collections.CAR_SHOP]: '$$id' });
db.open();

export default db;


export const subject = new Subject(true);

