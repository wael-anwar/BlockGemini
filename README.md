# BlockGemini
Test Angular, React, Node js, Express js

Table of Contents
=================
  * [Setup](#setup)
  * [Usage](#usage)

## Setup
Fistly, clone this repository:
```
git clone https://github.com/wael-anwar/BlockGemini.git
cd BlockGemini
```

### Angluar
 ```bash
  - cd Angular
  - npm install
  - ng serve
  ```
  
 ### React
 ```bash
  - cd React
  - npm install
  - npm start
  ```
  
### Node
 ```bash
  - cd Node
  - npm install
  - node app.js
  ```

## Usage

### Angluar
 - The Main Page contains the data (first_name, last_name) from the API as requested in the test "https://reqres.in/api/users?page=1"
  
 ### React
- The Main Page contains the data (first_name, last_name) from the API as requested in the test "https://reqres.in/api/users?page=1"
  
### Node
 - Using Postman to test the post request to http://localhost:3000/list/ With "/list/" as end point with the following list of tags: 

    - "id" 
    - "type"


    Receive the following list of tags:

    - "id" 
    - "type" as list


**Examples**:

- Ex : 
```
Post: in Headers
{
  Content-Type: application/json
}
Post: in Body
[
     {
      "id":1,
      "type":"ADD"
      },
      {
      "id":1,
      "type":"ADD"
      },
      {
      "id":1,
      "type":"CHANGE"
      },
      {
      "id":2,
      "type":"CHANGE"
      },
      {
      "id":2,
      "type":"CHANGE"
      }
 ]


Receive:

[
    {
        "id": 1,
        "type": [
            "ADD",
            "CHANGE"
        ]
    },
    {
        "id": 2,
        "type": [
            "CHANGE"
        ]
    }
]
```
