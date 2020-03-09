Feature: Validating the petstore


  @Test1
  Scenario Outline: Add a new pet to the store
    Given Add a payload with "<id>" "<name>"
    When I call "AddPetAPI" using POST HTTP request
    Then I receive valid HTTP status code 200
    And I verify id new pet is created "<name>" using "getAddPetAPI"

    Examples:
     | id | name   |
     | 11 | Rossie |

  @Test2
  Scenario Outline: Remove a pet from the store
    Given Add a payload with "<id>" "<name>"
    When I call "AddPetAPI" using POST HTTP request
    And  I call "deletePetAPI" using DELETE HTTP request
    Then I receive valid HTTP status code 200
    And I verify pet "getAddPetAPI" returns HTTP status code "404"

    Examples:
      | id | name   |
      | 11 | Rossie |

  @Test3
  Scenario Outline: Add new order to buy a pet
    Given Add a payload with "<id>" "<petId>" "<quantity>" "<status>"
    When I call "AddOrderAPI" using POST HTTP request
    Then I receive valid HTTP status code 200
    And I verify order with "<id>" "<petId>" "<quantity>" "<status>" using "getOrderAPI"

    Examples:
     | id | petId | quantity | status |
     | 7  | 7     | 1        | placed |