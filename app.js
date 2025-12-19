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
}
function updatExperience( id, field, value ){
    
}