package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

import java.io.IOException;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;


public class PetstoreSteps  extends Utils {
    RequestSpecification res;
    ResponseSpecification resspec;
    Response response;
    TestDataBuild data =new TestDataBuild();
    static String petid;
    static String qty;

    @Given("Add a payload with {string} {string}")
    public void add_a_payload_with(String id, String name) throws IOException {
        res=given().spec(requestSpecification())
                .body(data.addPetPayLoad(id, name));
    }

    @Given("Add a payload with {string} {string} {string} {string}")
    public void add_a_payload_with(String id, String petId, String quantity, String status) throws IOException {
       res=given().spec(requestSpecification())
                .body(data.addOrderPayLoad(id, petId, quantity, status));
    }

    @When("I call {string} using POST HTTP request")
    public void i_call_using_POST_HTTP_request(String resources) {
        APIResources resourceAPI= APIResources.valueOf(resources);
        response =res.when().post(resourceAPI.getResource());

    }


    @Then("I receive valid HTTP status code {int}")
    public void i_receive_valid_HTTP_status_code(Integer int1) {
       resspec =new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();;
        assertEquals(response.getStatusCode(), 200);
    }

    @Then("I verify id new pet is created {string} using {string}")
    public void i_verify_id_new_pet_is_created_using(String expectedName, String resources) throws IOException {
       petid=getJsonPath(response,"id");
        res=given().spec(requestSpecification()).queryParam("id",petid);
        user_calls_with_http_request(resources);
        String actualName=getJsonPath(response,"name");
        assertEquals(actualName,expectedName);
    }



    @When("I call {string} using DELETE HTTP request")
    public void i_call_using_DELETE_HTTP_request(String resources) throws IOException {
        APIResources resourceAPI= APIResources.valueOf(resources);
        response =res.when().delete(resourceAPI.getResource());
        resspec =new ResponseSpecBuilder().expectStatusCode(404).expectContentType(ContentType.JSON).build();;
    }


    @Then("I verify pet {string} returns HTTP status code {string}")
    public void i_verify_pet_returns_HTTP_status_code(String resources, String string2) throws IOException {
        res=given().spec(requestSpecification());
        user_calls_with_http_request(resources);
        assertEquals(response.getStatusCode(), string2);
    }

    @Then("I verify order with {string} {string} {string} {string} using {string}")
    public void i_verify_order_with_using(String expectedId, String expectedpetId, String  expectedQ, String expectedName, String resources) throws IOException {

        res=given().spec(requestSpecification());
        user_calls_with_http_request(resources);
        String actualName=getJsonPath(response,"placed");
        assertEquals(actualName,expectedName);
        String actualid=getJsonPath(response,"id");
        assertEquals(actualid,expectedId);
        String actualpetId=getJsonPath(response,"petId");
        assertEquals(actualpetId,expectedpetId);
        String actualquantity=getJsonPath(response,"actualquantity");
        assertEquals(actualquantity,expectedQ);
    }
    private void user_calls_with_http_request(String resources) {
    }

}
