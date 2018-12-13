package com.tperk.usereg.repository;

import com.tperk.usereg.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * This is the interface that extends from the MongoRepository which defines the CRUD methods we will manipulate to access to the database mongodb
 */
@Repository
public interface UserRepository extends MongoRepository<User,String> {
}
