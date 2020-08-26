var reporter =  require('../reporters/NUnitReporter');
jasmine.getEnv().addReporter(new reporter.NUnitXmlReporter({filename:'1.xml'}));