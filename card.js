var information = [];
information[0] = prompt("Enter Your Name" , 'Your Name');
information[1] = prompt("Enter Your Father Name" , "Your Father Name");
information[2] = prompt("Enter Your CNIC" , 'XXXXX-XXXXXXX-X');
information[3] = prompt("Select a Course in a list\nGraphic Design\nWeb And App Development\nArtificial Intelligence" , 'Web And App Development');
document.write("<div class='main1'>");
// document.write(`<h1 class='heading'> HI ${information[0]} This is your student ID Card `)
document.write("<div class='main'>");
document.write('<img src="image/logo.png" alt="img" class="logo">');
document.write("<h4 class='text'>Saylani Mass IT Training Centre</h4>");
document.write('<img src="image/boy.jpeg" alt="img" class="boy">');
document.write(`<h4 class='name'>${information[0]}</h4>`);
var course;
var courseName;
if (information[3] === 'Graphic Design' || information[3] === 'Graphicdesign'|| information[3] === 'Graphic design'|| information[3] === 'graphicdesign'|| information[3] === 'graphic design' ) {
     course = 'GD';
    courseName = 'Graphic Design'
}else if(information[3] === 'Web Development' || information[3] === 'Web And App Development' || information[3] === 'WMA'){
     course = 'WMA';
     courseName = 'Web And Mobile App Development'
}else if(information[3] === "Artificial Intelligence" || information[3] === "Artificial intelligence" || information[3] === "Artificialintelligence"){
    course = 'AI';
    courseName = 'Artificial Intelligence'
}else{
    document.write("Enter a valid course");
}
document.write(`<h4 class='courseNames'>${courseName}</h4>`);
 var num = 0
document.write(`<h4 class='course'>${course}-${++num}`);
document.write("</div>");


var studentName = information[0];
var fatherName = information[1];
var cnic = information[2];
document.write("<div class='main2'>");
document.write(`<h4 class='nametext'>Name:<span class='span1'> ${studentName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span></h4>`);
document.write(`<h4 class="fathername">  Father Name: <span class='span1'>${fatherName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </span></h4>`);
document.write(`<h4 class="cnicnumber">  CNIC Number:<span class='span1'> ${cnic}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </span></h4>`);
document.write(`<h4 class="coursetext">  Course:<span class='span1'>${course} Batch 01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></h4>`);

document.write("<h4 class='note'>Note: This card is for Student premises only. If found please return to student</h4>")



document.write("</div>");
document.write("</div>");









