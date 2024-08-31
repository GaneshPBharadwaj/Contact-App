# [Contact App](https://contactapp010.netlify.app/)

## Features

### 1. Fetch and Show Users
- **Endpoint**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Description**: The application fetches a list of users from the provided API endpoint and displays them. Each user’s details, such as `id`, `name`, `phone` (as number), and `email`, are shown in a user-friendly format.

### 2. Add a Contact
- **Endpoint**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Method**: `POST`
- **Description**: Users can add a new contact. The application sends a POST request to the API with the new contact's details. Note that this is a dummy request, so the contact will not be saved on the server, but the request will simulate adding a new contact and return some dummy data.

### 3. Update a Contact
- **Endpoint**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Method**: `PUT`
- **Description**: Users can update the details of an existing contact. The application sends a PUT request to the API with the updated contact information. This is a dummy request, so the changes will not be reflected on the server, but the request will simulate updating a contact and return some dummy data.

### 4. Delete a Contact
- **Endpoint**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Method**: `DELETE`
- **Description**: Users can delete a contact. The application sends a DELETE request to the API to remove a contact. This is a dummy request, so the contact will not actually be deleted from the server, but the request will simulate a deletion and return some dummy data.

## Setup Instructions

1. **Clone the Repository**:
   ```sh
   git clone <repository-url>
2. **Navigate to the Project Directory**:
   ```sh
   cd <project-directory>
3. **Install Dependencies**:
   ```sh
   npm install
4. **Start the Development Server**:
   ```sh
   npm start
5. **Open Your Browser**:
   * Go to http://localhost:3000 to view the application.

## Notes
* The API endpoints used are from JSONPlaceholder, which provides a mock API for testing and prototyping.
* The POST, PUT, and DELETE requests are dummy operations. They do not affect the actual data on the server.
## Contributing
If you have any suggestions or improvements, please create a pull request or open an issue on the repository.
## License
This project is licensed under the MIT License.
