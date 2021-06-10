describe('Add the registration numbers', function () {
    let reg = addRegistrations();

    it('should add numberplate on screen', function () {
        reg = addRegistrations();

        assert.equal('CA 123123', reg.enterRegistrationsNo('CA 123123'));

    });

    it('should return error if registration is invalid', function () {
        reg = addRegistrations();


        assert.equal('invalid registration', reg.enterRegistrationsNo('CA123567'));

    });

    it('should add numberplate on screen', function () {
        reg = addRegistrations();

        assert.equal('CJ 123-123', reg.enterRegistrationsNo('CJ 123-123'));

    });

    it('should change the cy to be capital letters', function () {
        reg = addRegistrations();
        assert.equal('CY 098-765', reg.enterRegistrationsNo('cy 098-765'));

    });

    it('should add numberplate on screen', function () {
        reg = addRegistrations();

        assert.equal('CY 123 123', reg.enterRegistrationsNo('CY 123 123'));

    });

    it('should return error if registration is invalid', function () {
        reg = addRegistrations();
        assert.equal('invalid registration', reg.enterRegistrationsNo('123567'));

    });

    it('should change the cy to be capital letters', function () {
        reg = addRegistrations();
        assert.equal('CJ 098-765', reg.enterRegistrationsNo('cj 098-765'));

    });

    it('should return error if  theres no registration for a selected town', function () {
        reg = addRegistrations();


        assert.equal('no registration', reg.selectTown(''));

    });




    it('should return list of all registration ', function () {
        reg = addRegistrations();
      
        reg.addRegOnArr("CA 123 123")
        reg.addRegOnArr("CA 183-723")
        reg.addRegOnArr("CJ 123 123")
        reg.addRegOnArr("CY 183-723")
        reg.addRegOnArr("CA 123 163")


        assert.deepEqual(['CA 123 123', 'CA 183-723', 'CJ 123 123', 'CY 183-723', 'CA 123 163'], reg.getRegistrations());

    });

    it('should return empty array for Bellville', function () {
        reg = addRegistrations();
        reg.addRegOnArr("CA 123 123")
        reg.addRegOnArr("CA 183-723")
        

        assert.deepEqual([], reg.selectTown('CY'));

    });

    

});

describe('Retrive the registration for specific town', function () {
    let reg = addRegistrations();

it('should return registration from Cape town', function () {
    reg = addRegistrations();
    reg.enterRegistrationsNo("CA 123 123")
    reg.enterRegistrationsNo("CA 183-723")
    reg.enterRegistrationsNo("CJ 123 123")
    reg.enterRegistrationsNo("CY 183-723")
    reg.addRegOnArr("CA 123 123", "CA 183-723")
    reg.addRegOnArr("CA 183-723")


    assert.deepEqual(["CA 123 123","CA 183-723"], reg.selectTown('CA'));

});

it('should return registration from Paarl', function () {
    reg = addRegistrations();
    reg.enterRegistrationsNo("CA 123 123")
    reg.enterRegistrationsNo("CJ 183-723")
    reg.enterRegistrationsNo("CJ 123 123")
    reg.enterRegistrationsNo("CY 183-723")
    reg.addRegOnArr("CJ 123 123")
    reg.addRegOnArr("CJ 183-723")


    assert.deepEqual(["CJ 123 123","CJ 183-723"], reg.selectTown('CJ'));

});

it('should return registration from Bellville', function () {
    reg = addRegistrations();
    reg.enterRegistrationsNo("CY 123 123")
    reg.enterRegistrationsNo("CA 183-723")
    reg.enterRegistrationsNo("CJ 123 123")
    reg.enterRegistrationsNo("CY 183-723")
    reg.addRegOnArr("CY 123 123",)
    reg.addRegOnArr("CY 183-723")


    assert.deepEqual(["CY 123 123","CY 183-723"], reg.selectTown('CY'));

});
});


