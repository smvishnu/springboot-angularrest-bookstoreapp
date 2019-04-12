package app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringbootAngularrestBookstoreappApplication extends SpringBootServletInitializer{

	
	public static void main(String[] args) {
		//System.setProperty("server.context-path", "/book");
		Logger log = LoggerFactory.getLogger(SpringbootAngularrestBookstoreappApplication.class);
		System.out.println("static void main() invoked");
		//System.setProperty("server.context-path", "/book");
		SpringApplication.run(SpringbootAngularrestBookstoreappApplication.class, args);
	}
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(SpringbootAngularrestBookstoreappApplication.class);
    }
}
