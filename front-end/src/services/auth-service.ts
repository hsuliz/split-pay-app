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
                    localStorage.setItem("token", response.data);
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("token");
    }

    // #TODO
    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "/signup", {
            username,
            email,
            password
        });
    }

    getCurrentClientToken() {
        const token = localStorage.getItem("token");
        if (token) {
            return token;
        }
        return null;
    }

}

export default new AuthService();
