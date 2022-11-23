import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {

    login(username: string, password: string) {
        return axios
            .post(API_URL + "/signin", {
                username,
                password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem("user", response.data);
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "/signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return userStr;

        return null;
    }

}

export default new AuthService();
