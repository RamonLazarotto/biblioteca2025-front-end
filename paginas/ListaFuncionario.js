import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaFuncionario() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLista titulo="funcionario"
                descricao="Gerencie aqui os Funcionários da biblioteca"
                rota="/cadastrofuncionario" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Contratação</th>
                                <th scope="col">Salário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrofuncionario/${d.idfuncionario}`}>Alterar</a>
                                    </td>
                                    <td>{d.nomefuncionario}</td>
                                    <td>{d.email}</td>
                                    <td>{d.telefone}</td>
                                    <td>{d.contratacao}</td>
                                    <td>{d.salario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};