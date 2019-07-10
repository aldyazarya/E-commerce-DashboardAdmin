import React, {Component} from 'react';
import generateData from './generateData';
import { API_URL } from '../../API_URL/API_URL';
import './css/listProduct.css'

class paymentconfirmation extends Component {
  
  state = {
    listProduct: []
  }
  
  
  async componentDidMount(){
    const data = await generateData()
    console.log(data);
    this.setState({
      listProduct: data
    })
    
  }
  

  
  render() {
    console.log(this.state.listProduct);
    
    
    return (
          <div className="card">
            <div className="header text-center">
              <h4 className="title">Product List</h4>
              <br />
            </div>
            <div className="content table-responsive table-full-width">
              <table className="table table-bigboy">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th className="th-description">Detail Product</th>
                    <th className="">Price</th>
                    <th className="">Category</th>
                    <th className="">Subcategory</th>
                    <th className="">Image Product</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listProduct.map((item, i) => {
                    return (
                    <tr key={i}>
                      <td>
                        {item.id}
                      </td>
                      <td className="td-name">
                        {item.product_name}
                      </td>
                      <td>
                        {item.detail_product}
                      </td>
                      <td>
                        {item.price}
                      </td>
                      <td>
                        {item.category_name}
                      </td>
                      <td>
                        {item.subcategory_name}
                      </td>
                      <td>
                        <div className="img-container">
                          <img src={`${API_URL}/imageproduct/${item.image_product}`} alt={item.product_name}  style={{width:"100px", height:"100px", borderRadius:"5px"}} />
                        </div>
                      </td>
                      <td className="td-actions">
                        <div className="d-flex">
                            <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-success btn-simple btn-icon btn-edit" data-original-title="Edit Post">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-danger btn-simple btn-icon btn-remove " data-original-title="Remove Post">
                              <i className="fa fa-times"></i>
                            </button>
                        </div>
                      </td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
    )
  }
}


 


export default paymentconfirmation;



