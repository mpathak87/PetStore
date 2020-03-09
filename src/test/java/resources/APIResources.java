package resources;

public enum APIResources {
    AddPetAPI("/pet"),
    getAddPetAPI("/pet/11"),
    deletePetAPI("/pet/11"),
    AddOrderAPI("/store/order"),
    getOrderAPI("/store/order/3");
    private String resource;

    APIResources(String resource)
    {
        this.resource=resource;
    }

    public String getResource()
    {
        return resource;
    }

}
