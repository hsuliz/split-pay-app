# split-pay-app

Simple expenses tracker with login system based on JWT authorization.

#### Tools used

- Java
- Kotlin
- TypeScript
- Spring Boot
- React.js
- PostgreSQL
- JUnit 5
- Testcontainers

#### What user can do?

- Create, edit, delete an account.
- Create, edit, delete an expenses.
- View list of expenses.
- I don't know what new things I could add >...<

## Requirements

- _Java 17_
- _Node 18_

## Installation

1. Start the local SQL server. You can use docker-compose file:
    ```shell
     docker-compose up -d
    ```

2. Start back-end module.
   - Go to back-end directory:
     ```shell
     cd back-end
     ```
   - Build module:
     ```shell
     ./mvnw clean install
     ```      
     This command installing and executes tests which using Docker with Testcontainers. If you don't have Docker –
     skip them:
     ```shell
     ./mvnw clean install -Dmaven.test.skip=true
     ```
   - Run module:
     ```shell
     ./mvnw spring-boot:run
     ```
3. Start front-end module:
   - Go to front-end directory:
      ```shell
      cd front-end
      ```
   - Build module:
     ```shell
     npm install
     ```
   - Run module:
     ```shell
     npm start
     ```
4. Back-end module was started at `:8080` and front-end module at `:3000`.
5. Now you can open it on your browser: `http://localhost:3000`.
