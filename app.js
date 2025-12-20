//RESUME DATA STRUCTURE
const resumerData = {
    personal: {
        name :   '',
        email :  '',
        phone :  '',
        location: '',
        linkedin: '',
        portfolio: '',


    },
    summary: '',
    experience:'',
    education: '',
    Skills:'' ,
    certifications:'',

}
//DATA MANAGEMENT FUNCTIONS
function Add(Jobtitle, company, startDate , EndDate , Bullets){
    resumerData.experience.push({
        id: Date.now(),
        jobTitle,
        company,
        location,
        startDate,
        EndDate,
        Jobtitle,
        Bullets: Bullets||[]
        
    })
      return resumerData.experience[resumerData.experience.length - 1];

}
function updatExperience( id, field, value ){
const exp  = resumerData.experience.find(e=> e.id ===id)
if (exp){
    exp[field] =value;
    return true
}
return false
}
function DeleteExperience(id) {
    const index = resumerData.experience.findIndex(e => e.id === id)
    if (index >-1){
        resumerData.experience.splice(index,1 );
        return true
    }
    return false
}