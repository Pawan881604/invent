import User from "../models/userModel";

class UserRepository {
  async createUser(userData: any) {
    const user = new User(userData);
 
    return await user.save();
  }

  async findUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async findUserById(id: string) {
    return await User.findById(id);
  }

  async getAllUsers() {
    return await User.find().select("-password"); // Exclude password
  }

  async updateUser(id: string, updateData: any) {
    return await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");
  }

  async deleteUser(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserRepository;
