package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:85")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/login")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}") // New mapping to get user by ID
    Optional<User> getUserById(@PathVariable int id) {
        return userRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    User updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setEmail(updatedUser.getEmail());
            return userRepository.save(user);
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    @PatchMapping("/patch/{id}")
    User patchUser(@PathVariable int id, @RequestBody User patchedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (patchedUser.getEmail() != null) {
                user.setEmail(patchedUser.getEmail());
            }
            if (patchedUser.getEmail() != null) {
                user.setEmail(patchedUser.getEmail());
            }
            return userRepository.save(user);
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "User with id " + id + " deleted successfully.";
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }
}
