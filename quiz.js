function check()  { 
//console.log(document.queryselector)
let showdiv= document.getElementById('result')
let button= document.getElementById('TryAgain')
//console.log(button)

//console.log(showdiv)

 let form= document.forms['quiz']
//console.log(form) grabbed the form from quiz.html also added defer to make sure quiz.js is being loaded
//cannot use onclick on form, hence the use of onsubmit
	form.onsubmit= function quizAnswers(e){ // onsubmit is an event which refreshes. * only form event refreshes
		e.preventDefault()// e(event).preventDefault prevents page from Refreshing which is the default action of the form. 
		var total=6;
		var finalScore=0;
		var q1=document.quiz.question1.value;
		var q2=document.quiz.question2.value;
		var q3=document.quiz.question3.value;
		var q4=document.quiz.question4.value;
		var q5=document.quiz.question5.value;
		var q6=document.quiz.question6.value;
//console.log(q3)
      let answersArray=["100","FOX News","Khomotar Jadoo","Prophet Muhammad(pbuh)","John Kabir","Prof. Shoaib Ahmed, because of clear and understandable lectures with proper notes on coding languages"]
      //i is index, in order to print each answer we are indexing into answers
      for(i=0; i<=answersArray.length; i++){
       let eachAnswer= answersArray[i]
       if (q1===eachAnswer){finalScore+=1}
       	if (q2===eachAnswer){finalScore+=1}
        if (q3===eachAnswer){finalScore+=1}
       	if (q4===eachAnswer){finalScore+=1}
       	if (q5===eachAnswer){finalScore+=1}
       	if (q6===eachAnswer){finalScore+=1}
        
       

       		
     }


	// if (q1=="100") {
	// 	c+=1
 //    if (q2=="FOX News") {c++}
	// if (q3=="Khomotar Jadoo") {c++}
	// if (q4=="Prophet Muhammad(pbuh)") {c++}
	// if (q5=="John Kabir") {c++}
	// if (q6=="Prof. Shoaib Ahmed, because of clear and understandable lectures with proper notes on coding languages") {c++}
	// 	document.write(c);
    console.log(showdiv)
    showdiv.innerText=" Your Final Score is " + finalScore + "/" + total
	}//end of form function


 
// we grabbed the tryagain button from quiz.html and added onclick event, created a function named trybutton + invoked, reloading the doc.
	button.onclick=function trybutton(){
 	location.reload(true)
 }





}//end of main (check) function
 
check()
