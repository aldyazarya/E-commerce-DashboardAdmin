// import faker from 'faker';
import axios from 'axios'
import {API_URL} from '../../API_URL/API_URL'








export default async (limit = 2, arrayData = false) => {
  try {
    
    const res = await axios.get(`${API_URL}/getproduct`)
    console.log(res.data);
    
    const data = []
    // i = tidak boleh lewat dari id yang diinput
    for (var i = 0; i <= limit ; i++){
      var row = null
      if (arrayData) {
        row = [
          res.data[i].id,
          res.data[i].price,
          res.data[i].product_name,
          res.data[i].detail_product, 
          res.data[i].category_name,
          res.data[i].subcategory_name,
          res.data[i].image_product
        ]
      } else {
        row = {
          id: res.data[i].id,
          product_name: res.data[i].product_name,
          detail_product: res.data[i].detail_product,
          price: res.data[i].price,
          category_name: res.data[i].category_name,
          subcategory_name: res.data[i].subcategory_name,
          image_product: res.data[i].image_product
        }
      }
      data.push(row)
    }
    console.log(data);
    
    return data;
  } catch (e) {
    console.log(e);
    
  }

  
}
