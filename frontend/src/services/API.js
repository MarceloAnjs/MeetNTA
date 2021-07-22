import axios from "axios";

export default {
    registerUser: function (user) {
        return axios.post("/api/register", user)
    },
    loginUser: function (user) {
        return axios.post("/api/login", user);
    },
    listUsers: function (token) {        
        return axios.get("/api/users", {
            headers: { Authorization: `Bearer ${token.replaceAll('"',"")}` },
            params: {
                t: new Date().getTime()
              }
        });
    },
    updateStatus: function (user, token){        
        return axios.put("/api/update", user, {
            headers: {Authorization: `Bearer ${token.replaceAll('"',"")}`}
        });
    }
};
