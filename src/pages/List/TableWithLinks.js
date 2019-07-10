// import React, { Component } from 'react';
// import generateDataMember from '../generateDataMember';
// import axios from 'axios'
// import {API_URL} from '../../../API_URL/API_URL'
// import './TableWithLinks.css'
// import swal from 'sweetalert'


// class TableWithLinks extends Component {
//   // state = {
//   //   items: generateDataMember()
//   // };

//   state = {
//     listMember: []
//   }

//   deleteItem = async (itemId) => {
//     try {
//       const res =await axios.delete(`${API_URL}/deleteuser/${this.state.listMember[0].username}`)

//       if(res) {
//         swal({
//           title: "User Account Has Been Deleted!",
//           text: "-------",
//           icon: "success",
//           button: "OK"
//         }) 
//       }

//       this.setState({
//         listMember: this.state.listMember.filter(item => item.id !== itemId)
//       })



//     } catch (e) {
//       console.log(e);
      
//     }
//     // if(res){
//     // }.then (
//     //   this.setState({
//     //     listMember: this.state.listMember.filter(item => item.id !== itemId)
//     //   })

//     // )
    
    

//   }

  


//   // async componentDidMount() {
//   //   const data = await generateDataMember()
//   //   // console.log(data[0].username);
//   //   console.log(data);
//   //   this.setState({
//   //     listMember: data
//   //   })

//     // const data2 = await axios.get(`${API_URL}/users/${data[0].username}`)
//     // console.log(data2.data[0].email);

//     // this.state.listMember.push({email: data2.data[0].email})
//     // this.setState({
//     //   listMember: [{...this.state.listMember[0], email: data2.data[0].email}]
//     // })

//     // console.log(this.state.listMember);
    
//   }

//   render() {
//     // let { items, isShowingAlert } = this.state;
    
//     return (
//       <div className="card">
//         <div className="header">
//           <h4 className="title">Table with Links</h4>
//           <p className="category">Here is a subtitle for this table</p>
//         </div>
//         <div className="content table-responsive table-full-width">
//           <table className="table table-hover table-striped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Username</th>
//                 <th>Name</th>
//                 <th>Date of Birth</th>
//                 <th>Gender</th>
//                 <th>Phone Number</th>
//                 <th>Email</th>

//                 <th>Avatar</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.listMember.map((item, i) => {
//                 return (
//                   <tr key={i}>
//                     <td>{item.id}</td>
//                     <td>{item.username}</td>
//                     <td>{item.name}</td>
//                     <td>{item.dateofbirth}</td>
//                     <td>{item.gender}</td>
//                     <td>{item.phonenumber}</td>
//                     <td>{item.email}</td>
//                     <td>
//                       <div>
//                         <img src={`${API_URL}/avatar/${item.avatar}`} alt={item.username} style={{width:"70px", height:"70px", borderRadius:"5px"}} />
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <a rel="tooltip"
//                         className="btn btn-info btn-simple btn-xs btn-delete"
//                         data-original-title="View Profile"
//                         onClick={() => this.deleteItem(item.id)}>
//                         <i className="fa fa-remove"></i>
//                       </a>
//                     </td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )


//   }

// }

// export default TableWithLinks;