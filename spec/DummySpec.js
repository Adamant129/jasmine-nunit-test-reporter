// var jasmineWrapper = require('../helpers/JasmineWrapper');

// rdescribe("Dummy Test", () => {
// 	const workspaceId = 2;
// 	const viewerType = "native";
// 	const dummyTestOptions = {
// 		tags: [jasmineWrapper.TestTags.cd],
// 		overrideTimeout: 30000,
// 	};

// 	rit("is dummy test - first test in system test takes some time to start things off", async () => {
// 		// Dummy test - This is currently the first system test that gets run. This is here so that
// 		// we don't misinterpret how long the test below takes.

// 	}, dummyTestOptions);
// });

describe("Dummy Test", () => {
	 	const workspaceId = 2;
		const viewerType = "native";
		// const dummyTestOptions = {
		// 	tags: [jasmineWrapper.TestTags.cd],
		// 	overrideTimeout: 30000,
		// };
	
		it("is dummy test - first test in system test takes some time to start things off", async () => {
			// Dummy test - This is currently the first system test that gets run. This is here so that
			// we don't misinterpret how long the test below takes.
	
		}).result.properties = 1;// [ {name : "Guid", value : "120930249"} ];
	}).result.properties = [ {name : "Guid", value : "120930249"} ];;

// 	describe('length property',function(){
 
// 		parameters([
// 		   ['abc', 3],
// 		   ['ab',  4],
// 		   ['',    0]
// 		], function(string, expected) {
// 		  it('should contain string length', function(){
// 			expect(string.length).toBe(expected);
// 		  });
// 		});
	  
// 	 });

// 	function parameters(arrayOfArrays, testCaseFunction) {
// 		_.each(arrayOfArrays, function(innerArray){
// 			testCaseFunction.apply(this, innerArray);
// 		});
//    }