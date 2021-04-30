package runner2;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/login.feature",glue = {"stepDefinition"})

public class RunTestLogin {

	
}
