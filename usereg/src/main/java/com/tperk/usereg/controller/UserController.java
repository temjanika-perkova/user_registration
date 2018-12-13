package com.tperk.usereg.controller;

import javax.validation.Valid;
import com.tperk.usereg.model.User;
import com.tperk.usereg.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * This is the Controller that represents the RESTful services through which we will communicate with the database instance
 */
@RestController
@RequestMapping("/")
@CrossOrigin("*")

public class UserController {

    /**
     * This is a logger to log the different actions the user will perform
     */
    private final Logger LOG = LoggerFactory.getLogger(getClass());

    /**
     * This is mongodb repository
     */
    @Autowired
    UserRepository userRepository;

    /**
     *
     * @return list of all the users that have registered into the site
     */
    @GetMapping(value = "/users")
    public List<User> getAllUsers(){
        LOG.info("Getting all users");
        Sort sortByDateCreated = new Sort(Sort.Direction.DESC,"name");
        return userRepository.findAll(sortByDateCreated);
    }

    /**
     * This method creates/inserts/Saves a user
     * @param user
     * @return the user that has been created
     */
    @PostMapping(value = "/users")
    public User createUser(@Valid @RequestBody User user){
        LOG.info("Registering the user --- "+user.getCreatedAt());
        return userRepository.save(user);
    }

    /**
     * This method gives a single user which was asked
     * @param id
     * @return one user found by their id
     */
    @GetMapping(value = "/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id")String id){
        LOG.info("Getting the user with id "+id+" --- "+new Date());
        return userRepository.findById(id).map(user -> ResponseEntity.ok().body(user)).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id")String id){
        return userRepository.findById(id)
                .map(todo -> {
                    userRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }



}
