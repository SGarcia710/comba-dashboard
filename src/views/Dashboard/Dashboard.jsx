import React from "react";

import ContentCategory from '../../components/ContentCategory/ContentCategory'


class Dashboard extends React.Component {

  render() {
    return (
      <div className="content">
      
        <h1 className="display-4">Bienvenido Sebastian</h1>
        <ContentCategory 
          title="Publicaciones"
        />
        <ContentCategory 
          title="Eventos"
        />
        <ContentCategory 
          title="Libros"
        />
        <ContentCategory 
          title="Proyectos"
        />
        <ContentCategory 
          title="Software"
        />
        <ContentCategory 
          title="Movilidad"
        />
      </div>
    );
  }
}

export default Dashboard;
