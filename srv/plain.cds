@protocol: 'rest'
@path: '/rest/plain/'

service plain{
    //Task 4
    function theAnswer() returns Integer;
    action highestValue(nums: array of Integer) returns Integer;
}

