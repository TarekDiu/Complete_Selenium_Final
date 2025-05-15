package runner;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
    OrderListRunner.class,
    ExcelFileRunner.class,
    CustomerOrderRunner.class
})





public class MasterRunner {

}
