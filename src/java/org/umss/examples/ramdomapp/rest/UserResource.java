/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.umss.examples.ramdomapp.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.umss.examples.ramdomapp.model.User;

/**
 *
 * @author Maria Garcia
 */
@Stateless
@Path("users")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
    
    @PersistenceContext
    private EntityManager manager;

    private static List<User> users = new ArrayList<>();

    public UserResource() {
        if(users.isEmpty()){
            loadUsers();
        }
    }

    private void loadUsers(){
        for (int index = 0; index < 10; index++) {
            User current = new User();
            current.setId(index);
            current.setName(String.format("user%d", index));
            current.setLastName(String.format("last%d", index));
            users.add(current);
            System.out.println(String.format("user%d...created ", index));
        }
            System.out.println(String.format("______________________"));
    }
    @GET
    public List<User> getAll() {
        TypedQuery<User> query = manager.createQuery("SELECT u FROM User u", User.class);
        return query.getResultList();
    }

    @GET
    @Path("{userId}/")
    public User findById(@PathParam("userId") int id) {
        return manager.find(User.class, id);
    }
    
    private static final Logger LOG = Logger.getLogger(UserResource.class.getName());
    @POST
    public void addUser(User user) {
        LOG.info(String.format("add user...%s", user.toString()));
        manager.persist(user);
    }

    public void setManager(EntityManager manager) {
        this.manager = manager;
    }
    
}
