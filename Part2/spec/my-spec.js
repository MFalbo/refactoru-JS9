describe("Module", function() {
  it("should be able to remove elements from an array.", function() {

    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);

  });

  it("should leave the original array unchanged (pure function).", function() {

    var a = ['a','b','c','d','e'];
	splice(a, 2, 2);
	expect(a).toEqual(['a','b','c','d','e']);

   });

   it("should insert an item with the fourth argument.", function() {

	expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);

   });

   it("should elements without removing anything.", function() {

	expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);

   });

   it("should insert at the end when inserting at an arbitrarily high index.", function() {
	// Inserting at an arbitrarily high index should just insert at the end.
	expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
	expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);

   });

   it("should be able to insert an arbitrary number of values using multiple arguments.", function() {
	// You should 
	expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);

  });
});