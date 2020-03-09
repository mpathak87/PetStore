package resources;

import pojo.AddPet;
import pojo.OrderPet;


public class TestDataBuild {

    public AddPet addPetPayLoad(String id, String name){
        AddPet p = new AddPet();
        p.setId(id);
        p.setName(name);
        p.setStatus("available");
        return p;
    }
    public OrderPet addOrderPayLoad(String id, String quantity, String petId, String status){


        OrderPet o = new OrderPet();
        o.setId(id);
        o.setPetId(petId);
        o.setQuantity(quantity);
        o.setStatus(status);
        return o;
    }



}
