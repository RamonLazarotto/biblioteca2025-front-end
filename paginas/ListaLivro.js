import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaLivro() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLista titulo="Livro"
                descricao="Gerencie aqui os livros da biblioteca"
                rota="/cadastrolivro" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Publicação</th>
                                <th scope="col">Páginas</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Editora</th>
                                <th scope="col">Edição</th>
                                <th scope="col">Resumo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrolivro/${d.idlivro}`}>Alterar</a>
                                    </td>
                                    <td>{d.idlivro}</td>
                                    <td>{d.titulo}</td>
                                    <td>{d.publicacao}</td>
                                    <td>{d.paginas}</td>
                                    <td>{d.categoria}</td>
                                    <td>{d.editora}</td>
                                    <td>{d.edicao}</td>
                                    <td>{d.resumo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};