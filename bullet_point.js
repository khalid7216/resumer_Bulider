function getAllExperience() {
    return resumeData.experience;
}
function AddBullPoint(expId, bulletsText){
const exp = resumeData.experience.find(e => e.id=== expId)
if(exp){
    exp.bullet.push(bulletsText);
   return true;
}
 return  false;
}
function UpdateBullet(expID, bulletIndex,NewText) {
    const exp =resumeData.experience.find(e.id === expID);
    if(exp && exp.bullet[bulletIndex]!==undefined)
        { exp.bullets[bulletIndex]= NewText;
            return true}
    return false
}
