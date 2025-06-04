import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormEditora() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomefuncionario, setNomeFuncionario] = useState('');
    const [email, setEmailFuncionario] = useState('');
    const [telefone, setTelefoneFuncionario] = useState('');
    const [contratacao, setContratacaoFuncionario] = useState('');
    const [salario, setSalarioFuncionario] = useState('');
    

    const voltar = () => {
        navegacao('/listafuncionario');
    };

    const selecionar = async() => {
        let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
        setNomeFuncionario(data.nomefuncionario)
        setEmailFuncionario(data.email)
        setTelefoneFuncionario(data.telefone)
        setContratacaoFuncionario(data.contratacao)
        setSalarioFuncionario(data.salario)
        
        
    }

    const alterar = async () => {
        let body = {
            "nome": nomefuncionario,
            "email": email,
            "telefone": telefone,
            "contratacao": contratacao,
            "salario": salario
        };

        await axios.put(`http://localhost:4000/funcionario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nome": nomefuncionario,
            "email": email,
            "telefone": telefone,
            "contratacao": contratacao,
            "salario": salario

        };

        await axios.post(`http://localhost:4000/funcionario`, body);
        voltar();
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/funcionario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="funcionario" />

            <form>
                {id && (
                    <div className="mb-3">
                        <label className="form-label">
                            Código
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomefuncionario}
                        onChange={(evento) => setNomeFuncionario(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       value={email}
                       onChange={(evento) => setEmailFuncionario(evento.target.value)}
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Telefone
                    </label>
                    <input
                        className="form-control"
                        value={telefone}
                        onChange={(evento) => setTelefoneFuncionario(evento.target.value)}
                    />
                </div>

                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Contratação
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={contratacao}
                        onChange={(evento) => setContratacaoFuncionario(evento.target.value)}
                    />
                </div>
                
                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Salário
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={salario}
                        onChange={(evento) => setSalarioFuncionario(evento.target.value)}
                    />
                </div>

                <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </>
    );
};