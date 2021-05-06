package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 

@CucumberOptions
(features= "src/test/resources/Features/Register.feature",
glue= {"stepDefinition"},
tags= {"@third"}
//plugin= {"pretty","html:TestNGReports1/htmlreport",
	//	"json:TestNGReports1/jsonreport.json",
	//	"junit:TestNGReports1/xmlreport.xml",
	//	"com.cucumber.listener.ExtentCucumberFormatter:TestNGReports1/cucumber-reports/report.html"}
		

		)
public class TestRunnerUnacademy extends AbstractTestNGCucumberTests{
	
}



	