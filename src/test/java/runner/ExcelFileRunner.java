package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src\\test\\resources\\features"/* ,"src\\test\\resources\\features" */},	
		glue = {"step_definations"},
		tags = "@excelfile", /*and not @login and not @Regression@excelfile or @logininvalid or @login*/
		monochrome = true,
		dryRun = false,
		strict = true,
		plugin = {
					 "html:test-output", 
					"json:target/cucumber-report/cucumber.json",
					"io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm"
		}				
)

public class ExcelFileRunner {

}
