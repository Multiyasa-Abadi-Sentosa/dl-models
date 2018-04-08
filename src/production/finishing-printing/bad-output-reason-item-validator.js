require("should");
var validateBadOutputReason = require('../../master/bad-output-reason-validator');
var validateMachine = require("../../master/machine-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('length');
    data.length.should.instanceOf(Number);

    data.should.have.property('action');
    data.action.should.be.String();
    
    data.should.have.property('description');
    data.description.should.be.String();

    data.should.have.property('badOutputReasonId');
    data.badOutputReasonId.should.instanceOf(Object);

    data.should.have.property('badOutputReason');
    data.badOutputReason.should.instanceof(Object);
    validateBadOutputReason(data.badOutputReason);

    data.should.have.property('machineId');
    data.machineId.should.instanceOf(Object);

    data.should.have.property('machine');
    data.machine.should.instanceOf(Object);
    validateMachine(data.machine);
};