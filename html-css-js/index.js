const sayHello = () => {
  const name = document.getElementById("name").value;

  // radio type
  const gender = document.getElementsByName("gender")[0].checked
    ? document.getElementsByName("gender")[0].value
    : document.getElementsByName("gender")[1].value;

  //console.log(gender);

  // select

  const college = document.getElementById("Colleges").value;
  //console.log(college);


  // file Upload
  

  // data

  //alert(`hello ${name} ${gender} ${Colleges}`);
};
