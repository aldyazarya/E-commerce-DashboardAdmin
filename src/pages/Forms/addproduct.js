import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {API_URL} from '../../API_URL/API_URL'
// import axios from 'axios'
// import {Field, reduxForm} from 'redux-form'
// import {Button, ButtonGroup} from 'reactstrap'
// import {Form, FormGroup, FormControl} from 'react-bootstrap'
// import '../../css/addProduct.css'
import blankImage from '../../assets/images/logo brand/blank_image.jpg'
import {onSubmitProduct} from '../../action/index'
import swal from 'sweetalert';
// import axios from '../../config/axios';
// import { add } from 'gl-matrix/src/gl-matrix/vec3';
import axios from 'axios'
import {API_URL} from '../../API_URL/API_URL'
import Cookies from 'universal-cookie'
import './addproduct.css'

const cookie = new Cookies()


class addProduct extends Component {
    //for category value
    constructor(props){
        super(props);
         this.state = {
            categoryValue: '',
            subcategoryValue: '' ,
            file: '',
            imagePreviewUrl: {blankImage},
            product_name: '',
            detail_product: '',
            price: '',
            category_name:'',
            subcategory_name: '',
            image_product: ''
          }
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    };


    // onCreateImageProduct = (e) => {
    //     const data = new FormData()
    //     data.append('image')
    // }

    
    onChange1(event){
        this.setState({
            categoryValue: event.target.value,
     })
    }
    
    onChange2(event){
        this.setState({
            subcategoryValue: event.target.value
        })
    }
    
    
    
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }
    
    _handleImageChange(e) {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
    }
    
    reader.readAsDataURL(file)
}

    onCreateImageProduct = (e) => {
        // window.location.reload()

        const data = new FormData()
        data.append('image_product', this.image.files[0])
        data.append('product_name', cookie.get('nameProduct'))
        console.log(this.image.files[0]);
        console.log(cookie.get('nameProduct'));
        // console.log(data);
        
        

        axios.post(`${API_URL}/uploadimageproduct`, data).then ((response) => {
            console.log(response);
            
        })
        
    }

    onCreateProduct = (e) => {
        const product_name = this.product_name.value
        const detail_product = this.detail_product.value
        const price = this.price.value
        const category_name = this.state.categoryValue
        const subcategory_name = this.state.subcategoryValue
        const image_product =this.image.files[0]
        this.props.onSubmitProduct(product_name, detail_product, price, category_name, subcategory_name, image_product)

        // this.onCreateImageProduct()

        // cookie.remove('idProduct')
        console.log(this.image.files[0]);

        // window.location.reload()
        


    }




    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl}/>);
        }        


        return(
            <div className="card">
                <div className="header">
                    <h4>ADD PRODUCT</h4>
                </div>
                <div className="content">
                    <form className="form-horizontal" >
                        <div className="form-group">
                            <label className="control-label col-md-3"> PRODUCT NAME</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" placeholder="Product Name" ref={input => this.product_name = input}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3"> DETAIL PRODUCT</label>
                            <div className="col-md-9">
                            <textarea rows="5" className="form-control" placeholder="Fill your product's descriptions" ref={input => this.detail_product = input} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3">PRICE</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" placeholder="Price" ref={input => this.price = input}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3">CATEGORY</label>
                            <div className=" select-style col-md-9">
                                <select value={this.state.categoryValue} onChange={this.onChange1}>
                                    <option value="analogcamera">Analog Camera</option>
                                    <option value="rollfilm_accessories">Roll Film & Accessories</option>
                                    <option value="digitalcamera">Digital Camera</option>
                                    <option value="lenses_accessories">Lenses & Accessories</option>
                                    <option value="videocamera">Video Camera</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3">SUBCATEGORY</label>
                            <div className=" select-style col-md-9">
                                <select value={this.state.subcategoryValue} onChange={this.onChange2}>
                                    <option disabled>ANALOG CAMERA</option>
                                    <option value="largeformat"> Large Format</option>
                                    <option value="singlelensreflects"> Single Lens Reflects (SLR)</option>
                                    <option value="rangefinder"> RangeFinder</option>
                                    <option value="pointandshoot"> Point and Shoot</option>
                                    <option disabled>Roll Film & Accessories</option>
                                    <option value="colorfilm">Color Film</option>
                                    <option value="bwfilm">BW Film</option>
                                    <option value="instantfilm_disposablecamera">Instan Film & Disposable Camera</option>
                                    <option value="chemical_accessories">Chemical & Accessories</option>
                                    <option disabled>Digital Camera</option>
                                    <option value="dslr">DSLR</option>
                                    <option value="mirrorless">Mirrorless</option>
                                    <option disabled>Lenses & Accessories</option>
                                    <option value="lenses">Lenses</option>
                                    <option value="tripod_monopod">Tripod & Monopod</option>
                                    <option value="filterlens">Filter Lens</option>
                                    <option value="batteries_charger">Batteries & Charger</option>
                                    <option value="camerabags_straps">Camera Bags & Straps</option>
                                    <option value="studiolighting_flashes">Studio Lighting & Flashes</option>
                                    <option value="otheraccesorieslenses_">Other Accessories</option>
                                    <option disabled>Video Camera</option>
                                    <option value="camcorder">Camcorder</option>
                                    <option value="drone_aerialimaging">Drones & Aerial Imaging</option>
                                    <option value="actioncamera">Action Camera & Accessories</option>
                                    <option value="otheraccessoriesvideocamera_">Other Accessories</option>
                                </select>
                                {/* {this.state.subcategoryValue} */}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3">IMAGE PRODUCT</label>
                            <div className=" test col-md-9">
                                <div className="d-flex">
                                    <div>
                                        <form onSubmit={this._handleSubmit}>
                                            <input type="file" onChange={this._handleImageChange} ref={input => this.image = input} />
                                            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
                                        </form>
                                    </div>
                                    <div className="showAvatar">
                                        {$imagePreview}
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </form>
                    <button className="btn btn-primary btn-fill btn-wd btn-addproduct" onClick={this.onCreateProduct}>ADD PRODUCT</button>
                </div>
            </div>

        )
    }
}

export default connect(null, {onSubmitProduct})(addProduct);