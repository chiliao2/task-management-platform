package com.huawei.taskmanagement.config;

import com.mouse.web.authorization.local.WebLocalSecurityConfigurerAdapter;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.util.StringUtils;

import java.util.Arrays;

@Configuration
public class SecurityConfiguration extends WebLocalSecurityConfigurerAdapter {

    private static final Log LOGGER = LogFactory.getLog(SecurityConfiguration.class);

    @Override
    public String getPermits() {
        return "/,/about,/extends/*,/**/*.css,/**/*.js,/**/*.gif,/**/*.jpg,/**/*.bmp,/**/*.png,/**/*.ico";
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        String permits = this.getPermits();
        String[] matchers = StringUtils.isEmpty(permits) ? new String[0] : getPermits().split("[,]");
        LOGGER.info("自定义免验证地址列表：" + Arrays.toString(matchers));
        http.addFilterBefore(filter, FilterSecurityInterceptor.class)
                .authorizeRequests()
                .antMatchers(matchers).permitAll()
                .anyRequest().authenticated()
                .and().formLogin().loginPage("/login").permitAll()
                .and().logout().permitAll()
//                .and().exceptionHandling().accessDeniedHandler(accessDeniedHandler)
                .and().csrf().disable();
    }
}
