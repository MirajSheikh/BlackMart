package com.example.ecom.Service;

import com.example.ecom.Model.User;
import com.example.ecom.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean addUser(User user) {
        if(user.getEmail() == null || user.getPassword() == null){
            return false;
        }
        return true;
    }

    public User validateUser(String email, String password) {
        User existingUser = userRepository.findByEmail(email);
        return existingUser.getPassword().equals(password)
                ? existingUser
                : null;
    }

}
