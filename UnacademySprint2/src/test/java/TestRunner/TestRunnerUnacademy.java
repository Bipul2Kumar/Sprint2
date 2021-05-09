package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 

@CucumberOptions

//(features= "src/test/resources/Features/LoginByEmail.feature",glue= {"stepDefinition"},
(features= "src/test/resources/Features/LoginByNumber.feature",glue= {"stepDefinition"},
//(features= "src/test/resources/Features/Register.feature",glue= {"stepDefinition"},
tags= {"@LoginByNumber"},
plugin= {"pretty","html:TestNGReports/htmlreport",
		"json:TestNGReports/jsonreport.json",
		"junit:TestNGReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:TestNGReports/cucumber-reports/report.html"}
		

		)
public class TestRunnerUnacademy extends AbstractTestNGCucumberTests{
	
}



	