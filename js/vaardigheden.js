var vaardigheden = [
  { value: "80%", text: "completed", vaardigheid: "Html" },
  { value: "80%", text: "completed", vaardigheid: "Css" },
  { value: "70%", text: "completed", vaardigheid: "Javascript" },
  { value: "60%", text: "completed", vaardigheid: "Bootstrap" },
  { value: "60%", text: "completed", vaardigheid: "Jquery" },
  { value: "40%", text: "completed", vaardigheid: "Web Components" },
  { value: "85%", text: "completed", vaardigheid: "Responsive design" },
  { value: "40%", text: "completed", vaardigheid: "Php" },
  { value: "90%", text: "completed", vaardigheid: "Usability" },
  { value: "85%", text: "completed", vaardigheid: "Seo" },
  { value: "85%", text: "completed", vaardigheid: "Accessibility" },
  { value: "85%", text: "completed", vaardigheid: "Best Practices" },
  { value: "35%", text: "completed", vaardigheid: "Vue.Js 3" },
  { value: "35%", text: "completed", vaardigheid: "Pinia" },
];

var nameOfSkills = document.getElementById("skills");
var progressBars = document.getElementsByClassName("progress-bar");

for (var skill = 0; skill < vaardigheden.length; skill++) {
  nameOfSkills.innerHTML +=
    "<div class='vaardigheden'><p>" +
    vaardigheden[skill].vaardigheid +
    "&nbsp&nbsp</p>" +
    "<div class='progress'>" +
    "<div class='progress-bar' role='progressbar' aria-valuenow='" +
    vaardigheden[skill].value +
    "' aria-valuemin='0' aria-valuemax='100' aria-hidden='true'>" +
    vaardigheden[skill].value +
    "</div>" +
    "</div>";
  for (var a = 0; a < progressBars.length; a++) {
    progressBars[a].style.width += vaardigheden[skill].value;
    "</div>" + "</div>";
  }
}
