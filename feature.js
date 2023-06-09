const gfName ="Eva Rahman";
const lovePercent= ()=>{
    return (`Hello ${gfName}! I love you so much!`);
}
const like= lovePercent();
//export a function
exports.like = like;
exports.gfName = gfName;
