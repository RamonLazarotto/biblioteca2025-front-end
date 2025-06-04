import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaUsuario() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLista titulo="Usuario"
                descricao="Gerencie aqui os Usuários da biblioteca"
                rota="/cadastrousuario" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Nascimento</th>
                                <th scope="col">Senha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrousuario/${d.idusuario}`}>Alterar</a>
                                    </td>
                                    <td>{d.idusuario}</td>
                                    <td>{d.nome}</td>
                                    <td>{d.cpf}</td>
                                    <td>{d.email}</td>
                                    <td>{d.telefone}</td>
                                    <td>{d.nascimento}</td>
                                    <td>{d.senha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};