# Event Tracker 

At this stage in the project, the program uses REST API along with JPA. It is able to perform CRUD operations. These operations are fully testable using Postman. 

 



## 🛠 Technology Used

- Spring Tool Suite
- Java Persistence Application (JPA)
- MySQL Workbench
- Terminal 
- Github
- Postman
- Atom



## Lessons Learned


Implementation of REST interactions with JPA. Also keep improving my familiarity with MySQL Workbench, Postman, creating POJOs using JPA. Understanding how to send and receive JSON.

In the second part of the project, I learned how to dynamically add scripts to the application. 
Also, send asynchronous requests to Java controllers with JavaScript's `XMLHttpRequest, Consume and parse JSON responses with JavaScript. All request POST/PUT/DELETE requests were accomplished with XMLHttpRequest



## Route Reference



|Request Method| Request URL | Parameter     | Description                |
| :------------| :--------   | :-------      | :------------------------- |
|GET| `http://localhost:8082/api/routes` | `none` | List of all Hikes |
|GET|`http://localhost:8082/api/routes/{id}`| `Hike Id`| Finds a hike by Id|
|POST|`http://localhost:8082/api/routes/`|`none`| Creates a new Hike|
|PATCH|`http://localhost:8082/api/routes/{id}`|`Hike id`| Updates an existing Hike|
|DELETE|`http://localhost:8082/api/routes/{id}`|`Hike id`| Deletes a Hike

## Author

- Diego Escutia


