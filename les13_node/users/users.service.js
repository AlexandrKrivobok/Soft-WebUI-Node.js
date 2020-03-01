class UsersService {

  createUser(userData) {
    return {
      id: 20,
      ...userData,
    }
  }
}
 
module.exports = new UsersService();