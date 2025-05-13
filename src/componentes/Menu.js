export default function Menu(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
               <div className="container-fluid">
                 <a className="navbar-brand" href="index.html">
                   Navbar
                 </a>
                 <div className="collapse navbar-collapse">
                   <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                       <a className="nav-link active" href="index.html">
                         Home
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="listagem.html">
                         Listagem
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="cadastro.html">
                         Cadastro
                       </a>
                     </li>
                   </ul>
                   <form className="d-flex">
                     <input
                       className="form-control me-2"
                       type="search"
                       placeholder="Search"
                     />
                     <button className="btn btn-outline-light" type="submit">
                       Pesquisar
                     </button>
                   </form>
                 </div>
               </div>
            </nav>

        </>
    );
};