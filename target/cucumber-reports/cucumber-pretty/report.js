$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Petstore.feature");
formatter.feature({
  "name": "Validating the petstore",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add a new pet to the store",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "Add a payload with \"\u003cid\u003e\" \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I call \"/v2/pet\" with POST HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify a new pet is created \"\u003cid\u003e\" \"\u003cname\u003e\" using \"/v2/pet/11\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ]
    },
    {
      "cells": [
        "11",
        "Rossie"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add a new pet to the store",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "Add a payload with \"11\" \"Rossie\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.PetstoreSteps.add_a_payload_with(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call \"/v2/pet\" with POST HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_call_with_POST_HTTP_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_receive_valid_HTTP_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify a new pet is created \"11\" \"Rossie\" using \"/v2/pet/11\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_verify_a_new_pet_is_created_using(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove a pet from the store",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "A pet is created \"\u003cid\u003e\" \"\u003cname\u003e\" using GET HTTP Request",
  "keyword": "Given "
});
formatter.step({
  "name": "I call DELETE HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify pet with \"\u003cid\u003e\" no longer exist using GET HTTP Request",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ]
    },
    {
      "cells": [
        "11",
        "Rossie"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove a pet from the store",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "A pet is created \"11\" \"Rossie\" using GET HTTP Request",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.PetstoreSteps.a_pet_is_created_using_GET_HTTP_Request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call DELETE HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_call_DELETE_HTTP_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_receive_valid_HTTP_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify pet with \"11\" no longer exist using GET HTTP Request",
  "keyword": "And "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_verify_pet_with_no_longer_exist_using_GET_HTTP_Request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add new order to buy a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "Add a payload with \"\u003cid\u003e\" \"\u003cpetID\u003e\" \"\u003cquantity\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I call \"/v2/store/order\" with POST HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify order with \"\u003cid\u003e\" \"\u003cpetID\u003e\" \"\u003cquantity\u003e\" \"\u003cstatus\u003e\" using GET HTTP Request",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "petID",
        "quantity",
        "status"
      ]
    },
    {
      "cells": [
        "7",
        "7",
        "1",
        "placed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add new order to buy a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "Add a payload with \"7\" \"7\" \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.PetstoreSteps.add_a_payload_with(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call \"/v2/store/order\" with POST HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_call_with_POST_HTTP_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive valid HTTP status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_receive_valid_HTTP_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify order with \"7\" \"7\" \"1\" \"placed\" using GET HTTP Request",
  "keyword": "And "
});
formatter.match({
  "location": "steps.PetstoreSteps.i_verify_order_with_using_GET_HTTP_Request(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});