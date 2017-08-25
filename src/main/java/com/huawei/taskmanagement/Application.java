package com.huawei.taskmanagement;

import com.mouse.web.supports.jpa.repository.RepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
@EnableJpaRepositories(basePackages = "com.mouse", repositoryFactoryBeanClass = RepositoryFactory.class)
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @GetMapping({"/index"})
    public String index() {
        return "/index";
    }

    @GetMapping({"/", "/login"})
    public String login() {
        return "/login";
    }

    @GetMapping("/error/403")
    public String error403() {
        return "/error/403";
    }
}
