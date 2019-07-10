const init = {
  id: '',
  username: '',
  error: '',
  email: '',
  avatar: '',
  product_name: '',
  detail_product: '',
  price: '',
  category_name:'',
  subcategory_name: '',
  image_product: ''
}

export default (state = init, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, id: action.payload.id, username: action.payload.username}
    case 'KEEP_LOGIN':
      return {...state, id: action.payload.id, username: action.payload.username}
    case 'LOGOUT':
      return state = init
    case 'ERROR_LOGIN':
      return {...state, error: action.payload.error}
    case 'PRODUCT':
      return {...state, product_name: action.payload.product_name,
      detail_product: action.payload.detail_product,
      price: action.payload.price,
      category_name: action.payload.category_name,
      subcategory_name: action.payload.subcategory_name,
      image_product: action.payload.image_product }


    default :
      return state
  }
}