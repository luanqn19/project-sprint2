package com.example.util;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@Data
public class TokenUtil {
    private Map<String, String> tokenMap = new HashMap<>();

    public Map<String, String> getTokenMap () {
        return tokenMap;
    }

    public void setTokenMap (Map<String, String> tokenMap) {
        this.tokenMap = tokenMap;
    }
}
