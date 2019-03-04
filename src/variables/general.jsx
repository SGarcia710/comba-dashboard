// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["No.", "Nombre", "Apellido", "Vinculacion", "Email", "acciones"];
const tbody = [
  {
    className: "table-success",
    data: ["1", "Juan", "Garcia", "DE", "juan.garcia01@usc.edu.co"]
  },
  {
    className: "",
    data: ["2", "Sebastian", "Ospina", "DE", "sebastian.0spina01@usc.edu.co"]
  },
  {
    className: "table-info",
    data: ["3", "Claudia", "Zuniga", "TC", "claudia.zuniga@usc.edu.co"]
  },
  {
    className: "",
    data: ["4", "Carolina", "Narvaez", "DE", "carolina.Narvaez@usc.edu.co"]
  },
  {
    className: "table-danger",
    data: ["5", "Fulano", "Detal", "TC", "fulano.detal@usc.edu.co"]
  },
  { className: "", 
    data: ["6", "Pepito", "Perez", "DE", "pepito.perez@usc.edu.co"] 
  },
  {
    className: "table-warning",
    data: ["7", "Juaquin", "Loaiza", "DE", "Juaquin.Loaiza@usc.edu.co"]
  }
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
