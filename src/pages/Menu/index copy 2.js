import React, { useState, useMemo } from "react";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import "./../../styles/loader.css";

const Menu = () => {
  const [data, loading] = useFetch(
    process.env.REACT_APP_BASE_URL + "productos/listarProductosWeb.php"
  );
  const [categorias, setCategorias] = useState([]);
  const { i18n } = useTranslation();

  // TODO: ADD A LOCALSTORAGE OR HOOK TO USE OFFLINE
  useMemo(() => {
    if (!loading && categorias.length === 0) {
      let idsCategorias = data.map(({ id_categoria }) => id_categoria);

      setCategorias([...new Set(idsCategorias)]);
    }
  }, [data, loading, categorias]);

  const lng = i18n.language;

  let categoriasUsadas = [];
  const verificarCategoriaUsada = (id) => {
    if (!categoriasUsadas.includes(id.toString())) {
      categoriasUsadas.push(id.toString());
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fade>
      <div className="container">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-12">
            {loading && (
              <div className="loading" style={{ display: "block" }}></div>
            )}
            {categorias.length > 0 &&
              categorias.map((id) => {
                const productos = data.map(
                  (
                    {
                      name_producto,
                      nombre_producto,
                      precio,
                      descripcion,
                      description,
                      id_categoria,
                      name_categoria,
                      nombre_categoria,
                      url_foto,
                    },
                    key
                  ) => {
                    if (id_categoria === id) {
                      return (
                        <React.Fragment key={key}>
                          {verificarCategoriaUsada(id_categoria) && (
                            <div className="row">
                              <div className="col-12 category">
                                <h3>{lng === "es" ? nombre_categoria : name_categoria}</h3>
                              </div>
                            </div>
                          )}

                          <div className="row menu-container">
                            <div className="col-lg-2 sm-12"></div>
                            <div className="col-lg-8 sm-12">
                              <div className="row">
                                <div className="col-4 menu-img-container">
                                  <img
                                    src={url_foto}
                                    className="menu-img"
                                    alt={name_producto}
                                  />
                                </div>
                                <div className="col-6 vertical-align">
                                  <h4 className="menu-name">
                                    {lng === "es"
                                      ? nombre_producto
                                      : name_producto}
                                  </h4>
                                  <h5 className="menu-description">
                                    {lng === "es" ? descripcion : description}
                                  </h5>
                                </div>
                                <div className="col-2 menu-price-container">
                                  <h3 className="menu-price">{precio}</h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 sm-12"></div>
                          </div>
                        </React.Fragment>
                      );
                    }
                  }
                );
                return productos;
              })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Menu;
