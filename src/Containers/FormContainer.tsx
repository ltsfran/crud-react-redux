// import React from 'react';
// import { SingleInput } from '../Components/SingleInput';
// import { connect } from 'react-redux';
// import { fetchAddUser } from '../Actions/users';

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         name: '',
//         username: '',
//         email: '',
//         website: ''
//       }
//     };
//   }

//   onChangeName = e => {
//     let item = { ...this.state.user };
//     item.name = e.target.value;
//     this.setState({ user: item });
//   };

//   onChangeUserName = e => {
//     let item = { ...this.state.user };
//     item.username = e.target.value;
//     this.setState({ user: item });
//   };

//   onChangeEmail = e => {
//     let item = { ...this.state.user };
//     item.email = e.target.value;
//     this.setState({ user: item });
//   };

//   onChangeWebSite = e => {
//     let item = { ...this.state.user };
//     item.website = e.target.value;
//     this.setState({ user: item });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const user = this.state.user;
//     this.props.addUser(user);
//   };

//   render() {
//     const { user } = this.state;
//     return (
//       <React.Fragment>
//         <form onSubmit={this.onSubmit}>
//           <SingleInput
//             title="Name:&emsp;&emsp;&emsp;"
//             onChange={this.onChangeName}
//             value={user.name}
//           />
//           <SingleInput
//             title="UserName:&emsp;"
//             onChange={this.onChangeUserName}
//             value={user.username}
//           />
//           <SingleInput
//             title="Email:&emsp;&emsp;&emsp;"
//             onChange={this.onChangeEmail}
//             value={user.email}
//           />
//           <SingleInput
//             title="WebSite:&emsp;&emsp;"
//             onChange={this.onChangeWebSite}
//             value={user.website}
//           />
//           <input type="submit" value="Enviar" />
//         </form>
//       </React.Fragment>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   addUser: data => dispatch(fetchAddUser(data))
// });

// export const FormContainer = connect(
//   null,
//   mapDispatchToProps
// )(Form);
