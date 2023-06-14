package discovery.ProcessDiscovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProcessDiscoveryApplication {

	public static final String applicationID="TesterID";

	public static void main(String[] args) {
		SpringApplication.run(ProcessDiscoveryApplication.class, args);
	}

}
