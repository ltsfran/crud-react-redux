import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../../Actions/users';

interface UserProps {
  user: any,
  isFetching: boolean,
  error: boolean,
  fetchUsers: Function
}


export default class User extends React.Component<UserProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { user, isFetching, error } = this.props;
    return (
      <div>
        {
          (isFetching) ? <div>Cargando...</div> : 
          (error) ? <div>Ocurrió un error</div> :
              user && user.map((data, index) => {
            return <li key={index}>{data.name}</li>;
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: ()=> dispatch(fetchUsers())
});

const mapStateToProps = ({ users }) => ({
  user: users.user,
  isFetching: users.isFetching,
  error: users.error
});

export const UserContainer = connect( mapStateToProps, mapDispatchToProps )(User);
