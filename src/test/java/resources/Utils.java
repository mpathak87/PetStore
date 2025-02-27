package resources;


import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

public class Utils {

    RequestSpecification req;
    public RequestSpecification requestSpecification() throws IOException {

        PrintStream log= new PrintStream(new FileOutputStream("logging.txt"));
    RestAssured.baseURI="https://petstore.swagger.io/v2";
    req=new RequestSpecBuilder().setBaseUri("https://petstore.swagger.io/v2")
            .addFilter(RequestLoggingFilter.logRequestTo(log))
            .addFilter(ResponseLoggingFilter.logResponseTo(log))
            .setContentType(ContentType.JSON).build();
    return req;
}
    public String getJsonPath(Response response, String key)
    {
        String resp=response.asString();
        JsonPath js = new JsonPath(resp);
        return js.get(key).toString();
    }
}
