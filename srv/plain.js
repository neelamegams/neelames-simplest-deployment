module.exports = function (){
    this.on('theAnswer', () => 42)
    this.on('highestValue', (nums) => {
        let highestVal = nums.data[0];
        let numList = nums.data;
        for (let i = 0; i < numList.length; i++){
            if(numList[i] > highestVal){
                highestVal = numList[i];
            }
        }
        return highestVal;
    })
}