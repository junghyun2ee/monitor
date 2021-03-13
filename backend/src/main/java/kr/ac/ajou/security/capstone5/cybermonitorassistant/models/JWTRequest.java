package kr.ac.ajou.security.capstone5.cybermonitorassistant.models;

import java.io.Serializable;

public class JWTRequest implements Serializable {

    private static final long serialVersionUID = 5926468538005150707L;

    private String username;
    private String password;

    public JWTRequest() {}
    public JWTRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
