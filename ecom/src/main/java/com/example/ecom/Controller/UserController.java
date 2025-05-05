package com.example.ecom.Controller;

import com.example.ecom.Model.User;
import com.example.ecom.Repository.UserRepository;
import com.example.ecom.Service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    private final UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }


    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addUser(@RequestBody User user){
        userRepository.save(user);
        boolean isUserAdded = userService.addUser(user);
        return isUserAdded ?
                new ResponseEntity<>("User Successfully Added", HttpStatus.CREATED) :
                new ResponseEntity<>("Cannot Add User", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> validateLogin(@RequestBody User user){
        User currentUser = userService.validateUser(user.getEmail(), user.getPassword());
        return currentUser != null ?
                new ResponseEntity<>(currentUser, HttpStatus.OK) :
                new ResponseEntity<>("Unable to Login!", HttpStatus.UNAUTHORIZED);
    }
}
