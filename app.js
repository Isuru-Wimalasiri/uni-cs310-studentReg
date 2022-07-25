const preferences = [document.getElementById('firstPrefer'),document.getElementById('secondPrefer'),
                        document.getElementById('thirdPrefer'),document.getElementById('fourthPrefer'),
                        document.getElementById('fifthPrefer')];

const preferenceErrors = [document.getElementById('firErr'),document.getElementById('secErr'),
                        document.getElementById('thiErr'),document.getElementById('fouErr'),
                        document.getElementById('fifErr')];

function showCombinations(course){

    const bioCourses = ['-Select-','Bio**/Chemistry','Bio*/Chemistry/Statistics','Bio*/Chemistry/Comptuer Science',
                        'Bio*/Chemistry/Geology','Bio*/Chemistry/Physics','Bio*/Geology/Physics',
                        'Chemistry/Geology/Physics'];

    const phyCourses = ['-Select-','Chemistry/Geology/Physics','Mathematics**/Chemistry','Mathematics**/Physics','Mathematics*/Chemistry/Physics',
                        'Computer Science/Chemistry/Statistics','Computer Science/Physics/Geology',
                        'Mathematics/Computer Science/Physics','Mathematics/Statistics/Physics'];

    document.getElementById('combinations').setAttribute('hidden','none');

    document.getElementById('selErr').innerText='';
    
    if(course.value == 'phy'){

        document.getElementById('combinations').style.display='block';
        
        for (let pref = 0; pref < 5; pref++) {    
            for (let index = preferences[pref].length-1; index >=0; index--) {
                
                preferences[pref].remove(index);
                
            }
        }
             
        for (let pref = 0; pref < 5; pref++) {    
            for (let index = 0; index < phyCourses.length; index++) {
                
                let option = document.createElement('option');
                option.text = phyCourses[index];
                preferences[pref].add(option);
                
            }
        }
    }
    else if(course.value == 'bio'){

        document.getElementById('combinations').style.display='block';

        for (let pref = 0; pref < 5; pref++) {    
            for (let index = preferences[pref].length-1; index >=0; index--) {
                
                preferences[pref].remove(index);
                
            }
        }

        for (let pref = 0; pref < 5; pref++) {    
            for (let index = 0; index < bioCourses.length; index++) {
                
                let option = document.createElement('option');
                option.text = bioCourses[index];
                preferences[pref].add(option);
                
            }
        }
    }
    else{
        document.getElementById('combinations').style.display='none';
    }
    
}

const btn = document.getElementById("submitBtn");

btn.addEventListener('click', e =>{

    
    
    let name = document.personalDataForm.name.value;
    let gender = document.personalDataForm.gender.value;
    let dob = document.personalDataForm.dob.value;
    let NIC = document.personalDataForm.nic.value;
    let address = document.personalDataForm.address.value;
    let tel = document.personalDataForm.phone.value;
    let zScore = document.personalDataForm.zScore.value;

    let reExpForName = /^[A-Za-z\.\s]+$/;
    let reExpForTel = /^[\d]{10}$/;
    let reExpForNIC = /^[\d]*$/;
    let reExpForZ = /^[\d]+([\.]|[\.][\d]+)?$/;

    
    let validate =  true;

    //name validation
    if(name == ''){
        document.getElementById('nameErr').innerText = 'Name can not be empty!';
        validate = false;
    }
    else if( !reExpForName.test(name)){
        document.getElementById('nameErr').innerText = 'Enter name with initials!';
        validate = false;
    }
    else if( reExpForName.test(name)){
        document.getElementById('nameErr').innerText = '';
    }
    
    //gender validation
    if(gender == '' ){
        document.getElementById('genErr').innerText = 'Gender can not be empty!';
        validate = false;
    }
    else if(!(gender == '')){
        document.getElementById('genErr').innerText = '';
    }

    //dob validation
    if(dob == ''){
        document.getElementById('dobErr').innerText = 'Birthday can not be empty!';
    }
    if(dob != ''){
        document.getElementById('dobErr').innerText = '';
    }

    //nic validation
    if(NIC == ''){
        document.getElementById('nicErr').innerText = 'NIC can not be empty!';
        validate = false;
    }
    else if(!reExpForNIC.test(NIC)){
        document.getElementById('nicErr').innerText = 'NIC contains only numbers!';
        validate = false;
    }
    else if(reExpForNIC.test(NIC)){
        document.getElementById('nicErr').innerText = '';
    }

    //address validation
    if(address.trim() == ''){
        document.getElementById('addErr').innerText = 'Address can not be empty!';
    }
    else if(address.trim() !=''){
        document.getElementById('addErr').innerText = '';
    }

    //z score validation
    if(zScore == ''){
        document.getElementById('zErr').innerText = 'Z-score can not be empty!';
        validate = false;
    }
    else if(!reExpForZ.test(zScore)){
        document.getElementById('zErr').innerText = 'Invalid Z-score!';
        validate = false;
    }
    else if(reExpForZ.test(zScore)){
        document.getElementById('zErr').innerText = '';
    }

    //tel number validation
    if(tel == ''){
        document.getElementById('phoErr').innerText = 'Telephone number can not be empty!';
        validate = false;
    }
    else if(!reExpForTel.test(tel)){
        document.getElementById('phoErr').innerText = 'Telephone number should be 10 digits!';
        validate = false;
    }
    else if(reExpForTel.test(tel)){
        document.getElementById('phoErr').innerText = '';
    }

    //course select validation
    let courseIndex = document.getElementById('courses').selectedIndex;
    if(courseIndex == 0){
        document.getElementById('selErr').innerText = 'Please select a course!';
        validate = false;
    }
    else if(courseIndex != 0){
        document.getElementById('selErr').innerText = '';
    }

    //validation of preference
    for(let i=0 ; i<preferences.length; i++){

        if(preferences[i].selectedIndex == 0){
            preferenceErrors[i].innerText = 'Select a combination!';
            validate = false;
        }
    }

    if(validate){
        successfull();
    }
});

function eraseErr(selectionNum){
    if(document.getElementsByClassName('errorMessage')[selectionNum] != ''){
        document.getElementsByClassName('errorMessage')[selectionNum].innerText ='';
    }
}

function successfull(){
    document.getElementById('wrapper').style.visibility = "hidden";
    document.getElementById('status').style.visibility = "visible";

}