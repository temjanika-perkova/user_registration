package com.tperk.usereg.model;

import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import static java.util.Calendar.DATE;
import static java.util.Calendar.MONTH;
import static java.util.Calendar.YEAR;
/**
 *
* This is the business object class User
* It refers to a mongodb collection users because we're using NoSQL database mongodb
*
* */

@Document(collection = "users")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class User {
    /**
     * This is the unique id of the user
     */
    @Id
    private ObjectId _id;

    /**
     * This is the email of the user that has to be treated as primary key (when talking about relational databases)
     */
    @NotBlank
    private String email;

    /**
     * This is the password of the user
     */
    @NotBlank
    private String password;

    /**
     * This is the name of the user
     */
    @NotBlank
    private String name;

    /**
     * This is the surname of the user
     */
    @NotBlank
    private String surname;

    /**
     * This is the birth date of the used
     */
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateOfBirth;

    /**
     * This is the age of the user (>18)
     */
    private int age;

    /**
     * This is the country (only France accepted) of the user
     */
    private String country;

    /**
     * This is the creation date
     */
    private Date createdAt = new Date();

    //Constructors

    /**
     * This is the default constructor
     */
    public User(){}

    /**
     * This is the custom constructor
     *
     * @param _id
     * @param email
     * @param password
     * @param name
     * @param surname
     * @param dateOfBirth
     * @param country
     * @param age
     */
    public User(ObjectId _id,String email, String password, String name, String surname, Date dateOfBirth, String country, int age){
        this._id = _id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.age = age;

    }

    // Getters and Setters


    /**
     *
     * @return String value of the ObjectId
     */
    public String getId() {
        return _id.toHexString();
    }

    /**
     *
     * @return email of the user
     */
    public String getEmail() {
        return email;
    }

    /**
     *
     * @return password of the user
     */
    public String getPassword() {
        return password;
    }

    /**
     *
     * @return name of the user
     */
    public String getName() {
        return name;
    }

    /**
     *
     * @return surname of the user
     */
    public String getSurname() {
        return surname;
    }

    /**
     *
     * @return birth date of the user
     */
    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    /**
     *
     * @return Age of the user
     */
    public long getAge() {
        return age;
    }

    /**
     *
     * @return country of the user
     */
    public String getCountry() {
        return country;
    }

    /**
     *
     * @return the date of creation of the account
     */
    public Date getCreatedAt() {
        return createdAt;
    }

    /**
     *
     * @param id
     */
    public void setId(ObjectId id) {
        this._id = id;
    }

    /**
     *
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     *
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     *
     * @param surname
     */
    public void setSurname(String surname) {
        this.surname = surname;
    }

    /**
     *
     * @param dateOfBirth
     */
    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    /**
     *
     * @param age
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     *
     * @param country
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     *
     * @param createdAt
     */
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    /**
     *
     * @return
     */
    @Override
    public String toString() {
        return
                "User{" +
                "email='" + email + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", age=" + age +
                ", country='" + country + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
