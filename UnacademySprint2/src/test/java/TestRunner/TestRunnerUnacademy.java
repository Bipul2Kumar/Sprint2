package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 

@CucumberOptions(features= "src/test/resources/Features/LoginUnacadem.feature",glue= {"stepDefinition"},tags= {"@first"})
public class TestRunnerUnacademy extends AbstractTestNGCucumberTests{
}



