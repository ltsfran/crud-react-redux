// import React from 'react';
// import { fetchListUser, removeUser } from '../Actions/users';

// import { connect } from 'react-redux';

// class ListUser extends React.Component {
//   listUser = () => {
//     this.props.listUser();
//   };

//   removeUser = id => {
//     this.props.removeUser(id);
//   };

//   render() {
//     const { data, error, isLoading } = this.props;
//     return (
//       <React.Fragment>
//         <button onClick={this.listUser}>Listar</button>
//         {error ? <p>{error.message}</p> : null}
//         {!isLoading ? (
//           data.map((data, index) => {
//             return (
//               <div key={index}>
//                 <div>
//                   <h1>{data.name}</h1>
//                   <button>Editar</button>
//                   <button
//                     onClick={e => {
//                       this.removeUser(data.id);
//                     }}
//                   >
//                     Borrar
//                   </button>
//                 </div>
//                 <p>
//                   <strong>Name : &nbsp;</strong> {data.name}
//                 </p>
//                 <p>
//                   <strong>Username : &nbsp;</strong> {data.username}
//                 </p>
//                 <p>
//                   <strong>Email : &nbsp;</strong> {data.email}
//                 </p>
//                 <p>
//                   <strong>Website : &nbsp;</strong> {data.website}
//                 </p>
//                 <hr />
//               </div>
//             );
//           })
//         ) : (
//           <h3>Cargando ...</h3>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   listUser: data => dispatch(fetchListUser(data)),
//   removeUser: id => dispatch(removeUser(id))
// });

// const mapStateToProps = state => {
//   let { isLoading, data, error } = state;
//   return { isLoading, data, error };
// };

// export const ListUserContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListUser);
