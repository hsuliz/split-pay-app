package com.hsuliz.backend.configuration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class WebConfig {

    @RequestMapping(value = "/{[path:[^.]*}")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/");
    }

}